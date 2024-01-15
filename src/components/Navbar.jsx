import { useEffect, useState } from 'react';
import logo from '../assets/studio.png'
import { Link } from 'react-scroll';

import { FaXmark, FaBars} from "react-icons/fa6"
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  //toggle Menu

const toggleMenu = () =>{
  setIsMenuOpen(!isMenuOpen);
}

  useEffect(() =>{
    const handleScroll = () => {
          if(Window.scrollY > 100){
            setIsSticky(true);
          }
          else{
            setIsSticky(false);
          }
    };
    window.addEventListener('scroll',handleScroll);

    return()=>{
      window.addEventListener('scroll',handleScroll);
    }
  });

  const navItems = [
   {link: "What we do", path: "home"},
   {link: "Services", path: "services"},
   {link: "Our Work", path: "work"},
   {link: "Our Team", path: "team"},
   
  ];
  return (
    <header className='w-full bg-white md:bg-transparent fixed top-0 left-0 right-0'>
    <nav className={`py-4 lg:px-14 px-4 ${isSticky ? "sticky top-0 left-0 right-0 border-b bg-white duration-300": ""}`}>
      <div className='flex justify-between items-center text-base gap-8'>
      <a href=''><img src={logo} alt="" className='w-40 inline-block items-center' /></a>

       {/* nav items for large devices*/}
       <ul className='md:flex space-x-12 hidden'>
           {
              navItems.map(({link,path})=> <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-gray900 hover:text-brandPrimary first:font-medium'>{link}</Link>)
           }
       </ul>

       {/* btn for large devices*/}
       <div className='space-x-12 hidden lg:flex items-center '>
          <button className='bg-brandPrimary text-white py-2 px-4 transition-all duration-300 rounded-3xl hover:bg-neutralDGrey'>Contact Us</button>
       </div>
      
      {/* menu btn for mobile devices*/}
      <div className='md:hidden'>
        <button 
         onClick={toggleMenu}
        className='text-neutralDGrey focus:outline-none focus:text-gray-500'>
            {
               isMenuOpen ? (<FaXmark className='h-6 w-6 text-neutralDGrey'/>) : (<FaBars className='h-6 w-6 text-neutralDGrey'/>)
            }
        </button>
      </div>
      </div>
      {/* nav items for mobile devices */}
      <div className={`space-y-4 px-4 mt-16 py-7  bg-brandPrimary ${ isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden" }`}>
      {
              navItems.map(({link,path})=> <Link to={path} spy={true} smooth={true} offset={-100} key={path} className='block text-base text-white  hover:text-gray900 first:font-medium'>{link}</Link>)
           }
      </div>
    </nav>
  </header> 
  )
}

export default Navbar