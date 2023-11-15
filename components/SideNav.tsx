import { SIDE_NAV_ARCHITECTURE, SIDE_NAV_MISC, SIDE_NAV_WEB } from "@/constants/index"
import Link from "@/node_modules/next/link"


const SideNav = () => {
  return (
    <nav className="font_primary font-extralight w-[300px] flex flex-col">
      <Link
        className="text-[48px] underline decoration-2 hover:font-normal"
        href="/"
      > 
        Projects
      </Link>
      <div className="text-[40px]">architecture</div>

      {SIDE_NAV_ARCHITECTURE.map((link) => (
        <Link 
          href={link.href}
          key={link.key}
          className="hover:link_hover_light text-[18px] font-extralight text-gray-400" 
        >
          {link.label}
        </Link >
      ))}

      <div className="text-[40px]">web-design</div>

      {SIDE_NAV_WEB.map((link) => (
        <Link 
          href={link.href}
          key={link.key}
          className="hover:link_hover_light text-[18px] font-extralight text-gray-400" 
        >
          {link.label}
        </Link >
      ))}

      <div className="text-[40px]">misc</div>
    
      {SIDE_NAV_MISC.map((link) => (
        <Link 
          href={link.href}
          key={link.key}
          className="hover:link_hover_light text-[18px] font-extralight text-gray-400" 
        >
          {link.label}
        </Link >
      ))}
      
    </nav>
  )
}

export default SideNav