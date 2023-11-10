import Link from "@/node_modules/next/link"

const TopNav = () => {
  return (
    <header className="font_primary text-[24px] flex flex-col pt-8 pb-3 ">
    <div className="">
      Ansel Sidiadinoto
    </div>

    <div className="flex gap-3">
      <Link className="hover:link_hover_normal" href="/">
        about
      </Link >
    </div>
    
  </header>
  )
}

export default TopNav