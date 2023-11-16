import ProjectCoverImage from '@/components/projectCoverImage'
import ProjectHeader from '@/components/ProjectHeader'
import ProjectParagraph from '@/components/ProjectParagraph'
import Image from '@/node_modules/next/image'
import React from 'react'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";


const page = () => {
  return (
    <div className="h-auto w-[900px] pt-[130px]">

      <div className=" w-[820px] mx-auto font_primary">
        <div className="flex justify-between pl-20">
          <div className="w-[200px] h-[200px] relative">
              <Image
                src="/assets/profile/profile.JPG"
                alt="sensory deprivation chamber diagram"
                fill
                style={ {objectFit: "cover"} }
              />
          </div>
          <div className="flex flex-col w-full font_primary text-[24px] ml-12">
            <div className="mt-16">
              <p>Hi! I'm an architect diving into</p>
              <p>programming and the tech world</p>
            </div>
            <div className="mt-28">
              <p>I'm interested in exploring the ways technology</p>
              <p>can help designers make and share their ideas,</p>
              <p>design philosophies, and innovations</p>
            </div>
          </div>
        </div>

        <div className="mt-24 flex gap-3 ">
          <div className="border border-black flex justify-center items-center py-1 cursor-pointer w-32 h-12
                            hover:text-white hover:border-black hover:bg-black">
            <FaGithub
              size="25px"
            />
            <a
              target="_blank"
              href="https://github.com/anselsidiadinoto"
              rel="noopener noreferrer"
              className="font_primary ml-2 pt-[5px]"
            >
              GitHub
            </a>
          </div>

          <div className="border border-black flex justify-center items-center py-1 cursor-pointer w-32 h-12
                            hover:text-white hover:border-black hover:bg-black">
            <FaLinkedin
              size="25px"
            />
            <a
              target="_blank"
              href="https://github.com/anselsidiadinoto"
              rel="noopener noreferrer"
              className="font_primary ml-2 pt-[5px]"
            >
              LinkedIn
            </a>
          </div>


        </div>


        <div className="mt-10 text-[24px] underline">
          Skills
        </div>

        <div>
          <div className="mt-2 font_primary text-[18px]">
            Java, Phyton, React, Typescript, Next.js, TailwindCSS, PostgreSQL, HTML, CSS, Javascript
          </div>
          

        </div>

        <div className="mt-8 text-[24px] underline">
          Professional experience
        </div>

        <div className="mt-6">
          <div>
            <div className="text-[18px] text-gray-400">
              May 2022 - May 2023
            </div>
            <div className="text-[24px]">
              Architecture Design Analyst
            </div>
            <div className="text-[24px]">
              Therme US - New York City, NY
            </div>
            <ul className="text-[16px] list-disc pl-6 mt-2">
              <li>
                Adapted the specifications of Therme wellness resorts in Europe into easy-to-understand diagrams and visualizations for stakeholder presentations by leveraging architectural 3D modeling and rendering
              </li>
              <li>
                Performed design analysis of potential Therme resorts in the Washing DC, Dallas, Houston, and NYC by taking into account land valuation, public transport accessibility, expansion opportunities, site history, and the impact on the surrounding neighborhood
              </li>
              <li>
                Coordinated design reviews between the Therme team and external architecture, real estate, and government consultants
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[18px] mt-6 text-gray-400">
              June 2020 - May 2022
            </div>
            <div className="text-[24px]">
              Real Estate Analyst
            </div>
            <div className="text-[24px]">
              CloudKitchens - Los  Angeles, CA
            </div>
            <ul className="text-[16px] list-disc pl-6 mt-2">
              <li>
                Performed 3D scans and structural studies of acquired facilities in the Southwest US Region to estimate cost viability
              </li>
              <li>
                Initiated the implementation of the Procore, construction management platform which allowed transparent bidding across all vendors and improved coordination of construction tasks with general contractors
              </li>
              <li>
                Saved an estimated $1,146,000 of owner-furnished equipment in 2021 – 2022 when compared to the general contractor pricing on the same materials in 2020 – 2021
              </li>
            </ul>
          </div>

          <div>
            <div className="text-[18px] mt-6 text-gray-400">
              Summer 2018
            </div>
            <div className="text-[24px]">
              Architecture Design Intern
            </div>
            <div className="text-[24px]">
              Perkins and Will - Chicago, IL
            </div>
            <ul className="text-[16px] list-disc pl-6 mt-2">
              <li>
                Initiated the use of Lumion to create architecture visualizations for the Damen Green Line metro station, a project presented by Chicago’s Office of the Mayor for public review. This project was later approved and currently due for completion in April 2024
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-10 text-[24px] underline">
          Education
        </div>

        
        <div className="text-[18px] mt-6 text-gray-400">
          August 2019 - May 2020
        </div>
        <div className="text-[24px]">
          Columbia University
        </div>
        <div className="text-[20px]">
          Master of Architecture
        </div>


        <div className="text-[18px] mt-6 text-gray-400">
          August 2015 - May 2019
        </div>
        <div className="text-[24px]">
          University of Illinois at Urbana Champaign
        </div>
        <div className="text-[20px]">
          Bachelor of Science in Architecture Studies
        </div>






      </div>




      
      

  
    </div>
  )
}

export default page