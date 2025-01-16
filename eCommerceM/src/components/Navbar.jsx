
import image from '../assets/images/Logo.webp'
import { Link, NavLink } from 'react-router-dom'
import search_3 from '../assets/images/search_3.png'
import profile_3 from '../assets/images/profile_3.png'
import cart from '../assets/images/cart.png'
import nav from '../assets/images/navlines.png'
import { useState } from 'react'

const Navbar = () => {
    const [visible, setVisible] = useState(false);



  return (
    <div className="flex items-center justify-between py-5 font-medium">
        <img src={image} className='w-12' alt="" />

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

            <NavLink to='/' className='flex flex-col items-center gap-1 '>
                <p>HOME</p> 
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/collection' className='flex flex-col items-center gap-1 '>
                <p>COLLECTION </p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/about' className='flex flex-col items-center gap-1 '>
                <p>ABOUT </p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>
            <NavLink to='/contact' className='flex flex-col items-center gap-1 '>
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
            </NavLink>

        </ul>

        <div className='flex items-center gap-6'>
            <img src={search_3} alt="" 
             className='w-8 rounded-full cursor-pointer'
             />

             <div className="group relative">
                    <img src={profile_3} alt="" 
                    className='w-8 rounded-full cursor-pointer'
                    />
                    <div className='group-hover:block hidden absolute dropdown-menu -right-8 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                            <p className='cursor-pointer hover:text-black'>My profile</p>
                            <p className='cursor-pointer hover:text-black'>Orders</p>
                            <p className='cursor-pointer hover:text-black'>Logout</p>

                        </div>

                    </div>
             </div>
             <Link to='/cart' className='relative'>
             <img src={cart} className='w-8 rounded-full font-extralight cursor-pointer' alt="" />
             <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>10</p>
             </Link>
             <img onClick={()=>{setVisible(true)}} src={nav} alt="" 
             className='w-5 cursor-pointer sm:hidden'
             />
        </div>

        {/* side bar menu for smaller screen */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full':'w-0'}`}>
                    <div className='flex flex-col text-gray-600'>

                    </div>
            </div>

    </div>
  )
}

export default Navbar