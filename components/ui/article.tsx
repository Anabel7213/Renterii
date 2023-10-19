"use client"

import Link from "next/link";
import { useState } from "react";

interface ArticleProps {
    subtitle?: string
    title?: string
    image?: string
    link: string
    width?: string
    bgColor?: string
    height?: string
    fontMedium?: string
    fontSmall?: string
}

export default function Article({ subtitle, title, image, link, width, bgColor, height, fontMedium, fontSmall }: ArticleProps) {
  const [ isOpen, setIsOpen ] = useState(false)
    return (
        <div onClick={() => setIsOpen(open => !open)} className={`flex flex-col flex-grow justify-end rounded-2xl p-8 cursor-pointer ${bgColor} ${height} ${image} animate-scale`}>
          <span className="font-bold font-source">{subtitle}</span>
          <div className={`uppercase ${fontMedium ? fontMedium : "md:text-5xl"} text-start ${fontSmall ? fontSmall : "sm:text-5xl"} ${width} font-kenya tracking-wide`}>
            {!isOpen ? title : "Coming Soon!"}
          </div>
        </div>
    )
}