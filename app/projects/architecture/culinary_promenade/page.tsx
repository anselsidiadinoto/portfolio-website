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
          src="/assets/Architecture/1_Culinary_Promenade/1.png"
          alt="culinary_promenade_cover"
          width="0"
          height="0"
        />
        <div>
          <ProjectHeader
            date="Spring 2020"
            title="Culinary Promenade"
            subtitle="East Village Cooking School"
            description=
              "This project was a part of the CORE II (A4002) architecture design studio at Columbia University’s Graduate School of Architecture Planning and Preservation"
            critic="Christoph Kumpusch"
            critic_email="ck2540@columbia.edu"
          />
          <ProjectParagraph
            text="The rich processes involved in cooking can be used to teach foundational knowledge. Instead of cooking as a goal like in traditional culinary institutes, 'Culinary Promenade' uses cooking as a means of education. Teaching physics by analyzing oven mechanics, biology by picking fruits in the greenhouse, and history by studying the cultural aspects of food. "
            className="mt-5"
          />
          <ProjectParagraph
            text="The architectural manifestation of this project is a design that is highly dynamic to reflect the unique approach to education, with spaces blending together, and intersections that create interstitial spaces needed for education."
          />
        </div>
      </div>


      <div className="flex justify-between mt-10 mb-10">
        <div className="w-[420px] font_primary italic mt-10">
          This project takes an existing abandoned school at 350 E 10th Street, East Village New York, repurposes the existing structure as well as adding necessary improvements, and finally integrates a ‘Greenhouse Promenade’
        </div>
        <div className="w_col_main h-40 relative">
          <Image
            src="/assets/Architecture/1_Culinary_Promenade/2.png"
            alt="culinary promenade diagram"
            fill
            style={ {objectFit: "contain"} }
          />
        </div>
      </div>


      <ProjectParagraph
        text="The culinary school features a ‘greenhouse promenade’, which is a vegetation library that is represented as a grand walkway spanning through three levels. Here students can learn from fresh ingredients and produce that will be used for their cooking courses. A catalog of nutritional facts is given to students about the plants, which are organized into three main areas which are vegetables, herbs, and wheat."
      />


      <div className="flex justify-between mt-20 mb-20">
        <div className="w-[270px] h-full flex flex-col">
          <div className="h-[80px] w-[110px] relative">
            <Image
              src="/assets/Architecture/1_Culinary_Promenade/5.png"
              alt="culinary promenade diagram"
              fill
              style={ {objectFit: "contain"} }
            />            
          </div>
          <div className="h-full w-[200px] relative">
            <Image
              src="/assets/Architecture/1_Culinary_Promenade/4.png"
              alt="culinary promenade diagram"
              fill
              style={ {objectFit: "contain"} }
            />            

          </div>
        </div>
        <div className="w-[670px] h-[600px] relative">
          <Image
            src="/assets/Architecture/1_Culinary_Promenade/3.png"
            alt="culinary promenade diagram"
            fill
            style={ {objectFit: "contain"} }
          />
        </div>
      </div>

      <ProjectParagraph
        text="Classrooms can be rearranged in various ways depending on the goals of the courses and instructors. This is possible by using a movable working station equipped with cooking and study essentials. The flexible organization allows for more collaboration for learning, or more privacy during lectures and exams."
      />

      <div className="flex flex-col w-[660px] mt-20 mb-20">
        <div className="w-full h-[150px] relative">
          <Image
            src="/assets/Architecture/1_Culinary_Promenade/7.png"
            alt="culinary promenade diagram"
            fill
            style={ {objectFit: "contain"} }
          />

        </div>
        <div className="w-full h-[470px] relative">
          <Image
            src="/assets/Architecture/1_Culinary_Promenade/6.png"
            alt="culinary promenade diagram"
            fill
            style={ {objectFit: "contain"} }
          />
        </div>
        <div className="font_desc">
          <p>Cross section and classroom layout arrangements</p>
        </div>
      </div>


      <ProjectParagraph
        text="There are three types of vegetation placeholders. The first allows small plants and herbs to grow in a rotatable platform, allowing for ease of viewing and watering. The second is a two-level stack suited for medium-sized plants requiring more space to grow. The third is large and open, allowing tall wheat plans such as paddy and corn to grow optimally. All of these placeholders are equipped with heating and ventilation systems enabling all-year growing conditions."
      />

      <div className="flex justify-end">
        <div>
          <div className="flex w_col_main h-[150px] mt-6 justify-between">
            <div className="h-full w-[110px] relative">
              <Image
                src="/assets/Architecture/1_Culinary_Promenade/10a.png"
                alt="culinary promenade diagram"
                fill
                style={ {objectFit: "contain"} }
              />
            </div>
            <div className="h-full w-[110px] relative">
              <Image
                src="/assets/Architecture/1_Culinary_Promenade/10b.png"
                alt="culinary promenade diagram"
                fill
                style={ {objectFit: "contain"} }
              />
            </div>
            <div className="h-full w-[150px] relative">
              <Image
                src="/assets/Architecture/1_Culinary_Promenade/10c.png"
                alt="culinary promenade diagram"
                fill
                style={ {objectFit: "contain"} }
              />
            </div>
          </div>
          <p className="font_desc text-right mt-5">Three types of vegetation placeholders</p>
        </div>
      </div>

      <div>
        <div className="flex w-[500px] h-[350px] relative mt-5">
          <Image
            src="/assets/Architecture/1_Culinary_Promenade/9.png"
            alt="culinary promenade diagram"
            fill
            style={ {objectFit: "contain"} }
          />
        </div>
        <div className="font_desc mt-3">
          <p>Structural anatomy of the</p>
          <p>Greenhouse promenade bridge section</p>
        </div>
      </div>

      <div>
        <div className="flex h-[540px] w-full mt-20 relative">
          <Image
            src="/assets/Architecture/1_Culinary_Promenade/8.png"
            alt="culinary promenade diagram"
            fill
            style={ {objectFit: "contain"} }
          />
        </div>
        <div className="font_desc mt-1">
          <p>Longitudinal section</p>
        </div>
      </div>
    </div>
  )
}

export default page
