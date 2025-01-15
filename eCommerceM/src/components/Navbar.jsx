
import image from '../assets/images/Logo.webp'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="flex items-center justify-between py-5 font-medium">
        <img src={image} className='w-12' alt="" />

        <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>

            <Link to='/' className='flex flex-col items-center gap-1 '>
                <p>HOME</p> 
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 '/>
            </Link>
            <Link to='/collection' className='flex flex-col items-center gap-1 '>
                <p>COLLECTION </p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 '/>
            </Link>
            <Link to='/about' className='flex flex-col items-center gap-1 '>
                <p>ABOUT </p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 '/>
            </Link>
            <Link to='/contact' className='flex flex-col items-center gap-1 '>
                <p>CONTACT</p>
                <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 '/>
            </Link>

        </ul>
    </div>
  )
}

export default Navbar