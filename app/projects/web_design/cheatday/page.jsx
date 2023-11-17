import LinkButton from '@/components/LinkButton'
import ProjectCoverImage from '@/components/ProjectCoverImage'
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
            date="Spring 2023"
            title="Cheatday Donuts"
            subtitle="Store management system for a Balinese donut shop"
            description= "HTML, Javascript, CSS, Node, Express, PostgreSQL"
          />
          <div className="mt-4 border border-black flex justify-center py-1 cursor-pointer hover:text-white hover:border-black hover:bg-black">
            <a 
              target="_blank"
              href="https://github.com/anselsidiadinoto/cheatdaydonuts"
              rel="noopener noreferrer"
              className="font_primary"
            >
              view project on GitHub
            </a>
          </div>

          <ProjectParagraph
            text="This project is a simple full-stack website that consists of a customer-facing menu form and an administrative-facing management dashboard."
            className="mt-5"
          />
          <ProjectParagraph
            text="Customers are able to view, add, and edit menu items and add them into an active shopping cart session, as well as specify the delivery information for the order form. Once the order form is submitted, the order information is posted into a PSQL database. Shop admins will verify the order items and confirm the order via the provided contact information"
          />
          <ProjectParagraph
            text="Shop owners can add, edit, and delete menu items from the dashboard, as well as upload menu images stored in the Cloudinary API.  If a store wants to remove a menu item from the storefront without deleting it, the item can be moved to inactive."
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
            href="https://github.com/anselsidiadinoto/cheatdaydonuts/blob/main/src/order_item/orderRoutes.js"
            text="storefront routes"
          />
        </div>

        <LinkButton 
          href="https://github.com/anselsidiadinoto/cheatdaydonuts/blob/main/src/order_item/controller.js"
          text="storefront queries"
        />
        <LinkButton 
          href="https://github.com/anselsidiadinoto/cheatdaydonuts/blob/main/src/menu_item/adminRoutes.js"
          text="admin routes"
        />
        <LinkButton 
          href="https://github.com/anselsidiadinoto/cheatdaydonuts/blob/main/src/menu_item/controller.js"
          text="admin queries"
        />
      </div>


      <div className="flex flex-col items-center mt-5">
        <div className="w-full h-[800px] relative">
          <Image
            src="/assets/Web_design/Cheatday/Cheatday_diagram.png"
            alt="cheatday routing diagram"
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
                  alt="cheatday home"
                  fill
                  style={ {objectFit: "cover"} }
                />
              </div>
              <div className='flex gap-3 mt-3'>
                <LinkButton
                  href="https://cheatdaydonuts.herokuapp.com/"
                  text="visit homepage"
                />
                <LinkButton
                  href="https://github.com/anselsidiadinoto/cheatdaydonuts/blob/main/views/order-menu.ejs"
                  text="view code"
                />
              </div>
            </div>

            <div>
              <div className="w-[360px] h-[410px] relative">
                <Image
                  src="/assets/Web_design/Cheatday/site_images/cheatday_2.png"
                  alt="cheatday add info"
                  fill
                  style={ {objectFit: "cover"} }
                />
              </div>
              <div className='flex gap-3 mt-3'>
                <LinkButton
                  href="https://github.com/anselsidiadinoto/cheatdaydonuts/blob/main/views/order-delivery-info.ejs"
                  text="view code"
                />
              </div>
            </div>
          </div>
      </div>

    <div className="font_primary text-3xl mt-10">Admin pages</div>

    <div className="font_primary text-gray-300">
      <div>Note: access to admin pages, please enter the following mock-up credentials:</div>
      <div>username: <span className="text-black font-medium">username</span></div>
      <div>password: <span className="text-black font-medium">password</span></div>
    </div>
      <div className="flex mt-3">
          <div className="flex justify-between w-[740px]">
            <div>
              <div className="w-[360px] h-[410px] relative">
                <Image
                  src="/assets/Web_design/Cheatday/site_images/cheatday_3.png"
                  alt="cheatday admin menu"
                  fill
                  style={ {objectFit: "cover"} }
                />
              </div>
              <div className='flex gap-3 mt-3'>
                <LinkButton
                  href="https://cheatdaydonuts.herokuapp.com/admin/general"
                  text="visit admin menu"
                />
                <LinkButton
                  href="https://github.com/anselsidiadinoto/cheatdaydonuts/blob/main/views/admin-general.ejs"
                  text="view code"
                />
              </div>
            </div>

            <div>
              <div className="w-[360px] h-[410px] relative">
                <Image
                  src="/assets/Web_design/Cheatday/site_images/cheatday_4.png"
                  alt="cheatday admin overview"
                  fill
                  style={ {objectFit: "cover"} }
                />
              </div>
              <div className='flex gap-3 mt-3'>
                <LinkButton
                  href="https://cheatdaydonuts.herokuapp.com/admin/orders"
                  text="visit admin overview"
                />
                <LinkButton
                  href="https://github.com/anselsidiadinoto/cheatdaydonuts/blob/main/views/admin-orders-overview.ejs"
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
                  alt="cheatday admin orders"
                  fill
                  style={ {objectFit: "cover"} }
                />
              </div>
              <div className='flex gap-3 mt-3'>
                <LinkButton
                  href="https://cheatdaydonuts.herokuapp.com/admin/orders/current"
                  text="visit admin orders"
                />
                <LinkButton
                  href="https://github.com/anselsidiadinoto/cheatdaydonuts/blob/main/views/admin-orders.ejs"
                  text="view code"
                />
              </div>
            </div>

            <div>
              <div className="w-[360px] h-[410px] relative">
                <Image
                  src="/assets/Web_design/Cheatday/site_images/cheatday_6.png"
                  alt="cheatday admin invoice"
                  fill
                  style={ {objectFit: "cover"} }
                />
              </div>
              <div className='flex gap-3 mt-3'>
                <LinkButton
                  href="https://cheatdaydonuts.herokuapp.com/admin/orders/invoice/49"
                  text="visit admin invoice"
                />
                <LinkButton
                  href="https://github.com/anselsidiadinoto/cheatdaydonuts/blob/main/views/admin-orders-invoice.ejs"
                  text="view code"
                />
              </div>
            </div>
          </div>
      </div>

      <div className="flex items-center mt-10">
        <div className="font_primary text-3xl mr-5">Database schema</div>
        <LinkButton 
          href="https://github.com/anselsidiadinoto/cheatdaydonuts/blob/main/bin/sql/cheatday_donuts_db.sql"
          text="view SQL"
        />
      </div>

      <div className="flex mt-0">
        <div className="w-[550px] h-[700px] relative">
          <Image
            src="/assets/Web_design/Cheatday/cheatday_schema.png"
            alt="cheatday database schema"
            fill
            style={ {objectFit: "contain"} }
          />
        </div>
      </div>
      
    </div>
  )
}

export default page