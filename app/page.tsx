"use client"

import Link from "@/node_modules/next/link";
import Image from "@/node_modules/next/image"
import HomeImage from "@/components/HomeImage";


export default function Home() {
  return (

    <div className="mt-[130px] ml-[30px] pl-[35px]">
      <div className="relative bg-green-200">
        <Link 
          className={`w-[230px] h-[386px] absolute left-[0px] top-[23px]`}
          href="/culinary_promenade"
        >
          <Image 
              src="/assets/Architecture/1_Culinary_Promenade/1.png"
              alt="culinary_promenade"
              fill
              style={ {objectFit: "cover"} }
              className="opacity-80 transition-all hover:cursor-pointer hover:opacity-100"
          />
        </Link>


        <Link 
          className={`w-[219px] h-[208px] absolute left-[267px] top-[0px]`}
          href="/expandable_apartments"
        >
          <Image 
              src="/assets/Architecture/2_Expandable_Apartments/1.png"
              alt="expandable_apartments"
              fill
              style={ {objectFit: "cover"} }
              className="opacity-80 transition-all hover:cursor-pointer hover:opacity-100"
          />
        </Link>



        <Link 
          className={`w-[257px] h-[145px] absolute left-[514px] top-[23px]`}
          href="/"
        >
          <Image 
              src="/assets/Web design/Cheatday/home.png"
              alt="cheatday_donuts"
              fill
              style={ {objectFit: "cover"} }
              className="opacity-80 transition-all hover:cursor-pointer hover:opacity-100"
          />
        </Link>

        <Link 
          className={`w-[255px] h-[185px] absolute left-[285px] top-[237px]`}
          href="/"
        >
          <Image 
              src="/assets/Architecture/3_Undulating_Transitional_Geometries/1b.png"
              alt="transitional_geometries"
              fill
              style={ {objectFit: "cover"} }
              className="opacity-80 transition-all hover:cursor-pointer hover:opacity-100"
          />
        </Link>

        <Link 
          className={`w-[223px] h-[248px] absolute left-[577px] top-[208px]`}
          href="/"
        >
          <Image 
              src="/assets/Architecture/5_NYC_Sendory_Alleviation_part_2/1.png"
              alt="sensory_alleviation_chamber"
              fill
              style={ {objectFit: "cover"} }
              className="opacity-80 transition-all hover:cursor-pointer hover:opacity-100"
          />
        </Link>

        <Link 
          className={`w-[283px] h-[207px] absolute left-[24px] top-[462px]`}
          href="/"
        >
          <Image 
              src="/assets/Architecture/4_NYC_Sensory_Alleviation_part_1/home.png"
              alt="sensory_alleviation_chamber"
              fill
              style={ {objectFit: "cover"} }
              className="opacity-80 transition-all hover:cursor-pointer hover:opacity-100"
          />
        </Link>

        <Link 
          className={`w-[354px] h-[170px] absolute left-[354px] top-[500px]`}
          href="/"
        >
          <Image 
              src="/assets/Web design/Shapearoo/home.png"
              alt="shapearoo"
              fill
              style={ {objectFit: "cover"} }
              className="opacity-80 transition-all hover:cursor-pointer hover:opacity-100"
          />
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
