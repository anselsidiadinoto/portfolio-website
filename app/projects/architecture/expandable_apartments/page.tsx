import ProjectCoverImage from '@/components/ProjectCoverImage'
import ProjectHeader from '@/components/ProjectHeader'
import ProjectParagraph from '@/components/ProjectParagraph'
import Image from '@/node_modules/next/image'
import React from 'react'

const page = () => {
  return (
    <div className="h-auto w-[900px] flex flex-col justify-between pt-[130px]">

      <div className="flex justify-between">
        <ProjectCoverImage
          src="/assets/Architecture/2_Expandable_Apartments/1.png"
          alt="expandable apartments cover"
          width="0"
          height="0"
        />
        <div>
          <ProjectHeader
            date="Spring 2020"
            title="Expandable Apartments"
            subtitle="Incremental housing through additive modules"
            description=
              "This project was a part of the architecture graduate course Modular Anatomy (A4870) at Columbia University’s Graduate School of Architecture Planning and Preservation"
            critic="Andreas Tjeldflaat"
            critic_email="aat2183@columbia.edu"
          />
          <ProjectParagraph
            text="Rising rent prices in New York city over the years have made it difficult for many people to continue living in Manhattan, let alone owning a condo. Ironically, there is a large growing number of empty lots as a direct result of people abandoning the city for more affordable housing."
            className="mt-5"
          />
          <ProjectParagraph
            text="‘Expandable Apartments’ tries to revaluate those empty buildings by applying design strategies inspired by incremental housing, adding flexibility for future New Yorker residents to gradually build and improve their homes."
          />
        </div>
      </div>

      <div className="flex justify-center">
        <div>
          <div className="w-[560px] h-[320px] mt-16 relative">
            <Image
              src="/assets/Architecture/2_Expandable_Apartments/2.png"
              alt="expandable apartments diagram"
              fill
              style={ {objectFit: "contain"} }
            />
          </div>
          <div className="flex justify-between font_desc pl-24 pr-16 mt-2">
            <p>Initial layout</p>
            <p>Extention with modules</p>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <div className="flex justify-between w-full h-auto">
          <div className="h-[720px] w-[500px] relative">
            <Image
              src="/assets/Architecture/2_Expandable_Apartments/3.png"
              alt="expandable apartments map study"
              fill
              style={ {objectFit: "contain"} }
            />
          </div>
          <div className="font_desc w-[370px] h-auto flex flex-col gap-8 pt-3">
            <div>
              <p>Site A</p>
              <p className="mt-1 leading-6">This site is located in Central Harlem with ease of access to the downtown metro lines, bike paths, as well as living amenities such as hospitals, daycares, schools, and parks. Living here would allow a more efficient lifestyle as living amenities in Harlem are less expensive.</p>
            </div>
            <div>
              <p>Site B</p>
              <p className="mt-1 leading-6">This site is located in Upper East Side, and it is relatively quieter than most parts of Manhattan. The most important aspect of this site is the close proximity to Central Park, which allows ease of work and life balance in the city.</p>
            </div>
            <div>
              <p>Site C</p>
              <p className="mt-1 leading-6">This site is located in Hell’s Kitchen, near the entertainment center of Manhattan such as Broadway. Though this area is less suitable for raising families, it is desirable for aspiring artists or career-oriented individuals looking to dive into the cultural heart of New York City.</p>
            </div>
            <div>
              <p>Site D</p>
              <p className="mt-1 leading-6">This site is located in Soho. The area is filled with upper- income avenues such as high-end retail and boutique dining. People living and working here generally already have a high annual income, but even they can benefit from incremental housing with their fast-paced lifestyles.</p>
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-6">
          <div>
            <div className="w-[210px] h-[140px] bg-green-100 relative">
              <Image
                src="/assets/Architecture/2_Expandable_Apartments/4a.png"
                alt="expandable apartments map zoom "
                fill
                style={ {objectFit: "cover"} }
              />
            </div>
            <p className="font_desc mt-2">Site A</p>
          </div>
          <div>
            <div className="w-[210px] h-[140px] bg-green-100 relative">
              <Image
                src="/assets/Architecture/2_Expandable_Apartments/4b.png"
                alt="expandable apartments map zoom "
                fill
                style={ {objectFit: "cover"} }
              />
            </div>
            <p className="font_desc mt-2">Site B</p>
          </div>
          <div>
            <div className="w-[210px] h-[140px] bg-green-100 relative">
              <Image
                src="/assets/Architecture/2_Expandable_Apartments/4c.png"
                alt="expandable apartments map zoom "
                fill
                style={ {objectFit: "cover"} }
              />
            </div>
            <p className="font_desc mt-2">Site C</p>
          </div>
          <div>
            <div className="w-[210px] h-[140px] bg-green-100 relative">
              <Image
                src="/assets/Architecture/2_Expandable_Apartments/4a.png"
                alt="expandable apartments map zoom "
                fill
                style={ {objectFit: "cover"} }
              />
            </div>
            <p className="font_desc mt-2">Site D</p>
          </div>
        </div>
      </div>

      <div className="flex justify-end mt-24 mb-24">
        <div className="flex items-end h-full w-40">
          <p className="font_desc h-min pb-3 mr-4"> Module catalogue</p>
        </div>
        <div className="w-[730px] h-[430px] relative">
          <Image
            src="/assets/Architecture/2_Expandable_Apartments/5.png"
            alt="expandable apartments map zoom "
            fill
            style={ {objectFit: "contain"} }
          />
        </div>
      </div>

      <ProjectParagraph
        text="In ‘Expandable Apartments’, people don’t own apartments, rather they own lots of spaces. They choose an initial layout of their choice from a housing module catalog, which will be constructed by certified workers. As people’s income rises, professions change, or family members grow, they can add new modules outwards and even upwards to accommodate their morphing lifestyles."
      />

      <div className="flex justify-end mt-10">
        <div className="flex items-end h-full mr-5">
          <p className="font_desc h-min"> Initial layout</p>
        </div>
        <div className="w_col_main h-[290px] relative">
          <Image
            src="/assets/Architecture/2_Expandable_Apartments/6a.png"
            alt="expandable apartments vignette"
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
      </div>
      <div className="flex justify-end mt-10">
        <div className="flex items-end h-full mr-5">
          <p className="font_desc h-min">Expansion / construction phase</p>
        </div>
        <div className="w_col_main h-[290px] relative">
          <Image
            src="/assets/Architecture/2_Expandable_Apartments/6b.png"
            alt="expandable apartments vignette "
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
      </div>
      <div className="flex justify-end mt-10">
        <div className="flex items-end h-full mr-5">
          <p className="font_desc h-min">Extended layout</p>
        </div>
        <div className="w_col_main h-[290px] relative">
          <Image
            src="/assets/Architecture/2_Expandable_Apartments/6c.png"
            alt="expandable apartments vignette "
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
      </div>


      <div>
        <div className="w-full h-[581px] relative mt-20">
          <Image
            src="/assets/Architecture/2_Expandable_Apartments/7.png"
            alt="expandable apartments map zoom "
            fill
            style={ {objectFit: "contain"} }
          />
        </div>
        <p className="font_desc pl-28">Expansion variations</p>

      </div>
    </div>
  )
  
}

export default page