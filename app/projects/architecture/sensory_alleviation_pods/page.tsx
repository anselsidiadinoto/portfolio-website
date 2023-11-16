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
            text="Residents in major urban cities such as New York City are exposed to a high level of sensory overload on a daily basis in the form of excessive sounds, smells, and various hazards. This combined with high-intensity lifestyles and careers significantly affects their mental-wellbeing. Many New Yorkers claim to show symptoms of stress, anxiety, and depression after living merely a year in the city."
            className="mt-5"
          />
          <ProjectParagraph
            text="For a lot of people, the allure of living in cities is the various activities that might seem to offset their intense lifestyle such as dinners, bars, concerts, and gatherings, though these activities at times focus more on redirecting the sense of dread rather than solely improving mental-wellbeing."
          />
          <ProjectParagraph
            text="Sensory Alleviation chapter 1 explores the use of sensory deprivation pods to conveniently recharge one’s mental state. Connected directly to transit stations, people could escape the sensory-overload environment of New York City for a quick bathe and mental recharge. "
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