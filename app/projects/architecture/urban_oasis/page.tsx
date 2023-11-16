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
            src="/assets/Architecture/8_Therme/therme_1.png"
            alt="urban oasis visualization"
            fill
            style={ {objectFit: "contain"} }
          />
        </div>
      </div>


      <div className="flex justify-between">
        <div>
          <p className="font_desc mt-0">Visualization of an integrated wellness center</p>
        </div>
        <div>
          <ProjectHeader
            date="Fall 2022"
            title="Urban Oasis"
            subtitle="Affordable wellness resorts in urban centers"
            description=
              "These visualizations are conceptual design explorations on adapting the communal wellness centers of Europe into the heart of US metropolitan areas"
          />
          <ProjectParagraph
            text="Bathing culture has been an integral part of many communities for thousands of years. From the ancient Roman baths and Russian banyas, to modern wellness facilities such as those built by Therme Group, communities flock to these bathing centers because they represent more than just mere cleanliness. Of course, before the advent of modern sanitation and plumbing, bathhouses were the only way to maintain hygiene. But over time, bathhouses persist because they also provide a sense of spiritual cleansing through their tangible properties, such as the water composition - a lot of bathhouses sit on natural springs which contain certain water minerals that heal, and also intangible benefits such as providing a space for maintaining relationships with the community and family."
            className="mt-5"
          />
          <ProjectParagraph
            text="Bathhouses were and still are an egalitarian space. Parents come with their children, friends come with their old classmates, professionals with their coworkers, or just individuals. Bathhouses have the effect of soothing people's mental state, allowing them to open up and relax. The heat from the hot water and saunas also releases natural body chemicals that relieve stress."
          />
        </div>
      </div>


      <div className="flex mt-8">
          <div className="flex justify-between w-[550px]">
            <div className="w-[260px] h-[180px] relative">
              <Image
                src="/assets/Architecture/8_Therme/ref_5.jpeg"
                alt="urban oasis reference"
                fill
                style={ {objectFit: "cover"} }
              />

            </div>
            <div className="w-[260px] h-[180px] relative">
              <Image
                src="/assets/Architecture/8_Therme/ref_4.jpeg"
                alt="urban oasis reference"
                fill
                style={ {objectFit: "cover"} }
              />
            </div>
          </div>

        <div className="flex items-end h-full ml-5 flex-col justify-end gap-1">
          <p className="font_desc h-min">Ancint baths and tratidional saunas</p>
        </div>

      </div>

      <ProjectParagraph 
        className="mt-10"
        text="Due to its history of being for the community, bathhouses are naturally affordable. By design, bathhouse facilities are large structures that perform various services for a large number of people, such as hot steam, clean water, and a community space. This is different from the definition of modern spas, which usually provide individualized services for the few that are willing to pay the hefty price tag."
      />
      <ProjectParagraph 
        text="Modern bathhouses such as Therme Bucharest integrate their location of being above a natural thermal source with modern innovations such as weather control, water filtration systems, and programmed irrigation to provide a tropical wellness experience that is accessible for all.  A full-day access of 80 euros provides visitors with various types of pools, baths, saunas, and relaxation areas, as well as any activities planned by the Therme team."
      />

      <div className="flex mt-10">
        <div className="w-[420px] h-[220px] relative bg-orange-100">
          <Image
            src="/assets/Architecture/8_Therme/ref_1.jpeg"
            alt="therme_bucharest_1"
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
      </div>

      <div className="flex mt-8">
          <div className="flex justify-between w-[550px]">
            <div className="w-[260px] h-[180px] relative">
              <Image
                src="/assets/Architecture/8_Therme/ref_2.jpeg"
                alt="therme_bucharest_3"
                fill
                style={ {objectFit: "cover"} }
              />
            </div>
            <div className="w-[260px] h-[180px] relative">
              <Image
                src="/assets/Architecture/8_Therme/ref_3.jpeg"
                alt="therme_bucharest_3"
                fill
                style={ {objectFit: "cover"} }
              />
            </div>
          </div>

        <div className="flex items-end h-full ml-5 flex-col justify-end gap-1">
          <p className="font_desc h-min">Therme Bucharest</p>
        </div>
      </div>


      <ProjectParagraph 
        className="mt-16"
        text="A wellness facility inpired by Therme Bucharest will provide opportunity for people living in US urban centers a space for healing and relaxation at an affordable price. Architecturally, the facility also has to conform to the urban fabric of established US cities, which is far different from the sites of Therme facilities in Europe, in which most are located at the outskirts of cities with ample space."
      />
      <ProjectParagraph 
        text="A wellness facility inspired by Therme Bucharest will provide an opportunity for people living in US urban centers a space for healing and relaxation at an affordable price. Architecturally, the facility also has to conform to the urban fabric of established US cities, which is far different from the sites of Therme facilities in Europe, in which most are located on the outskirts of cities with ample space."
      />



      <div className="flex flex-col items-center mt-12 ">
        <div className="w-full h-[400px] relative">
          <Image
            src="/assets/Architecture/8_Therme/therme_3.png"
            alt="urban oasis diagram"
            fill
            style={ {objectFit: "contain"} }
          />
        </div>
        <p className="font_desc mt-0">Wellness center composition within a tower</p>
      </div>

      <div className="flex mt-10">
        <div className="w-[600px] h-[340px] relative">
          <Image
            src="/assets/Architecture/8_Therme/therme_2.png"
            alt="urban oasis collage"
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
        <div className="flex items-end h-full ml-5 flex-col justify-end gap-1">
          <p className="font_desc h-min">Mood collage of views</p>
        </div>
      </div>

      <div className="flex mt-10">
        <div className="w-[600px] h-[340px] relative">
          <Image
            src="/assets/Architecture/8_Therme/therme_1.png"
            alt="urban oasis collage"
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
        <div className="flex items-end h-full ml-5 flex-col justify-end gap-1">
          <p className="font_desc h-min">Integration with urban centers</p>
        </div>
      </div>

      <div className="flex mt-10">
        <div className="w-[600px] h-[340px] relative">
          <Image
            src="/assets/Architecture/8_Therme/therme_4.png"
            alt="urban oasis render"
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
        <div className="flex items-end h-full ml-5 flex-col justify-end gap-1">
          <p className="font_desc h-min">Adapting design typology to context</p>
        </div>
      </div>

      <div className="flex flex-col items-center mt-12 ">
        <div className="w-full h-[450px] relative">
          <Image
            src="/assets/Architecture/8_Therme/therme_5.png"
            alt="urban oasis render"
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
        <p className="font_desc mt-3">Integration with urban arteries</p>
      </div>
      
    </div>
  )
}

export default page