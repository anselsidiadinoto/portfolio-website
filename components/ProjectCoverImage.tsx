import React from 'react'
import Image from '@/node_modules/next/image'

type propTypes = {
  src: string;
  alt: string;
  width: number | string;
  height: number | string;
  object_fit?: string
}

const ProjectCoverImage = ( { src, alt, width, height, object_fit }: propTypes ) => {
  const test = object_fit
  console.log(test)

  return (
    <div className="h-[600px] w-[420px] relative">
        <Image 
            src={src}
            alt={alt}
            fill
            style={ {objectFit: 'cover'} } 
        />
      </div>
)
}

export default ProjectCoverImage