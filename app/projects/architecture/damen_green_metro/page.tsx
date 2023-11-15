import ProjectCoverImage from '@/components/projectCoverImage'
import ProjectHeader from '@/components/ProjectHeader'
import ProjectParagraph from '@/components/ProjectParagraph'
import Image from '@/node_modules/next/image'
import React from 'react'

const page = () => {
  return (
    <div className="h-auto w-[900px] flex flex-col justify-between pt-[130px]">

      <div className="flex flex-col items-center ">
        <div className="w-full h-[609px] relative">
          <Image
            src="/assets/Architecture/6_Perkins_and_Will/East-View.jpg"
            alt="sensory deprivation chamber diagram"
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
      </div>


      <div className="flex justify-between">
        <div>
          <p className="font_desc mt-3">Metro station visualization with Lumion</p>
        </div>
        <div className="mt-5">
          <ProjectHeader
            date="Summer 2018"
            title="Damen Green Line Station"
            subtitle="Metro Station proposal by the City of Chicago"
            description=
              "These visualizations were done for a public presentation for Chicago Office of the Major as a part of an architecture internship with Perkins and Will Chicago "
          />
          <ProjectParagraph
            text="The Damen Green Line metro station proposal will provide an essential transit point for Chicago’s West Loop as it connects greater Chicago with important landmarks such as the United Center stadium. The increase of pedestrian traffic in the area also provides development opportunity that will reinvigorate the neighborhood. "
            className="mt-5"
          />
          <ProjectParagraph
            text="During my internship, I made architectural visualizations with Lumion as well as postproduction work on the images using Photoshop. These renderings were used for a public presentation by Chicago Office of the Major. This metro station project was later approved and is currently due for completion in April 2024."
          />
          <ProjectParagraph
            text="All images belong to Perkins and Will Chicago"
          />
        </div>
      </div>

      <div className="flex justify-end mt-16">
        <div className="flex items-end h-full mr-5 flex-col justify-end gap-1">
        </div>
        <div className="w_col_main h-[260px] relative">
          <Image
            src="/assets/Architecture/6_Perkins_and_Will/Major/image.JPG"
            alt="sensory deprivation chamber cloth model"
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
      </div>
      <div className="flex items-end h-full mt-3 flex-col justify-end gap-1">
          <p className="font_desc h-min">Public announcement of the project</p>
      </div>

      <div className="flex mt-10">
        <div className="w-[600px] h-[340px] relative">
          <Image
            src="/assets/Architecture/6_Perkins_and_Will/Plaza-facing-South.jpg"
            alt="damen green rendering"
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
      </div>
      <div className="flex mt-10">
        <div className="w-[600px] h-[340px] relative">
          <Image
            src="/assets/Architecture/6_Perkins_and_Will/Interior-Entry.jpg"
            alt="damen green rendering"
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
      </div>
      <div className="flex mt-10">
        <div className="w-[600px] h-[340px] relative">
          <Image
            src="/assets/Architecture/6_Perkins_and_Will/Interior-Bridge.jpg"
            alt="damen green rendering"
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
      </div>
      <div className="flex mt-10">
        <div className="w-[600px] h-[340px] relative">
          <Image
            src="/assets/Architecture/6_Perkins_and_Will/Aerial-Northeast.jpg"
            alt="damen green rendering"
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
      </div>



    </div>
  )
}

export default page