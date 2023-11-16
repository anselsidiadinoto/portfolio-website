import LinkButton from '@/components/LinkButton'
import ProjectHeader from '@/components/ProjectHeader'
import ProjectParagraph from '@/components/ProjectParagraph'
import Image from '@/node_modules/next/image'
import Link from '@/node_modules/next/link'
import React from 'react'

const page = () => {
  return (
    <div className="h-auto w-[900px] flex flex-col justify-between pt-[130px]">

      <div className="flex justify-between">
        
        <div className="h-[700px] w-[420px] relative">
          <Image 
            src="/assets/Web_design/Shapearoo/site_images/shapearoo_cover_crop.png"
            alt="shapearoo cover"
            fill
            style={ {objectFit: 'cover'} } 
          />
        </div>

        <div>
          <ProjectHeader
            date="Fall 2023"
            title="Shapearoo"
            subtitle="3D printing platform for architects and designers"
            description= "HTML, Javascript, CSS, Node, Express, PostgreSQL"
          />
          <div className="mt-4 border border-black flex justify-center py-1 cursor-pointer hover:text-white hover:border-black hover:bg-black">
            <a 
              target="_blank"
              href="https://github.com/anselsidiadinoto/shapearoo-demo"
              rel="noopener noreferrer"
              className="font_primary"
            >
              view project on GitHub
            </a>
          </div>

          <ProjectParagraph
            text="Shapearoo is a marketplace mock-up that allows architects and 3D designers to sell and manufacture their designs online. Although there are marketplaces that sell 3D models, and other services that help with 3D printing, Shapearoo provides a seamless experience of purchasing a finished 3D printed design from start to finish."
            className="mt-5"
          />
          <ProjectParagraph
            text="Potential customers first select which design they want to purchase, then choose any 3D print specifications they want such as color, material,  or special handling options provided from the selected printing shop. In the shopping cart, all design items are unique in their quantities. The design items will have a singular or multiple print specification that correlates to the selected print shop’s material options."
          />
          <ProjectParagraph
            text="The website uses dynamic routing to display each design, designer, shop, and shopping cart. Cart items are posted into a PSQL database and updated accordingly to the print details. When a user changes or deletes the current print shop selection, all print information for all designs in the cart is also cleared."
            className=""
          />
          <ProjectParagraph
            text="When finished, search results would display designs that mostly align with a user’s preferences, along with 3D printing shops that have the closest proximity. This will emphasize and promote the design regardless of the designer’s location, and minimize the logistical costs of producing and shipping the product. "
            className=""
          />
        </div>
      </div>

      <div className="flex items-center gap-1 mt-10">
        <div className="font_primary text-3xl mr-5">Routing System</div>
        <div className="flex items-center">
          <div className="font_primary text-md mr-2 text-gray-300">view code for:</div>
          <LinkButton
            href="https://github.com/anselsidiadinoto/shapearoo-demo/blob/main/app/routes/routes.js"
            text="routes"
          />
        </div>

        <LinkButton 
          href="https://github.com/anselsidiadinoto/shapearoo-demo/blob/main/app/controllers/controller.js"
          text="items and cart queries"
        />

      </div>


      <div className="flex mt-5">
        <div className="w-[700px] h-[800px] relative">
          <Image
            src="/assets/Web_design/Shapearoo/shapearoo_routes.png"
            alt="shapearoo routing diagram"
            fill
            style={ {objectFit: "contain"} }
          />
        </div>
      </div>

    

      <div className="font_primary text-3xl mt-10">Pages</div>
      <div className="flex mt-3">
        <div className="flex justify-between w-[740px]">
          <div>
            <div className="w-[360px] h-[380px] relative border">
              <Image
                src="/assets/Web_design/Shapearoo/site_images/shapearoo_cover.png"
                alt="shapearoo home"
                fill
                style={ {objectFit: "contain"} }
              />
            </div>
            <div className='flex gap-3 mt-3'>
              <LinkButton
                href="https://shapearoo-demo-7ffd044ef3a1.herokuapp.com/search/item"
                text="visit home page"
              />
              <LinkButton
                href="https://github.com/anselsidiadinoto/shapearoo-demo/blob/main/app/views/100-browse-item.ejs"
                text="view code"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-8">
        <div className="flex justify-between w-[740px]">
          <div>
            <div className="w-[360px] h-[300px] relative border">
              <Image
                src="/assets/Web_design/Shapearoo/site_images/shapearoo_1.png"
                alt="shapearoo item"
                fill
                style={ {objectFit: "contain"} }
              />
            </div>
            <div className='flex gap-3 mt-3'>
              <LinkButton
                href="https://shapearoo-demo-7ffd044ef3a1.herokuapp.com/search/item/details/2"
                text="visit item details"
              />
              <LinkButton
                href="https://github.com/anselsidiadinoto/shapearoo-demo/blob/main/app/views/101-browse-item-details.ejs"
                text="view code"
              />
            </div>
          </div>
          <div>
            <div className="w-[360px] h-[300px] relative border">
              <Image
                src="/assets/Web_design/Shapearoo/site_images/shapearoo_2.png"
                alt="shapearoo designer"
                fill
                style={ {objectFit: "contain"} }
              />
            </div>
            <div className='flex gap-3 mt-3'>
              <LinkButton
                href="https://cheatdaydonuts.herokuapp.com/admin/general"
                text="visit designer profile"
              />
              <LinkButton
                href="https://shapearoo-demo-7ffd044ef3a1.herokuapp.com/search/designer/details/9"
                text="view code"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex mt-8">
        <div className="flex justify-between w-[740px]">
          <div>
            <div className="w-[360px] h-[300px] relative border">
              <Image
                src="/assets/Web_design/Shapearoo/site_images/shapearoo_3.png"
                alt="shapearoo shop"
                fill
                style={ {objectFit: "contain"} }
              />
            </div>
            <div className='flex gap-3 mt-3'>
              <LinkButton
                href="https://shapearoo-demo-7ffd044ef3a1.herokuapp.com/search/shop/details/4"
                text="visit shop profile"
              />
              <LinkButton
                href="https://github.com/anselsidiadinoto/shapearoo-demo/blob/main/app/views/103-browse-shop-details.ejs"
                text="view code"
              />
            </div>
          </div>
          <div>
            <div className="w-[360px] h-[300px] relative border">
              <Image
                src="/assets/Web_design/Shapearoo/site_images/shapearoo_4.png"
                alt="shapearoo cart"
                fill
                style={ {objectFit: "contain"} }
              />
            </div>
            <div className='flex gap-3 mt-3'>
              <LinkButton
                href="https://shapearoo-demo-7ffd044ef3a1.herokuapp.com/cart"
                text="visit cart"
              />
              <LinkButton
                href="https://github.com/anselsidiadinoto/shapearoo-demo/blob/main/app/views/102-cart.ejs"
                text="view code"
              />
            </div>
          </div>
        </div>
      </div>       

      <div className="flex items-center mt-10">
        <div className="font_primary text-3xl mr-5">Database schema</div>
        <LinkButton 
          href="https://github.com/anselsidiadinoto/shapearoo-demo/blob/main/app/config/shapearoo-demo-database.sql"
          text="view SQL"
        />
      </div>

      <div className="flex mt-0">
        <div className="w-[800px] h-[700px] relative">
          <Image
            src="/assets/Web_design/Shapearoo/shapearoo_schema.png"
            alt="shapearoo database schema"
            fill
            style={ {objectFit: "contain"} }
          />
        </div>
      </div>
      
    </div>
  )
}

export default page