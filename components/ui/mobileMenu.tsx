"use client"

import { ArrowDown, Menu, PlusCircle, PlusSquare, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import SlideOut from "./slideout";
  

export default function MobileMenu() {
    const items = [
        {
            title: "search",
            subtitle: "rentals",
            icon: <Search size={36} className="group-hover:animate-spin" />,
            link: "#"
        },
        {
            title: "renters",
            subtitle: "mobile app",
            icon: <PlusSquare className="text-black group-hover:animate-spin" fill="#ffffff" size={36} />,
            link: "https://apps.apple.com/ca/app/renterii/id1532982347"
        },
        {
            title: "businesses",
            subtitle: "business tools",
            icon: <PlusSquare className="text-black group-hover:animate-spin" fill="#ffffff" size={36} />,
            link: "https://apps.apple.com/ca/app/renterii-lender/id6450633322"
        },
        {
            title: "careers",
            subtitle: "join us",
            icon: <PlusCircle className="text-black group-hover:animate-spin" fill="#ffffff" size={36} />,
            link: "/about"
        },
        {
            title: "about",
            subtitle: "our story",
            icon: <PlusCircle className="text-black group-hover:animate-spin" fill="#ffffff" size={36} />,
            link: "/about"
        },
    ]
    return (
        <div className="md:hidden sm:flex flex-col gap-4 justify-between p-4 items-center sticky top-0 bg-black z-100">
        <div className="flex items-center w-full justify-between">
            <Link href="/"><Image src="/logo.png" width={200} height={50} alt="Company logo." /></Link>
            <Sheet>
            <SheetTrigger><Menu size={36} className="hover:animate-spin cursor-pointer"/></SheetTrigger>
            <SheetContent side="top">
            <div className="flex flex-col text-center uppercase font-source gap-2 mt-4 w-full">
                {items.map((item, index) => (
                    <Link target="_blank" key={index} href={item.link} className="hover:text-gray-300">{item.title}</Link>
                ))}
            </div>
                <Sheet>
                    <SheetTrigger className="w-full">
                    <div className="flex group uppercase cursor-pointer items-center bg-green-600 hover:bg-white py-2 w-full justify-center gap-4 px-4 rounded-sm mt-8">
                        <ArrowDown className="group-hover:animate-spin group-hover:text-black"/>
                        <div className="flex flex-col items-start group-hover:text-black">
                        <span className="group-hover:text-black">Download App</span>
                        <span className="text-white/50 group-hover:text-black">Get Started</span>
                        </div>
                    </div>
                    </SheetTrigger>
                    <SheetContent className="md:w-[800px] sm:w-full bg-green-600">
                        <SlideOut />
                    </SheetContent>
                </Sheet>
            </SheetContent>
            </Sheet>
            
        </div>
        </div>
    )
}