import { Circle } from "lucide-react"

interface TitleProps {
    alignment?: string
    subtitle?: string
    title?: string
    uppercase?: boolean
    firstOf?: string
    logo?: any
    middleOf?: string
    lastOf?: string
    size?: string
    icon?: boolean
    width?: string
    accent?: any
}

export function Logo() {
    return (
        <span className="font-source normal-case">renterii</span>
    )
}

export function Accent() {
  const splits = "connect, rent & pay".split(/(\s|,|&)/);
  const highlight = ['connect', 'rent', 'pay'];

  return (
    <span>
      {splits.map((split, index) => {
        const isColored = highlight.includes(split.trim());

        return (
          <span key={index} className={isColored ? 'text-green-600' : 'text-white'}>
            {split}
          </span>
        );
      })}
    </span>
  );
}

export default function Title({ alignment, subtitle, title, uppercase, firstOf, logo, middleOf, lastOf, size, icon, width, accent }: TitleProps) {
    return (
        <div className={`flex flex-col gap-2 ${alignment} ${width}`}>
            <span className={`font-source flex gap-2 items-center ${uppercase === true && "uppercase"}`}>{icon === true && <Circle fill="#FFFFFF" size={16} className="animate-pulse" />}{subtitle}</span>
            <h1 className={`font-kenya uppercase tracking-wide leading-none ${size ? size : "text-6xl"}`}>{title ? title : firstOf} {!title && logo} {!title && middleOf} {!title && accent} {!title && lastOf}</h1>
        </div>
    )
}