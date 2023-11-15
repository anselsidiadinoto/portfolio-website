import ProjectCoverImage from '@/components/projectCoverImage'
import ProjectHeader from '@/components/ProjectHeader'
import ProjectParagraph from '@/components/ProjectParagraph'
import Image from '@/node_modules/next/image'
import React from 'react'

const page = () => {
  return (
    <div className="h-auto w-[900px] flex flex-col justify-between pt-[130px]">

      <div className="flex justify-between">
        <ProjectCoverImage
          src="/assets/Architecture/4_NYC_Sensory_Alleviation_part_1/1.png"
          alt="sensory deprivation pods cover"
          width="0"
          height="0"
        />
        <div>
          <ProjectHeader
            date="Fall 2019"
            title="Sensory Alleviation ch.1"
            subtitle="Sensory deprivation pods"
            description=
              "This project was a part of the architecture design studio CORE I (A4001) at 
              Columbia University’s Graduate School of Architecture Planning and Preservation"
            critic="Lindy Roy"
            critic_email="llr25@columbia.edu"
          />
          <ProjectParagraph
            text="Traveling in New York City is never as smooth as it supposed be. Heavy pedestrian traffic requires constant attentiveness, noise pollution from police sirens, vibrations from the subway, all contribute to the an numbing of people’s sensory instruments. Long term exposure to these sensory-overload conditions can significantly impact the mental well-being of New Yorkers - many show symptoms of stress, anxiety, and depression after staying merely a year in New York City."
            className="mt-5"
          />
          <ProjectParagraph
            text="Although stress alleviation does exist in forms of yoga, exercise, and meditation, I propose a solution that taps directly in the main infrastructure of New York City: Sensory deprivation pods readily available outside subway stations; An opportunity to totally unwind and disconnect in hopes for a rejuvenated metal state afterwards."
          />
        </div>
      </div>

      <div className="flex justify-center items-center flex-col">
          <div className="w-[530px] h-[340px] mt-16 relative">
            <Image
              src="/assets/Architecture/4_NYC_Sensory_Alleviation_part_1/2.png"
              alt="sensory deprivation pods diagram"
              fill
              style={ {objectFit: "contain"} }
            />
          </div>
          <div className="font_desc mt-1 ">
            <p>Sensory alleviation pods integrated to NYC subway stations</p>
          </div>
      </div>

      <div className="flex flex-col items-center mt-20">
        <div className="w-full h-[620px] relative">
          <Image
            src="/assets/Architecture/4_NYC_Sensory_Alleviation_part_1/3.png"
            alt="sendory deprivation pods sound levels study"
            fill
            style={ {objectFit: "contain"} }
          />
        </div>
        <p className="font_desc mt-1">Sound levels study</p>
      </div>

      <div className="flex justify-end mt-10">
        <div className="flex items-end h-full mr-5 flex-col justify-end gap-1">
          <p className="font_desc h-min">Pods section</p>
        </div>
        <div className="w-[520px] h-[350px] relative">
          <Image
            src="/assets/Architecture/4_NYC_Sensory_Alleviation_part_1/6.png"
            alt="sensory deprivation pods section"
            fill
            style={ {objectFit: "contain"} }
          />
        </div>
      </div>

      <div className="flex justify-end mt-16">
        <div className="flex items-end h-full mr-5 flex-col justify-end gap-1">
          <p className="font_desc h-min">Pods filtration system</p>
        </div>
        <div className="w-[520px] h-[500px] relative">
          <Image
            src="/assets/Architecture/4_NYC_Sensory_Alleviation_part_1/4.png"
            alt="sensory deprivation pods technical details"
            fill
            style={ {objectFit: "contain"} }
          />
        </div>
      </div>
      
      
    </div>
  )
}

export default page