"use client"

import { useState } from "react";
import { db, storage } from "../../app/firebaseConfig"
import { collection, addDoc } from "firebase/firestore"
import toast, { Toaster } from "react-hot-toast";
import { usePathname, useRouter } from "next/navigation";
import { ref, uploadBytes } from "firebase/storage"

export default function CareerForm() {
  const location = usePathname()
  const router = useRouter()
  const [ file, setFile ] = useState(null)
  const [data, setData] = useState({
    name: "",
    resume: null,
    email: "",
    phone: "",
    experience: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value, files } = e.target;
    if (files) {
      const file = files[0];
      setFile(file);
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const fileUpload = () => {
    if(file === null) return;
    const fileRef = ref(storage, `resumes/${data.name} ${file.name}`)
    uploadBytes(fileRef, file).then(() => {
      console.log("Resume uploaded")
    })
  }
  
  const addData = async (data: any) => {
    try {
      const docRef = await addDoc(collection(db, "applicants"), {
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
    if(file) {
      await fileUpload()
      data.resume = `${data.name} ${file.name}`
    }
    const response = await addData(data)
    if(response) {
      toast.success("Resume sent!")
      setTimeout(() => {location.includes("/about") ? router.push("/") : router.push("/about")}, 1000)
    } else {
      toast.error("Oopsie... That didn't work!")
    }
  }
    return (
        <div className="w-full flex flex-col">
            <Toaster position="top-center" />
            <h1 className="md:text-8xl sm:text-7xl flex gap-2 items-end md:pr-24 uppercase pl-4 pt-4 font-kenya font-bold">Join us!</h1>
            <form onSubmit={handleSubmit} className="flex flex-col font-bold items-center mt-16">
                <input onChange={handleInputChange} type="text" name="name" placeholder="Aubrey Graham" className="w-full p-4 outline-none border-none bg-slate-700 placeholder:text-white/50 text-2xl" />
                <input onChange={handleInputChange} type="file" name="resume" placeholder="Please upload your resume" className="w-full p-4 outline-none border-none bg-slate-800 placeholder:text-white/50 text-2xl"/>
                <input onChange={handleInputChange} type="email" name="email" placeholder="aubrey@gmail.com" className="w-full p-4 outline-none border-none bg-slate-900 placeholder:text-white/50 text-2xl" />
                <input onChange={handleInputChange} type="phone" name="phone" placeholder="(000) 000-0000" className="w-full p-4 outline-none border-none bg-slate-800 placeholder:text-white/50 text-2xl" />
                <textarea onChange={handleInputChange} name="experience" placeholder="Briefly describe your experience..." className="md:h-[290px] sm:h-[200px] w-full p-4 outline-none border-none bg-slate-900 placeholder:text-white/50 text-2xl"></textarea>
                <button className="w-full bg-white p-5 text-5xl font-kenya text-slate-900 tracking-wide">Submit</button>
            </form>
            <div className="w-full bg-white h-[500px]"></div>
        </div>
    )
}