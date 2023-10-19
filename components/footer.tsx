"use client"

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import SlideOut from "./ui/slideout";
import ContactForm from "./ui/contactForm";
import CareerForm from "./ui/careerForm";
import Title from "./ui/title";
import Link from "next/link";
import { Copyright } from "lucide-react";

export default function Footer() {
    const location = usePathname()
    const router = useRouter()
    return (
        <div className="flex flex-col gap-4 md:mx-8 md:my-16 sm:mx-4 sm:my-8">
            {location !== '/about' ? (
                <Title title="Browse and order thousands of items, spaces and experiences though our app" icon={true} subtitle="Get Started" />
            ) : <Title icon={true} subtitle="Get Started" />
            }

            <div className={location === "/about" ? "hidden" : "w-full border h-[400px] rounded-2xl animate-scale cursor-pointer mt-4 flex justify-center items-center"}>
                <Sheet>
                    <SheetTrigger>
                    <button className="group flex gap-2 text-black font-kenya tracking-wide uppercase md:text-7xl sm:text-4xl items-center md:py-8 md:px-16 sm:py-4 sm:px-8 bg-white rounded-full hover:bg-green-600 hover:text-green" onClick={() => {}}>Download
                <Image src="/ArrowBlack.svg" alt="Custom Element" width={80} height={40} className="group-hover:hidden transition-all md:w-[100px] md:h-[80px] sm:w-[60px] sm:h-[40px]"/>
                </button>
                    </SheetTrigger>
                    <SheetContent className="md:w-[800px] sm:w-full bg-green-600">
                        <SlideOut />
                    </SheetContent>
                </Sheet>
            </div>
                {location === "/about" ? (
                <div className="flex md:flex-row justify-between sm:flex-col gap-4 md:h-[300px] sm:h-fit">
                <Sheet>
                <SheetTrigger className="text-start p-8 sm:gap-8 md:gap-2 rounded-2xl bg-slate-900 flex flex-col justify-between text-white cursor-pointer animate-scale w-full">
                    <h1 className="text-3xl font-source uppercase">{location === "/about" ? "Careers" : "Come work with us"}</h1>
                    <span className="text-2xl font-bold text-slate-400">{location === "/about" ? "See what jobs we have available and join us on our mission to help connect communities thr sharing" : "Check out our open positions and join our talented team."}</span>
                </SheetTrigger>
                <SheetContent className="md:w-[800px] sm:w-full bg-slate-600">
                    <CareerForm />
                </SheetContent>
                </Sheet>
                <Sheet>
                <SheetTrigger className="text-start p-8 sm:gap-8 md:gap-2 rounded-2xl bg-white flex flex-col justify-between text-black cursor-pointer animate-scale w-full">
                    <h1 className="font-source text-3xl uppercase">Contact Us</h1>
                    <span className="text-2xl font-bold">Our team is always on hand to help with any questions or general enquiries</span>
                </SheetTrigger>
                <SheetContent className="md:w-[800px] sm:w-full bg-green-600">
                    <ContactForm />
                </SheetContent>
                </Sheet>
                </div>
                ) : (
                    <div className="flex md:flex-row justify-between sm:flex-col gap-4 md:h-[300px] sm:h-fit">
                    <Sheet>
                    <SheetTrigger className="text-start p-8 sm:gap-8 md:gap-2 rounded-2xl bg-slate-900 flex flex-col justify-between text-white cursor-pointer animate-scale w-full">
                    <h1 className="text-3xl font-source uppercase">Come work with us</h1>
                    <span className="text-2xl font-bold text-slate-400">See what jobs we have available and join us on our mission to help connect communities thr sharing</span>
                    </SheetTrigger>
                    <SheetContent className="md:w-[800px] sm:w-full bg-slate-600">
                        <CareerForm />
                    </SheetContent>
                    </Sheet>
                    <div onClick={() => router.push("/about")} className="p-8 sm:gap-8 md:gap-2 rounded-2xl bg-white flex flex-col justify-between text-black cursor-pointer animate-scale w-full">
                    <h1 className="font-source text-3xl uppercase">Who is <span className="text-5xl font-source normal-case">renterii?</span></h1>
                    <span className="text-2xl font-bold md:max-w-[500px]">Find out more about our story and how we&#39;re changing the industry.</span>
                    </div>
                    </div>
                )}
                
                <div className="flex sm:flex-col md:flex-row uppercase items-center justify-between font-source sm:mb-4 md:mb-0">
                <span className="flex gap-1 items-center text-gray-500"><Copyright size={16} /> Renterii LTD 2023</span>
                <div className="md:flex gap-2 items-center sm:hidden uppercase">
                    <span>More</span>
                    <Sheet>
                    <SheetTrigger>
                        <span className="text-gray-500 hover:text-white transition-all uppercase">Contact</span>
                    </SheetTrigger>
                    <SheetContent className="md:w-[800px] sm:w-full bg-green-600">
                        <ContactForm />
                    </SheetContent>
                    </Sheet>
                    <Link href="/about" className="text-gray-500 hover:text-white transition-all">FAQ</Link>
                    <Sheet>
                    <SheetTrigger>
                        <span className="text-gray-500 hover:text-white transition-all uppercase">Jobs</span>
                    </SheetTrigger>
                    <SheetContent className="md:w-[800px] sm:w-full bg-slate-600">
                        <CareerForm />
                    </SheetContent>
                    </Sheet>
                </div>
                <div className="flex gap-2 items-center">
                    <span>Social</span>
                    <Link href="https://www.facebook.com/renterii/" className="text-gray-500 hover:text-white transition-all">Facebook</Link>
                    <span>/</span>
                    <Link href="https://www.instagram.com/renteriiapp/?hl=en" className="text-gray-500 hover:text-white transition-all">Instagram</Link>
                    <span>/</span>
                    <Link href="https://www.linkedin.com/company/renterii/?viewAsMember=true" className="text-gray-500 hover:text-white transition-all">LinkedIn</Link>
                </div>
                <div className="md:flex gap-2 items-center sm:hidden">
                    <span>Language</span>
                    <span className="text-gray-500">English &#40;US&#41;</span>
                </div>
            </div>
        </div>
    )
}