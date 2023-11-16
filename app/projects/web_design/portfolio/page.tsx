import LinkButton from '@/components/LinkButton'
import ProjectCoverImage from '@/components/ProjectCoverImage'
import ProjectHeader from '@/components/ProjectHeader'
import ProjectParagraph from '@/components/ProjectParagraph'
import Image from '@/node_modules/next/image'
import Link from '@/node_modules/next/link'
import React from 'react'

const page = () => {
  return (
    <div className="h-auto w-[900px] flex flex-col justify-between pt-[130px]">

      <div className="flex justify-between">
        
        <div className="h-[470px] w-[420px] relative">
          <Image 
            src="/assets/Web_design/portfolio/cover.png"
            alt="portfolio cover"
            fill
            style={ {objectFit: 'contain'} } 
          />
        </div>

        <div>
          <ProjectHeader
            date="Fall 2023"
            title="Shapearoo"
            subtitle="A showcase of my architecture and web design work"
            description= "Next.js, React, Typescript, TailwindCSS"
          />
          <div className="mt-4 border border-black flex justify-center py-1 cursor-pointer
                          hover:text-white hover:border-black hover:bg-black">
            <a 
              target="_blank"
              href="https://github.com/anselsidiadinoto/portfolio-website"
              rel="noopener noreferrer"
              className="font_primary"
            >
              view project on GitHub
            </a>
          </div>

          <ProjectParagraph
            text="Building upon my fundamental web design knowledge of HTML, Javascript, and CSS, I explored modern frameworks to build my portfolio website. While learning how to make a server and all of its routing with Express and Node is important, I found Next’s App directory and serverless features very practical for quickly getting a project up and running for development."
            className="mt-5"
          />
          <ProjectParagraph
            text="This static portfolio website also provides a good entry point into learning modern web development techniques with React, as I continue to build larger applications that are efficient and scalable."
          />

        </div>
      </div>


      
    </div>
  )
}

export default page