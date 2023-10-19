import Image from "next/image";
import { db } from "../../app/firebaseConfig"
import { collection, addDoc } from "firebase/firestore"
import toast, { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function SlideOut() {
    const router = useRouter()
    const [ phone, setPhone ] = useState("")
  
    const addData = async (phone: any) => {
      try {
        const docRef = await addDoc(collection(db, "smsRequests"), {
          phone
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
      const response = await addData(phone)
      if(response) {
        if(window.innerWidth > 600) {
          setTimeout(() => toast.error("Oops, please try using a mobile device!"), 1000)
        } else if(window.innerWidth < 600) {
          toast.success("On the way!")
          setTimeout(() => router.push("https://apps.apple.com/ca/app/renterii/id1532982347"), 1000)
        }
      } else {
        toast.error("Oopsie... That didn't work!")
      }
    }
    return (
        <div className="w-full flex flex-col">
            <Toaster position="top-center" />
            <h1 className="md:text-8xl sm:text-7xl flex gap-2 items-end md:pr-24 md:pl-8 md:py-4 sm:p-4 uppercase font-kenya font-bold">Download <br /> via SMS</h1>
            <form onSubmit={handleSubmit} className="flex font-bold items-center mt-16 md:p-16 sm:p-4">
                <div className="flex items-center md:w-[500px] sm:w-[300px]">
                <span className="md:text-6xl sm:text-4xl">+1</span>
                <input onChange={(e) => setPhone(e.target.value)} type="phone" placeholder="0000000000" max={10} className="outline-none bg-transparent border-none md:text-6xl sm:text-4xl placeholder:text-white/30"/>
                </div>
                <button type="submit" className="flex gap-4"><Image src="/ArrowWhite.svg" alt="Custom Element" width={60} height={100} className="animate-arrow2 sm:w-[48px] sm:h-[48px] md:w-[60px] md:h-[100px]"/></button>
            </form>
            <div className="w-full bg-green-950 h-[500px]"></div>
        </div>
    )
}