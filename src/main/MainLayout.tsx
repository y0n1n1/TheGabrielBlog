
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
  return (
    <div className=' text-black w-full min-h-svh bg-white flex-col flex justify-between'>
      <div>
      <div className='bg-zinc-100 h-20 flex flex-row items-center w-full justify-center align-middle text-center py-2 px-24'>
        <div className='flex flex-row items-center w-full justify-center align-middle text-center'><a className='pr-12 text-xl  text-zinc-600 font-normal' href='/articles'>ARTICLES</a>
        
      <a className='text-xl text-black font-normal px-12' href='/'>GabsCorner</a>
        <a className='pl-12 text-xl text-zinc-600 font-normal'>ABOUT</a></div>
      </div>
        <Outlet/>
      </div>
        <div className='flex flex-row items-center text-center justify-center align-middle my-6'>
          <div>© 2024 Gabriel Gramicelli</div>

        </div>
    </div>

  )
}

export default MainLayout