import { Carousel } from 'flowbite-react'
import React from 'react'

import banner from "../assets/banner1.svg"

const Home = () => {
  return (
    <div className='bg-neutralSilver'>
          <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
               <Carousel w-full mx-auto>
                <div className='my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12'>
                   <div>
                   <img src={banner} alt="" />
                   </div>
                   <div className='md:w-1/2'>
                       <h1 className='text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug'>Your WebTech & MobiTech <span className='text-brandPrimary leading-snug'>Software Consultancy</span></h1>
                       <p className='text-neutralGrey text-base mb-8'>From design and development to testing and project management, we build end-to-end solutions either websites or mobile apps for pioneers, corporate, innovators, and startups.</p>
                       <button className='btn-primary'>BOOK A FREE CONSULTATION</button>
                   </div>
                </div>
                   
                
               </Carousel>
          </div>
    </div>
  );
}

export default Home