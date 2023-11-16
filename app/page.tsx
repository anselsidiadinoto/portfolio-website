"use client"

import Link from "@/node_modules/next/link";
import Image from "@/node_modules/next/image"
import HomeImage from "@/components/HomeImage";


export default function Home() {
  return (

    <div className="mt-[130px] ml-[30px] pl-[35px]">

      <div className="relative">

        <Link
          className={`w-[235px] h-[360px] absolute left-[0px] top-[0px text-white hover:text-black`}
          href="/projects/architecture/culinary_promenade"
        >
          <Image
              src="/assets/Architecture/1_Culinary_Promenade/1.png"
              alt="culinary_promenade"
              fill
              style={ {objectFit: "cover"} }
              className="home_images"
          />
          <div className="home_images_text">
            <p>Culinary</p>
            <p>Promenade</p>
          </div>
        </Link>




        <Link 
          className={`w-[237px] h-[257px] absolute left-[258px] top-[0px] text-white hover:text-black `}
          href="/projects/architecture/expandable_apartments"
        >
          <Image 
              src="/assets/Architecture/2_Expandable_Apartments/1.png"
              alt="expandable_apartments"
              fill
              style={ {objectFit: "cover"} }
              className="home_images z-0"
          />
          <div className="home_images_text">
            <p>Expandable</p>
            <p>Apartments</p>
          </div>
        </Link>



        <Link 
          className={`w-[236px] h-[224px] absolute left-[518px] top-[0px] text-white hover:text-black`}
          href="/projects/web_design/cheatday"
        >
          <Image 
              src="/assets/Web_design/Cheatday/site_images/cheatday_home.png"
              alt="cheatday_donuts"
              fill
              style={ {objectFit: "cover"} }
              className="home_images"
          />
          <div className="home_images_text">
            <p>Cheatday</p>
            <p>Donuts</p>
          </div>
        </Link>

        <Link 
          className={`w-[237px] h-[147px] absolute left-[258px] top-[280px] text-white hover:text-black`}
          href="/projects/architecture/transitional_geometries"
        >
          <Image 
              src="/assets/Architecture/3_Undulating_Transitional_Geometries/1b.png"
              alt="transitional_geometries"
              fill
              style={ {objectFit: "cover"} }
              className="home_images"
          />
          <div className="home_images_text">
            <p>Transitional</p>
            <p>Geometries</p>
          </div>
        </Link>

        <Link 
          className={`w-[236px] h-[228px] absolute left-[518px] top-[247px] text-white hover:text-black`}
          href="/projects/architecture/sensory_alleviation_chamber"
        >
          <Image 
              src="/assets/Architecture/5_NYC_Sendory_Alleviation_part_2/1.png"
              alt="sensory_alleviation_chamber"
              fill
              style={ {objectFit: "cover"} }
              className="home_images"
          />
          <div className="home_images_text">
            <p>Sensory</p>
            <p>Alleviation</p>
            <p>Chamber</p>
          </div>
        </Link>

        <Link 
          className={`w-[237px] h-[190px] absolute left-[518px] top-[498px] text-white hover:text-black`}
          href="/projects/architecture/sensory_alleviation_pods"
        >
          <Image 
              src="/assets/Architecture/4_NYC_Sensory_Alleviation_part_1/home.png"
              alt="sensory_alleviation_pods"
              fill
              style={ {objectFit: "cover"} }
              className="home_images"
          />
          <div className="home_images_text">
            <p>Sensory</p>
            <p>Alleviation</p>
            <p>Pods</p>
          </div>
        </Link>

        <Link 
          className={`w-[236px] h-[229px] absolute left-[259px] top-[442px] text-white hover:text-black`}
          href="/projects/web_design/shapearoo"
        >
          <Image 
              src="/assets/Web_design/Shapearoo/site_images/shapearoo_home.png"
              alt="shapearoo"
              fill
              style={ {objectFit: "cover"} }
              className="home_images"
          />
          <div className="home_images_text">
            <p>Shapearoo</p>
          </div>
        </Link>

        <Link 
          className={`w-[235px] h-[151px] absolute left-[0px] top-[383px] text-white hover:text-black`}
          href="/projects/architecture/parisian_hamster_hide"
        >
          <Image 
              src="/assets/Architecture/9_hamster_house/hamster-9.jpg"
              alt="hamster hide"
              fill
              style={ {objectFit: "cover"} }
              className="home_images"
          />
          <div className="home_images_text">
            <p>Parisian</p>
            <p>Hamster Hide</p>
          </div>
        </Link>

        <Link 
          className={`w-[236px] h-[272px] absolute left-[0px] top-[557px] text-white hover:text-black`}
          href="/projects/architecture/urban_oasis"
        >
          <Image 
              src="/assets/Architecture/8_Therme/therme_1.png"
              alt="urban_oasis"
              fill
              style={ {objectFit: "cover"} }
              className="home_images"
          />
          <div className="home_images_text">
            <p>Urban</p>
            <p>Oasis</p>
          </div>
        </Link>

        <Link 
          className={`w-[237px] h-[144px] absolute left-[259px] top-[685px] text-white hover:text-black`}
          href="/projects/architecture/damen_green_metro"
        >
          <Image 
              src="/assets/Architecture/6_Perkins_and_Will/East-View.jpg"
              alt="damen green metro"
              fill
              style={ {objectFit: "cover"} }
              className="home_images"
          />
          <div className="home_images_text">
            <p>Damen Green</p>
            <p>Metro Station</p>
          </div>
        </Link>

        <Link 
          className={`w-[235px] h-[119px] absolute left-[519px] top-[711px] text-white hover:text-black`}
          href="/projects/architecture/modelmaking"
        >
          <Image 
              src="/assets/Architecture/10_model_making/model_15.jpg"
              alt="modelmaking"
              fill
              style={ {objectFit: "cover"} }
              className="home_images"
          />
          <div className="home_images_text">
            <p>Modelmaking</p>
          </div>
        </Link>
        
    
        {/* <HomeImage
          src="/assets/Architecture/4_NYC_Sensory_Alleviation_part_1/home.png"
          alt="sensory_alleviation_pods"
          left="24"
          top="460"
          width="283"
          height="426"
          fit="cover"
          redirect_link="/"
        />
         */}

      </div>
    </div>
    
  )
}
