"use client"

import { useState } from "react";
import { db } from "../../app/firebaseConfig"
import { collection, addDoc } from "firebase/firestore"
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ContactForm() {
        const router = useRouter()
        const [data, setData] = useState({
          name: "",
          company: "",
          email: "",
          phone: "",
          message: ""
        });
      
        const handleInputChange = (e:any) => {
          const { name, value } = e.target;
          setData({ ...data, [name]: value });
        };
      
        const addData = async (data: any) => {
          try {
            const docRef = await addDoc(collection(db, "inquiries"), {
              data
            })
            console.log("Success:" + docRef.id)
            return true
          } catch(err) {
            console.error("Error adding document" + err)
            return false
          }
        };

        const handleSubmit = async (e: any) => {
          e.preventDefault()
          const response = await addData(data)
          if(response) {
            toast.success("Message sent!")
            setTimeout(() => {router.push("/")}, 1000)
          } else {
            toast.error("Oopsie... That didn't work!")
          }
        }

    return (
        <div className="w-full flex flex-col">
          <Toaster position="top-center" />
            <h1 className="md:text-8xl sm:text-7xl flex items-end md:pr-24 uppercase pl-4 pt-4 font-kenya font-bold">Shoot us <br /> a Message</h1>
            <form onSubmit={handleSubmit} className="flex flex-col font-bold justify-end mt-16" autoComplete="off">
                <input required onChange={handleInputChange} type="text" name="name" placeholder="What do we call you?" className="w-full p-4 outline-none border-none bg-green-600 placeholder:text-white/50 text-2xl" />
                <input required onChange={handleInputChange} type="text" name="company" placeholder="What's your company name?" className="w-full p-4 outline-none border-none bg-green-700 placeholder:text-white/50 text-2xl"/>
                <input required onChange={handleInputChange} type="email" name="email" placeholder="How about an email address?" className="w-full p-4 outline-none border-none bg-green-800 placeholder:text-white/50 text-2xl" />
                <input onChange={handleInputChange} type="phone" name="phone" placeholder="Can we have your phone number?" className="w-full p-4 outline-none border-none bg-green-900 placeholder:text-white/50 text-2xl" />
                <textarea required onChange={handleInputChange} name="message" placeholder="How can we help?" className="resize-none md:h-[200px] sm:h-[140px] w-full p-4 outline-none border-none bg-green-950 placeholder:text-white/50 text-2xl"></textarea>
                <button type="submit" className="w-full bg-white p-5 text-5xl font-kenya text-green-950 tracking-wide">Submit</button>
            </form>
            <div className="w-full bg-white h-[500px]"></div>
        </div>
    )
}