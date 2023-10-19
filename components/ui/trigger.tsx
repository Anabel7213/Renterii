import { Sheet } from "lucide-react";
import { SheetTrigger, SheetContent } from "./sheet";
import Image from "next/image";

interface TriggerProps {
    actionWord?: string
    style?: string
    content?: any
    image?: boolean
    header?: boolean
    title?: string
    description?: string
    size?: string
    pSize?: string
    color?: string
    bgColor?: string
    width?: string
}

export default function Trigger({ actionWord, style, content, image, header, title, description, size, pSize, color, bgColor, width }: TriggerProps) {
  return (
    <Sheet>
      <SheetTrigger className={style}>     
          {actionWord}
          {image === true && (
            <Image src="/ArrowWhite.svg" alt="Image" width={100} height={100} className="group-hover:hidden transition-all md:w-[100px] md:h-[80px] sm:w-[60px] sm:h-[40px]" />
          )}
          {header === true && (
            <>
            <h1 className={`${size} font-source uppercase`}>{title}</h1>
            <p className={`${pSize} font-bold ${color}`}>{description}</p>
            </>
          )}
      </SheetTrigger>
      <SheetContent className={`${width} ${bgColor}`}>
        {content}
      </SheetContent>
    </Sheet>
  )
}