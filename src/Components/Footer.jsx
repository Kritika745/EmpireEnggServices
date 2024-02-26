import React from 'react'
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className='w-full flex flex-col md:flex-row blue'>
      <div className='w-full md:w-1/2 flex flex-col justify-center items-center mb-4'>
         <div>
          <img className='h-44 w-80 m-8' src="/ees-logo.png" alt="" />
         </div>
         <div className='flex gap-5  '>
         <a href=""><Facebook size={30} color='#00cc99'/></a>
         <a href=""><Twitter size={30} color='#00cc99'/></a>
         <a href="https://www.linkedin.com/company/empireengineeringservices/?viewAsMember=true"><Linkedin  size={30} color='#00cc99' /></a>
         </div>
      </div>

      <div className='w-full md:w-1/2 flex flex-col justify-center items-center md:justify-start md:items-start mt-14'>
         <div className='flex md:gap-28 gap-16 m-4'>
             <div className=''>
              <p className='text-[#00cc99] font-bold'>Corporate HQ</p>
              <p className='text-white mt-3'>100 N Central Expressway</p>
                    <p className='text-white'>Richardson, TX 75080</p>
             </div>
             <div className=' '>
              <p className='text-[#00cc99] font-bold'>East Region Office</p>
              <p className='text-white mt-3'>835 Fairfield Ave</p>
                <p className='text-white'>Kenilworth, NJ 07033</p>
             </div>
         </div>
         <div className='text-white mt-14 mb-2'>
              <p>Copyright © 2022 by Empire Engineering Services.</p>
         </div>
      </div>
    </footer>
  )
}

export default Footer



