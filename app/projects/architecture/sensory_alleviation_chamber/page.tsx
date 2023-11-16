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
          src="/assets/Architecture/5_NYC_Sendory_Alleviation_part_2/1.png"
          alt="sensory deprivation pods cover"
          width="0"
          height="0"
        />
        <div>
          <ProjectHeader
            date="Fall 2019"
            title="Sensory Alleviation ch.2"
            subtitle="Sensory deprivation chamber"
            description=
              "This project was a part of the architecture design studio CORE I (A4001) at Columbia University's Graduate School of Architecture Planning and Preservation"
            critic="Lindy Roy"
            critic_email="llr25@columbia.edu"
          />
          <ProjectParagraph
            text="'Sensory deprivation chamber' builds upon the idea of de-stressing beyond the individualized experience of sensory deprivation pods. The idea is to repurpose an abandoned train station on 91st Street and Broadway into a sound isolated landscaping chamber, which is inspired by the gentle curves of soft blankets. Only sound is isolated, a continuous glass window exists on the border of the platform level to observe the passing trains. While people are at the landscaping, they can still feel the subway lights and vibrations."
            className="mt-5"
          />
          <ProjectParagraph
            text="This proposal is a moderate solution to sensory deprivation, in contrast to the total isolation of the pods in Chapter 1. The previous pods act as an idealization of freeing oneself from sensory overload, while this proposal aims at a more practical approach."
          />
        </div>
      </div>

      <div className="flex justify-center items-center flex-col">
          <div className="w-[650px] h-[300px] mt-16 relative">
            <Image
              src="/assets/Architecture/5_NYC_Sendory_Alleviation_part_2/2.png"
              alt="sensory deprivation chamber diagram"
              fill
              style={ {objectFit: "contain"} }
            />
          </div>
          <div className="font_desc mt-1 ">
            <p>91st abandoned subway station conditions & proposed revitalization</p>
          </div>
      </div>

      <div className="flex flex-col items-center mt-32">
        <div className="w-full h-[580px] relative">
          <Image
            src="/assets/Architecture/5_NYC_Sendory_Alleviation_part_2/3.png"
            alt="sensory deprivation chamber diagram"
            fill
            style={ {objectFit: "contain"} }
          />
        </div>
        <p className="font_desc mt-6">Various use cases shown throughout the different sectional cuts</p>
      </div>


    <ProjectParagraph 
      className="mt-32"
      text="Visitors enter through the side stairs and then are given an option to store their belongings at self-storage lockers, all managed by an online management system. Visitors may also reserve their spot in advance since the area is maintained at a certain occupancy level."
    />
    <ProjectParagraph 
      text="The platform is surfaced with Isoprene rubber for a soothing, soft feel, standing above an undulating CNC wood framing. (detail 1)"
    />
    <ProjectParagraph 
      text="Sound proofing is achieved by insulating the ceilings with double layer of insulation with an air gap, as well as double pane glass windows and doors. (detail 2)"
    />

    <div className="flex justify-end">
          <div className="flex w_col_main h-[150px] mt-6 justify-between">
            <div>
              <div className="h-full w-[135px] relative">
                <Image
                  src="/assets/Architecture/5_NYC_Sendory_Alleviation_part_2/5a.png"
                  alt="sensory deprivation chamber section diagram"
                  fill
                  style={ {objectFit: "contain"} }
                />
              </div>
              <p className="font_desc">Lockers</p>
            </div>
            <div>
              <div className="h-full w-[135px] relative">
                <Image
                  src="/assets/Architecture/5_NYC_Sendory_Alleviation_part_2/5b.png"
                  alt="sensory deprivation chamber section diagram"
                  fill
                  style={ {objectFit: "contain"} }
                />
              </div>
              <p className="font_desc">Detail 1</p>
            </div>
            <div>
              <div className="h-full w-[135px] relative">
                <Image
                  src="/assets/Architecture/5_NYC_Sendory_Alleviation_part_2/5c.png"
                  alt="sensory deprivation chamber section diagram"
                  fill
                  style={ {objectFit: "contain"} }
                />
              </div>
              <p className="font_desc">Detail 2</p>
            </div>
          </div>
      </div>

      <div className="flex flex-col items-center mt-24 ">
        <div className="w-full h-[400px] relative">
          <Image
            src="/assets/Architecture/5_NYC_Sendory_Alleviation_part_2/4.png"
            alt="sensory deprivation chamber diagram"
            fill
            style={ {objectFit: "contain"} }
          />
        </div>
        <p className="font_desc mt-3">Sensory alleviation chamber section</p>
      </div>

      <ProjectParagraph
        className="mt-24"
        text="An abstract mock-up of the design was first made before starting the 3D modeling process. The study model was made using cloth that is formed appropriately, allowing the creation of crevices that inspire different usages along the chamber."
      />

      <div className="flex justify-end mt-16">
        <div className="flex items-end h-full mr-5 flex-col justify-end gap-1">
        </div>
        <div className="w_col_main h-[260px] relative">
          <Image
            src="/assets/Architecture/5_NYC_Sendory_Alleviation_part_2/Images/cloth-model.jpg"
            alt="sensory deprivation chamber cloth model"
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
      </div>

      <div className="flex justify-end mt-3">
        <div className="flex items-end h-full mr-5 flex-col justify-end gap-1">
          <p className="font_desc h-min">Cloth model and subdivision modelling</p>
        </div>
        <div className="w_col_main h-[260px] relative">
          <Image
            src="/assets/Architecture/5_NYC_Sendory_Alleviation_part_2/6.png"
            alt="sensory deprivation chamber 3d modelling"
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
      </div>

      <ProjectParagraph 
        className="mt-16"
        text="A major part of the form-finding process is using the appropriate tools that support subdivision surface modeling such as 3DS Max, in contrast to traditional CAD software such as AutoCAD, Revit, or Rhinoceros. When the form is finalized, the 3D representation of the design is used to further study possible structural strategies"
      />

      <div className="flex mt-10">
        <div className="w-[450px] h-[500px] relative">
          <Image
            src="/assets/Architecture/5_NYC_Sendory_Alleviation_part_2/7.png"
            alt="sensory deprevation chamber structural diagram"
            fill
            style={ {objectFit: "contain"} }
          />
        </div>
        <div className="flex items-end h-full ml-5 flex-col justify-end gap-1">
          <p className="font_desc h-min">Structural anatomy of the chamber</p>
        </div>
      </div>

      <div className="flex mt-10">
        <div className="w-[550px] h-[350px] relative bg-orange-100">
          <Image
            src="/assets/Architecture/5_NYC_Sendory_Alleviation_part_2/Images/model-1.jpg"
            alt="sensory deprevation chamber structural diagram"
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
      </div>

      <div className="flex mt-8">
          <div className="flex justify-between w-[550px]">
            <div className="w-[260px] h-[180px] relative">
              <Image
                src="/assets/Architecture/5_NYC_Sendory_Alleviation_part_2/Images/model-2.jpg"
                alt="sensory deprevation chamber structural diagram"
                fill
                style={ {objectFit: "cover"} }
              />
            </div>
            <div className="w-[260px] h-[180px] relative">
              <Image
                src="/assets/Architecture/5_NYC_Sendory_Alleviation_part_2/Images/model-3.jpg"
                alt="sensory deprevation chamber structural diagram"
                fill
                style={ {objectFit: "cover"} }
              />
            </div>
          </div>

        <div className="flex items-end h-full ml-5 flex-col justify-end gap-1">
          <p className="font_desc h-min">Sectional physical model</p>
        </div>
      </div>

      
    </div>
  )
}

export default page