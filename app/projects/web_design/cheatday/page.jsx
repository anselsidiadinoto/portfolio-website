import LinkButton from '@/components/LinkButton'
import ProjectCoverImage from '@/components/projectCoverImage'
import ProjectHeader from '@/components/ProjectHeader'
import ProjectParagraph from '@/components/ProjectParagraph'
import Image from '@/node_modules/next/image'
import Link from '@/node_modules/next/link'
import React from 'react'

const page = () => {
  return (
    <div className="h-auto w-[900px] flex flex-col justify-between pt-[130px]">

      <div className="flex justify-between">
        
        <div className="h-[600px] w-[420px] relative">
          <Image 
            src="/assets/Web_design/Cheatday/site_images/cheatday_cover_crop.png"
            alt="cheatday cover"
            fill
            style={ {objectFit: 'fill'} } 
          />
        </div>

        <div>
          <ProjectHeader
            date="Fall 2019"
            title="Sensory Alleviation ch.2"
            subtitle="Store management system for a Balinese donut shop"
            description= "HTML, Javascript, CSS, Node, Express, PostgreSQL"
          />
          <div className="mt-4">
            <a 
              target="_blank"
              href="https://github.com/anselsidiadinoto/cheatdaydonuts"
              rel="noopener noreferrer"
              className="font_primary text-gray-300 border border-gray-300 py-1 px-4 rounded-sm
                          hover:text-white hover:border-black hover:bg-black"
            >
              view project on GitHub
            </a>
          </div>

          <ProjectParagraph
            text="This project is a simple full-stack website that consists of customer-facing menu form and an administrative-facing management dashboard."
            className="mt-5"
          />
          <ProjectParagraph
            text="Customers are able to view, add, and edit menu items and add them into an active shopping cart session, as well as specifying the delivery information for the order form. Once the order form is submitted, the order information are posted into a PSQL database. Shop admins will verify the order items and confirm order via the provided contact information"
          />
          <ProjectParagraph
            text="Shop owners are able to add, edit, and delete menu items from the dashboard, as well as uploading menu images stored in the cloudinary API.  If store wants to remove a menu item from the store front without deleting it, the item can be moved to inactive."
            className=""
          />
          <ProjectParagraph
            text="In the dashboard orders section, owners can view current order forms with their information, generate invoices, as well as marking an order as completed. The dashboard also provides a summary of the number of items that needs to be made on a current order period. "
            className=""
          />


        </div>
      </div>

      <div className="flex items-center gap-1 mt-10">
        <div className="font_primary text-3xl mr-5">Routing System</div>
        <div className="flex items-center">
          <div className="font_primary text-md mr-2 text-gray-300">view code for:</div>
          <LinkButton
            href="/"
            text="storefront routes"
          />
        </div>

        <LinkButton 
          href="/"
          text="storefront queries"
        />
        <LinkButton 
          href="/"
          text="admin routes"
        />
        <LinkButton 
          href="/"
          text="admin queries"
        />
      </div>


      <div className="flex flex-col items-center mt-5">
        <div className="w-full h-[800px] relative">
          <Image
            src="/assets/Web_design/Cheatday/Cheatday_diagram.png"
            alt="sensory deprivation chamber diagram"
            fill
            style={ {objectFit: "contain"} }
          />
        </div>
      </div>

      <div className="font_primary text-3xl mt-10">Storefront pages</div>
    
      <div className="flex mt-3">
          <div className="flex justify-between w-[740px]">
            <div>
              <div className="w-[360px] h-[410px] relative">
                <Image
                  src="/assets/Web_design/Cheatday/site_images/cheatday_1.png"
                  alt="sensory deprevation chamber structural diagram"
                  fill
                  style={ {objectFit: "cover"} }
                />
              </div>
              <div className='flex gap-3 mt-3'>
                <LinkButton
                  href="/"
                  text="visit homepage"
                />
                <LinkButton
                  href="/"
                  text="view code"
                />
              </div>
            </div>

            <div>
              <div className="w-[360px] h-[410px] relative">
                <Image
                  src="/assets/Web_design/Cheatday/site_images/cheatday_2.png"
                  alt="sensory deprevation chamber structural diagram"
                  fill
                  style={ {objectFit: "cover"} }
                />
              </div>
              <div className='flex gap-3 mt-3'>
                <LinkButton
                  href="/"
                  text="view code"
                />
              </div>
            </div>
          </div>
      </div>

    <div className="font_primary text-3xl mt-10">Admin pages</div>


      <div className="flex mt-3">
          <div className="flex justify-between w-[740px]">
            <div>
              <div className="w-[360px] h-[410px] relative">
                <Image
                  src="/assets/Web_design/Cheatday/site_images/cheatday_3.png"
                  alt="sensory deprevation chamber structural diagram"
                  fill
                  style={ {objectFit: "cover"} }
                />
              </div>
              <div className='flex gap-3 mt-3'>
                <LinkButton
                  href="/"
                  text="visit admin menu"
                />
                <LinkButton
                  href="/"
                  text="view code"
                />
              </div>
            </div>

            <div>
              <div className="w-[360px] h-[410px] relative">
                <Image
                  src="/assets/Web_design/Cheatday/site_images/cheatday_4.png"
                  alt="sensory deprevation chamber structural diagram"
                  fill
                  style={ {objectFit: "cover"} }
                />
              </div>
              <div className='flex gap-3 mt-3'>
                <LinkButton
                  href="/"
                  text="visit admin overview"
                />
                <LinkButton
                  href="/"
                  text="view code"
                />
              </div>
            </div>
          </div>
      </div>

      <div className="flex mt-8">
          <div className="flex justify-between w-[740px]">
            <div>
              <div className="w-[360px] h-[410px] relative">
                <Image
                  src="/assets/Web_design/Cheatday/site_images/cheatday_5.png"
                  alt="sensory deprevation chamber structural diagram"
                  fill
                  style={ {objectFit: "cover"} }
                />
              </div>
              <div className='flex gap-3 mt-3'>
                <LinkButton
                  href="/"
                  text="visit admin orders"
                />
                <LinkButton
                  href="/"
                  text="view code"
                />
              </div>
            </div>

            <div>
              <div className="w-[360px] h-[410px] relative">
                <Image
                  src="/assets/Web_design/Cheatday/site_images/cheatday_6.png"
                  alt="sensory deprevation chamber structural diagram"
                  fill
                  style={ {objectFit: "cover"} }
                />
              </div>
              <div className='flex gap-3 mt-3'>
                <LinkButton
                  href="/"
                  text="visit admin invoice"
                />
                <LinkButton
                  href="/"
                  text="view code"
                />
              </div>
            </div>
          </div>
      </div>



      <div className="flex items-center mt-10">
        <div className="font_primary text-3xl mr-5">Database schema</div>
        <LinkButton 
          href="/"
          text="view SQL"
        />
      </div>

      
      <div className="flex mt-5">
        <div className="w-[640px] h-[800px] relative">
          <Image
            src="/assets/Web_design/Cheatday/cheatday_schema.png"
            alt="sensory deprivation chamber diagram"
            fill
            style={ {objectFit: "contain"} }
          />
        </div>
      </div>
      
    </div>
  )
}

export default page