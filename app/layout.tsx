import SideNav from '@/components/SideNav'
import TopNav from '@/components/TopNav'
import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'Ansel Sidiadinoto Website',
  description: 'Compilation of architecture and web design works',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {/* <div className="bg-background h-screen pl-11"> */}
        <div className="h-full">
          <div className="h-full bg-white px-10">
            <div className="w-[1300px] h-auto my-0 mx-auto flex">
              <div className="side h-[1000px]">
                <TopNav />
                <SideNav />
              </div>
              <div className='flex w-full'>
                {children}
              </div>
            </div>
          </div>
        </div>
        <footer className="h-[300px]"></footer>
      </body>
    </html>
  )
}
