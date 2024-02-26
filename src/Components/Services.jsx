import React from 'react'
import { ArrowRightCircle } from 'lucide-react';
import { Link } from 'react-router-dom';


const Services = () => {
  return (
    <div id='services' className='w-full flex flex-col items-center justify-center '>
         <div className='inline-flex mt-8 border-b-4 border-[#00cc99] px-2 '>
        <h1 className='poppins text-[#00cc99] text-center text-4xl'>OUR SERVICES</h1>
      </div>
       
       <div className='w-full flex  px-24'>
      <div className='w-1/2 m-4 mt-20 blue rounded-lg shadow-xl flex '>
         <div className=' m-6 '>
            <img className='rounded-lg h-52' src="/fieldservice-card.jpg" alt="" />
         </div>
         <div className=' py-6'>
           <p className=' text-white font-bold text-2xl'>FIELD SERVICES</p>
           <p className='text-white  '>Radio Base Installation,Commissioning and Integration</p>
           <Link to='/'><button className='mt-4 bg-[#00cc99] hover:bg-emerald-600 w-30 px-3 py-2 rounded-md font-bold flex text-[1rem]'> Learn More <ArrowRightCircle className='ml-2 mt-[2.5px]' size={20}/></button></Link>

         </div>
      </div> 
      <div className='w-1/2 m-4 mt-20 blue rounded-lg shadow-xl flex '>
         <div className='  m-6 '>
            <img className='rounded-lg h-52' src="/fieldservice-card.jpg" alt="" />
         </div>
         <div className='py-6'>
           <p className=' text-white font-bold text-2xl'>FIELD SERVICES</p>
           <p className='text-white  '>Radio Base Installation,Commissioning and Integration</p>
           <Link to='/'><button className='mt-4 bg-[#00cc99] hover:bg-emerald-600 w-30 px-3 py-2 rounded-md font-bold flex text-[1rem]'> Learn More <ArrowRightCircle className='ml-2 mt-[2.5px]' size={20}/></button></Link>

         </div>
         </div>


      </div> 
      <div className='w-2/3 mt-20 blue rounded-lg shadow-xl flex '>
         <div className='  m-6 '>
            <img className='rounded-lg h-52' src="/fieldservice-card.jpg" alt="" />
         </div>
         <div className='m-6 p-10 '>
           <p className=' text-white font-bold text-2xl'>FIELD SERVICES</p>
           <p className='text-white  '>Radio Base Installation,Commissioning and Integration</p>
           <Link to='/'><button className='mt-4 bg-[#00cc99] hover:bg-emerald-600 w-30 px-3 py-2 rounded-md font-bold flex text-[1rem]'> Learn More <ArrowRightCircle className='ml-2 mt-[2.5px]' size={20}/></button></Link>

         </div>
      </div> 
      <div className='w-2/3 mt-20 blue rounded-lg shadow-xl flex '>
         <div className='  m-6 '>
            <img className='rounded-lg h-52' src="/fieldservice-card.jpg" alt="" />
         </div>
         <div className='m-6 p-10 '>
           <p className=' text-white font-bold text-2xl'>FIELD SERVICES</p>
           <p className='text-white  '>Radio Base Installation,Commissioning and Integration</p>
           <Link to='/'><button className='mt-4 bg-[#00cc99] hover:bg-emerald-600 w-30 px-3 py-2 rounded-md font-bold flex text-[1rem]'> Learn More <ArrowRightCircle className='ml-2 mt-[2.5px]' size={20}/></button></Link>

         </div>
      </div> 
    </div>
  )
}

export default Services