"use client"

import { ArrowDown } from "lucide-react"
import Title from "./ui/title"
import Link from "next/link"
export default function Main() {
    return (
        <div className="flex flex-col mx-4">
            <Title title="A sharing platform connecting communities" size="md:text-[164px] sm:text-[5.5rem]" />
            <div className="w-full rounded-2xl overflow-hidden mt-8">
            <video loop={true} muted={true} autoPlay={true} playsInline={true}>
            <source src="main.mp4" type="video/mp4"/>
            </video>
            </div>
            <div className="flex group bg-white w-fit md:absolute md:top-[800px] md:left-[700px] hover:bg-green-600 text-black py-2 pl-8 uppercase font-source md:ml-[200px] sm:ml-0 items-center md:text-sm sm:text-md cursor-pointer transition-all animate-arrow rounded-sm">
                <Link href="https://apps.apple.com/ca/app/renterii/id1532982347" className="uppercase flex flex-col pr-4 group-hover:text-white border-r">
                <span>Download App</span>
                <span className="text-gray-400 group-hover:text-gray-200">Get Started</span>
                </Link>
                <span className="px-4 group-hover:animate-spin group-hover:text-white"><ArrowDown size={30} /></span>
            </div>
        </div>
    )
}