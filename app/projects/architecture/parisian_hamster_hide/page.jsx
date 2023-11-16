import ProjectCoverImage from '@/components/projectCoverImage'
import ProjectHeader from '@/components/ProjectHeader'
import ProjectParagraph from '@/components/ProjectParagraph'
import Image from '@/node_modules/next/image'
import React from 'react'

const page = () => {
  return (
    <div className="h-auto w-[900px] flex flex-col justify-between pt-[130px]">

      <div className="flex flex-col items-center mb-2 ">
        <div className="w-full h-[609px] relative">
          <Image
            src="/assets/Architecture/9_hamster_house/hamster-1.jpg"
            alt="hamster hide"
            fill
            style={ {objectFit: "contain"} }
          />
        </div>
      </div>


      <div className="flex justify-between">
        <div>
          <p className="font_desc mt-3">Architecturally inspired hamster homes</p>
        </div>
        <div className="mt-3">
          <ProjectHeader
            date="Spring 2022"
            title="Parisian Hamster Hide"
            subtitle="Hamster hides sculpted with CNC mill"
          />
          <ProjectParagraph
            text="Most hamster hides that exist in the market today are made with brightly colored plastic with little to no aesthetics. What if hamster hides are instead made out of eco-friendly materials with designs inspired by inspiring architecture references?"
            className="mt-5"
          />
          <ProjectParagraph
            text="Using a Computer Numerical Control (CNC) mill I installed in my closet, I produced Parisian-style hamster hides that were entirely carved out of maple hardwood. "
          />
        </div>
      </div>


      <div className="flex flex-col items-center  ">
        <div className="w-full h-[450px] relative">
          <Image
            src="/assets/Architecture/9_hamster_house/drawings.jpg"
            alt="hamster hide diagram"
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
      </div>

      <div className="flex mt-10">
        <div className="w-[500px] h-[340px] relative">
          <Image
            src="/assets/Architecture/9_hamster_house/drawings2.jpg"
            alt="hamster hide diagram"
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
        <div className="flex items-end h-full ml-5 flex-col justify-end gap-1">
        </div>
      </div>

      <div className="flex mt-10">
        <div className="w-[500px] h-[340px] relative">
          <Image
            src="/assets/Architecture/9_hamster_house/hamster-4.jpg"
            alt="hamster hide"
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
        <div className="flex items-end h-full ml-5 flex-col justify-end gap-1">
        </div>
      </div>
      <div className="flex mt-10">
        <div className="w-[500px] h-[340px] relative">
          <Image
            src="/assets/Architecture/9_hamster_house/hamster-2.jpg"
            alt="hamster hide"
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
        <div className="flex items-end h-full ml-5 flex-col justify-end gap-1">
        </div>
      </div>
      <div className="flex mt-10">
        <div className="w-[500px] h-[340px] relative">
          <Image
            src="/assets/Architecture/9_hamster_house/hamster-9.jpg"
            alt="hamster hide"
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
        <div className="flex items-end h-full ml-5 flex-col justify-end gap-1">
        </div>
      </div>

      <div className="flex mt-10">
        <div className="w-[500px] h-[340px] relative">
          <Image
            src="/assets/Architecture/9_hamster_house/ref_1.jpg"
            alt="hamster hide"
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
        <div className="w-[200px] h-[340px] ml-10 relative">
          <Image
            src="/assets/Architecture/9_hamster_house/ref_2.PNG"
            alt="hamster hide"
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
      </div>
      
      

  
    </div>
  )
}

export default page