"use client"

import { ArrowDown, PlusCircle, PlusSquare, Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import MobileMenu from "./ui/mobileMenu";

import {
    Sheet,
    SheetContent,
    SheetTrigger,
  } from "@/components/ui/sheet"
import SlideOut from "./ui/slideout";
import CareerForm from "./ui/careerForm";
  

export default function Header() {
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
            title: "about",
            subtitle: "our story",
            icon: <PlusCircle className="text-black group-hover:animate-spin" fill="#ffffff" size={36} />,
            link: "/about"
        }
    ]
    return (
        <>
        <MobileMenu />
        <div className="sm:hidden md:flex gap-4 justify-between p-4 items-center sticky top-0 bg-black z-100">
        <Link href="/"><Image src="/logoSymbol.svg" width={200} height={50} alt="Company logo."/></Link>
            <div className="flex gap-6 items-center font-source uppercase text-sm">
                {items.map((item, index) => (
                    <div key={index} className="group flex gap-2 items-center cursor-pointer">
                        {item.icon}
                        <Link href={item.link} className="flex flex-col">
                            <span>{item.title}</span>
                            <span className={index === 5 ? "text-gray-300" : "text-gray-500"}>{item.subtitle}</span>
                        </Link>
                    </div>
                ))}
                <Sheet>
                    <SheetTrigger>
                    <div className="group flex gap-2 items-center cursor-pointer">
                        <PlusCircle className="text-black group-hover:animate-spin" fill="#ffffff" size={36} />
                        <div className="flex flex-col uppercase">
                        <span>Careers</span>
                        <span className="text-gray-500">Join us</span>
                        </div>
                    </div>
                    </SheetTrigger>
                    <SheetContent className="md:w-[800px] sm:w-full bg-slate-600">
                        <CareerForm />
                    </SheetContent>
                </Sheet>
                <Sheet>
                    <SheetTrigger>
                    <div className="flex group uppercase cursor-pointer gap-2 items-center bg-green-600 hover:bg-white py-2 px-4 rounded-sm">
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
            </div>
        </div>
        </>
    )
}