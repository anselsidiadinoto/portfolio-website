import React from 'react'
import Image from '@/node_modules/next/image'

type propTypes = {
  src: string;
  alt: string;
}

const ProjectCoverImage = ( { src, alt }: propTypes ) => {
  return (
    <div className="h-[600px] w-[420px] relative">
        <Image 
            src={src}
            alt={alt}
            fill
            style={ {objectFit: "cover"} }
        />
      </div>
)
}

export default ProjectCoverImage