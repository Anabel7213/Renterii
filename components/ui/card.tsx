import Link from "next/link";
import Title from "./title";
import Image from "next/image";

interface CardProps {
    title?: string
    description?: string
    button?: string
    image?: any
    link: string
    direction?: string
    margin?: string
}

export default function Card({ title, description, button, image, link, direction, margin }: CardProps) {
    return (
        <div className={`flex ${direction} sm:flex-wrap md:flex-nowrap w-full justify-between items-center md:gap-16 sm:gap-4 ${margin}`}>
        <Image src={image} width={1000} height={400} alt="Company image." className="w-full h-[400px] mt-8 rounded-2xl object-cover"/>
        <div className="flex flex-col gap-4 max-w-[500px]">
            <Title title={title} size="md:text-8xl sm:text-7xl" />
            <p className="text-2xl font-bold text-gray-400">{description}</p>
            <Link target="_blank" href={link} className="uppercase md:py-8 md:px-16 sm:p-8 w-fit text-center bg-green-600 rounded-sm md:mt-8 sm:mt-4 font-source hover:bg-white hover:text-black transition-all">{button}</Link>
        </div>
        </div>
    )
}