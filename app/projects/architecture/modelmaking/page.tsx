import ProjectCoverImage from '@/components/ProjectCoverImage'
import ProjectHeader from '@/components/ProjectHeader'
import ProjectParagraph from '@/components/ProjectParagraph'
import Image from '@/node_modules/next/image'
import React from 'react'

const page = () => {
  return (
    <div className="h-auto w-[900px] flex flex-col pt-[130px]">

      <div className="flex justify-center ">
        <div className="w-[400px] h-[400px] relative brightness-110">
          <Image
            src="/assets/Architecture/10_model_making/model_1.jpg"
            alt=""
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
      </div>

      <div className="flex justify-begin mt-24">
        <div className="w-[475px] h-[225px] relative">
          <Image
            src="/assets/Architecture/10_model_making/model_14.jpg"
            alt=""
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
      </div>

      <div className="flex justify-begin mt-10">
        <div className="w-[475px] h-[225px] relative">
          <Image
            src="/assets/Architecture/10_model_making/model_12.jpg"
            alt=""
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
      </div>

      <div className="flex justify-end mt-16">
        <div className="w-[475px] h-[225px] relative">
          <Image
            src="/assets/Architecture/10_model_making/model_13.jpg"
            alt=""
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
      </div>

      <div className="flex justify-end mt-10">
        <div className="w-[475px] h-[225px] relative">
          <Image
            src="/assets/Architecture/10_model_making/model_15.jpg"
            alt=""
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
      </div>

      <div className="flex justify-begin mt-24">
        <div className="w-[375px] h-[265px] relative">
          <Image
            src="/assets/Architecture/10_model_making/model_16.jpg"
            alt=""
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
      </div>

      <div className="flex justify-end mt-24">
        <div className="w-[475px] h-[225px] relative">
          <Image
            src="/assets/Architecture/10_model_making/model_7.jpg"
            alt=""
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
      </div>

      <div className="flex justify-end mt-10">
        <div className="w-[475px] h-[225px] relative">
          <Image
            src="/assets/Architecture/10_model_making/model_9.jpg"
            alt=""
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
      </div>

      <div className="flex justify-end mt-10">
        <div className="w-[475px] h-[225px] relative">
          <Image
            src="/assets/Architecture/10_model_making/model_8.jpg"
            alt=""
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
      </div>

      <div className="flex justify-between mt-24">
        <div className="w-[420px] h-[260px] relative brightness-150">
          <Image
            src="/assets/Architecture/10_model_making/model_3.jpg"
            alt=""
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
        <div className="w-[420px] h-[260px] relative">
          <Image
            src="/assets/Architecture/10_model_making/model_11.jpg"
            alt=""
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
      </div>
  
      <div className="flex justify-begin mt-24">
        <div className="w-[420px] h-[660px] relative brightness-110">
          <Image
            src="/assets/Architecture/10_model_making/model_5.jpg"
            alt=""
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
      </div>
  
      <div className="flex justify-end mt-24">
        <div className="w-[600px] h-[360px] relative brightness-125">
          <Image
            src="/assets/Architecture/10_model_making/model_4.jpg"
            alt=""
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
      </div>
  
      <div className="flex justify-end mt-10">
        <div className="w-[600px] h-[370px] relative brightness-125">
          <Image
            src="/assets/Architecture/10_model_making/model_6.jpg"
            alt=""
            fill
            style={ {objectFit: "cover"} }
          />
        </div>
      </div>
  
    </div>
  )
}

export default page