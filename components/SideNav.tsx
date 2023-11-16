"use client"

import { SIDE_NAV_ARCHITECTURE, SIDE_NAV_MISC, SIDE_NAV_WEB } from "@/constants/index"
import Link from "@/node_modules/next/link"
import { usePathname } from "@/node_modules/next/navigation"
import { FaArrowLeft } from "react-icons/fa";


const SideNav = () => {

  const pathname = usePathname()

  return (
    <div>

      <header className="font_primary text-[24px] flex flex-col pt-8 pb-3 ">
        <div className="">
          Ansel Sidiadinoto
        </div>

        <div className="flex gap-3">

          {pathname == '/about' ? (
            <Link className="hover:link_hover_normal flex items-center gap-2" href="/">
              <FaArrowLeft /> projects
            </Link >
          ) : (
            <Link className="hover:link_hover_normal" href="/about">
              about
            </Link >
          )}
         
        </div>
      </header>

      <nav className="font_primary font-extralight w-[300px] flex flex-col">

        {pathname == '/about' ? (
          <div className="text-[48px] underline decoration-2">
            About
          </div>
        ) : (
          <Link className="text-[48px] underline decoration-2 hover:font-normal" href="/">
            Projects
          </Link>
        )}

      
        <div 
          className={`text-[40px] ${pathname == '/about' || pathname.includes('web_design') ? "text-gray-400 font-extralight" : ""}`}
        > 
          architecture
        </div>
        {SIDE_NAV_ARCHITECTURE.map((link) => (
          <Link
            to="#"
            href={link.href}
            key={link.key}
            className={`hover:link_hover_light text-[18px] font-extralight text-gray-400
                        ${pathname == link.href ? "link_hover_light underline" : ""} `}
          >
            {link.label}
          </Link >
        ))}
        <div 
          className={`text-[40px] ${pathname == '/about' || pathname.includes('architecture') ? "text-gray-400 font-extralight" : ""}`}
        > 
          web dev
        </div>
        {SIDE_NAV_WEB.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className={`hover:link_hover_light text-[18px] font-extralight text-gray-400
                        ${pathname == link.href ? "link_hover_light underline" : ""} `}
          >
            {link.label}
          </Link >
        ))}
      
      </nav>
    </div>
  )
}

export default SideNav