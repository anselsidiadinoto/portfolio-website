// "use client"

import Image from "@/node_modules/next/image"
import Link from "@/node_modules/next/link"
import React from "react"

type HomeImageProps = {
  src: string;
  alt: string;
  top: number;
  left: number;
  width: number;
  height: number;
  fit: string
  redirect_link: string;
}

const HomeImage = ({ src, alt, top, left, width, height, fit, redirect_link }: HomeImageProps) => {

  console.log(src)
  return (
    
    <Link 
      className={`absolute left-[${left}px] top-[${top}px]`}
      href={redirect_link}
    >
      <div className={`relative w-[${width}px] h-[${height}px]`}>
        <Image
          src={src}
          alt={alt}
          fill
          style={ {objectFit: `${fit}`} }
          className="opacity-80 transition-all hover:cursor-pointer hover:opacity-100"
          quality={100}
        />
      </div>

      
    </Link>
    
  )
}



export default HomeImage