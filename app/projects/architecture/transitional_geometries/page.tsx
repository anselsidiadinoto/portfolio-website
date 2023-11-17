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
          src="/assets/Architecture/3_Undulating_Transitional_Geometries/cover.png"
          alt="transitional geometries cover"
          width="0"
          height="0"
        />
        <div>
          <ProjectHeader
            date="Fall 2019"
            title="Transitional Geometries"
            subtitle="3D Concrete tiling through hands-on fabrication"
            description=
              "This project was a part of the fabrication graduate course Transitional geometries (A4856) at Columbia University’s Graduate School of Architecture Planning and Preservation"
            critic="Joshua Jordan"
            critic_email="jcj2134@columbia.edu"
          />
          <ProjectParagraph
            text="The goal of Transitional Geometries was to design a three-dimensional tiling system, and then construct an efficient fabrication process that would allow ease of mass production. My tiles were inspired by the curvy patterns of instant ramen noodles, which also have similarities to the microscopic form of cloth weavings. "
            className="mt-5"
          />
          <ProjectParagraph
            text="I chose concrete as the main material because it gives a sense of solidity and weight. When concrete is shaped into undulating patterns, it almost feels uncanny because the material and the shape have seemingly contrasting spatial properties. My tile design doesn’t literally copy the ramen noodle’s shape, rather it deconstructs the ramen noodle’s underlying geometric pattern into a rational 2D form, then extrapolated into 3D."
          />
        </div>
      </div>

      <div className="flex justify-center items-center flex-col">
          <div className="w-[530px] h-[220px] mt-16 relative">
            <Image
              src="/assets/Architecture/3_Undulating_Transitional_Geometries/2.png"
              alt="expandable apartments diagram"
              fill
              style={ {objectFit: "contain"} }
            />
          </div>
          <div className="font_desc mt-1 ">
            <p>Deconstructing the geometric underlay of instant ramen noodles</p>
          </div>
      </div>

      <div className="flex flex-col mt-28">
        <div className="w-full h-[560px] relative">
          <Image
            src="/assets/Architecture/3_Undulating_Transitional_Geometries/3a.png"
            alt="expandable apartments form study"
            fill
            style={ {objectFit: "contain"} }
          />
        </div>
        <p className="font_desc mt-6 ml-[260px]">Design studies with various formal combinations</p>
      </div>

      <div className="flex flex-col items-center mt-10">
        <div className="w-full h-[750px] relative">
          <Image
            src="/assets/Architecture/3_Undulating_Transitional_Geometries/4.png"
            alt="expandable apartments form process"
            fill
            style={ {objectFit: "contain"} }
          />
        </div>
        <p className="font_desc mt-1">Two-part mold fabrication process</p>
      </div>


      <div className="flex justify-end mt-20">
        <div className="flex items-end h-full mr-5 flex-col justify-end gap-1">
          <p className="font_desc h-min">Assembling the wooden container for</p>
          <p className="font_desc h-min">the first half of the silicone mold</p>
        </div>
        <div className="w-[280px] h-[200px] relative">
          <Image
            src="/assets/Architecture/3_Undulating_Transitional_Geometries/images/process_a.JPG"
            alt="transitional geometries mold process"
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
      </div>
      <div className="flex justify-end mt-10">
        <div className="flex items-end h-full mr-5 flex-col justify-end gap-1">
          <p className="font_desc h-min">Preparing the second half of</p>
          <p className="font_desc h-min">the silicone mold</p>
        </div>
        <div className="w-[280px] h-[200px] relative">
          <Image
            src="/assets/Architecture/3_Undulating_Transitional_Geometries/images/process_b.JPG"
            alt="transitional geometries mold process"
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
      </div>
      <div className="flex justify-end mt-10">
        <div className="flex items-end h-full mr-5 flex-col justify-end gap-1">
          <p className="font_desc h-min">Concrete micture is poured into the</p>
          <p className="font_desc h-min">the void of the two part mold</p>
        </div>
        <div className="w-[280px] h-[200px] relative">
          <Image
            src="/assets/Architecture/3_Undulating_Transitional_Geometries/images/process_c.JPG"
            alt="transitional geometries mold process"
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
      </div>
      <div className="flex justify-end mt-10">
        <div className="flex items-end h-full mr-5 flex-col justify-end gap-1">
          <p className="font_desc h-min">Tiles are extracted and treated</p>
          <p className="font_desc h-min">for a smooth finish</p>
        </div>
        <div className="w-[280px] h-[200px] relative">
          <Image
            src="/assets/Architecture/3_Undulating_Transitional_Geometries/images/process_d.JPG"
            alt="transitional geometries mold process"
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
      </div>

      <ProjectParagraph
        text="The undulating form is designed to be adaptable when fabricated at various scales"
        className='mt-20'
      />
      
      <div className="flex justify-end mt-1 mr-16">
        <div className="w-[320px] h-[150px] relative">
          <Image
            src="/assets/Architecture/3_Undulating_Transitional_Geometries/6.png"
            alt="transitional geometries diagram"
            fill
            style={ {objectFit: "contain"} }
          />
        </div>
      </div>
      

      <div className="flex mt-10">
        <div className="w-[380px] h-[220px] relative">
          <Image
            src="/assets/Architecture/3_Undulating_Transitional_Geometries/5a.png"
            alt="transitional geometries visualization"
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
        <div className="flex items-end h-full ml-5 flex-col justify-end gap-1">
          <p className="font_desc h-min">Small scale</p>
        </div>
      </div>
      <div className="flex mt-16">
        <div className="w-[380px] h-[140px] relative">
          <Image
            src="/assets/Architecture/3_Undulating_Transitional_Geometries/5b.png"
            alt="transitional geometries visualization"
            fill
            style={ {objectFit: "contain"} }
          />
        </div>
        <div className="flex items-end h-full ml-5 flex-col justify-end gap-1">
          <p className="font_desc h-min">Medium scale</p>
        </div>
      </div>
      <div className="flex mt-10">
        <div className="w-[380px] h-[220px] relative">
          <Image
            src="/assets/Architecture/3_Undulating_Transitional_Geometries/5c.png"
            alt="transitional geometries visualization"
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
        <div className="flex items-end h-full ml-5 flex-col justify-end gap-1">
          <p className="font_desc h-min">Large scale</p>
        </div>
      </div>

      <div className="flex justify-end mt-20">
        <div className="w-[498px] h-[350px] relative">
          <Image
            src="/assets/Architecture/3_Undulating_Transitional_Geometries/images/trans-1.jpg"
            alt="transitional geometries"
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
      </div>
      


      





    </div>
  )
}

export default page