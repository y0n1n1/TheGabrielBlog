
import { Outlet } from 'react-router-dom'



import { Card } from '../lib/components/Card'
import { Dock } from '../lib/components/Dock'
import { DockCard } from '../lib/components/DockCard'
import { DockDivider } from '../lib/components/DockDivider'


const GRADIENTS = [
  {img:'/speech_balloon.png', title:"Articles", blur_opacity:1, url:"/articles"},
  {img:'/computer.png', title:"Projects", blur_opacity:0.3, url:"/projects"},
  {img:'/notebook_with_decorative_cover.png', title:"Notebooks", blur_opacity:1, url:"/notebooks"},
  {img:'/earth_americas.png', title:"About me", blur_opacity:0.5, url:"/about-me"},
  {img:'/phone.png', title:"Contact", blur_opacity:0.3, url:"/contact"},
  null,
  {img:'/homepage.png', title:"Home", blur_opacity:1, url:"/"}
]



const MainLayout = () => {
  return (
    <div className=' text-neutral-900 w-full h-full bg-white min-h-svh  flex-col flex justify-between  '>
     
      <div>
      <div className='my-4 h-20 flex flex-row items-center w-full justify-center align-middle text-center py-2 lg:px-24'>
      <div className='fixed top-0 left-1/2 transform -translate-x-1/2  flex flex-row items-center m-5 p-4 rounded-3xl justify-center backdrop-blur-sm bg-white/50 align-middle text-center'>
    <a className='text-4xl font-normal text-neutral-800 p-0 m-0' href='/'>
        <img src='/Logo.png' height={"36px"} width={"36px"} />
    </a>
    <a className='text-base sm:text-lg md:text-2xl font-normal text-neutral-800 pl-3' href='/home'>
        Gabriel Gramicelli
    </a>
</div>

      </div>
        <Outlet/>
      </div>
      
    <div>
      <Dock>
        {GRADIENTS.map((src, index) =>
          src ? (
            <DockCard title={src.title} url={src.url} key={index} active={location.pathname === src.url} // Compare current location with each card's URL
>
              <Card src={src.img} blur_opacity={src.blur_opacity} />
            </DockCard>
          ) : (
            <DockDivider key={index} />
          )
        )}
      </Dock>
    </div>
        <div className='flex text-base m-6 flex-row items-start text-left justify-start align-top text-neutral-800'>
          <div className='rounded-2xl p-2'>Gabriel Gramicelli ⋅ 2025</div>

        </div>
    </div>

  )
}

export default MainLayout