import React from 'react'
import { ArrowRightCircle } from 'lucide-react';
import { Link } from 'react-router-dom';


const Services = () => {
  return (
    <div id='services' className='w-full flex flex-col items-center justify-center '>
         <div className='inline-flex mt-8 border-b-4 border-[#00cc99] px-2 '>
           <h1 className='poppins text-[#00cc99] text-center text-2xl md:text-4xl'>OUR SERVICES</h1>
      </div>

      <p className='md:mx-28 mx-6 mt-8 text-center '>You can count on Empire Engineering Services to not only meet, but exceed all your needs and requests.
                   Learn more about the services we provide below, and let us know if you would like to learn more about a
                    specific offering.
             </p>
      
       <div className='w-full flex flex-wrap lg:flex-nowrap justify-center items-center mt-12 md:mt-16 px-10  md:px-24 '>
      <div className='w-full  lg:h-[400px] h-auto md:w-3/4 lg:w-1/4 my-4 mx-3 blue rounded-lg flex flex-col shadow-2xl '>
         <div className='hover:opacity-50'>
            <img className='rounded-t-lg ' src="/fieldservice-card.jpg" alt="" />
         </div>
         <div className='flex flex-col m-4 mb-6'>
           <p className=' text-white font-bold text-xl'>FIELD SERVICES</p>
           <p className='text-white  '>Radio Base Installation,Commissioning and Integration</p>
           <Link to='/FieldServices'><button className='mt-4 bg-[#00cc99] hover:bg-emerald-600 w-30 px-3 py-2 rounded-md font-bold flex text-[1rem]'> Learn More <ArrowRightCircle className='ml-2 mt-[2.5px]' size={20}/></button></Link>
        </div>
      </div> 

     <div className='w-full lg:h-[400px] h-auto md:w-3/4 lg:w-1/4 my-4 mx-3 blue rounded-lg shadow-2xl flex flex-col'>
         <div className='hover:opacity-50'>
            <img className='rounded-t-lg ' src="/constuct-card.jpg" alt="" />
         </div>
         <div className='flex flex-col m-4 mb-6'>
           <p className=' text-white font-bold text-xl'>CONSTRUCTION SERVICES</p>
           <p className='text-white  '>Cell Site Construction</p>
           <Link to='/ConstructionServices'><button className='mt-10 bg-[#00cc99] hover:bg-emerald-600 w-30 px-3 py-2 rounded-md font-bold flex text-[1rem]'> Learn More <ArrowRightCircle className='ml-2 mt-[2.5px]' size={20}/></button></Link>
        </div>
      </div> 

      <div className='w-full lg:h-[400px] h-auto md:w-3/4  lg:w-1/4 my-4 mx-3 blue rounded-lg shadow-2xl flex flex-col'>
         <div className='hover:opacity-50'>
            <img className='rounded-t-lg ' src="/radio-card.jpg" alt="" />
         </div>
         <div className='flex flex-col m-4 mb-6'>
           <p className=' text-white font-bold text-xl'>RADIO ACCESS NETWORK SERVICES</p>
           <p className='text-white  '>RF, NIC,Scripting Engineering</p>
           <Link to='/RadioAccessNetworkServices'><button className='mt-4 bg-[#00cc99] hover:bg-emerald-600 w-30 px-3 py-2 rounded-md font-bold flex text-[1rem]'> Learn More <ArrowRightCircle className='ml-2 mt-[2.5px]' size={20}/></button></Link>
        </div>
      </div> 

      <div className='w-full lg:h-[400px] h-auto md:w-3/4 lg:w-1/4 my-4 mx-3 blue rounded-lg shadow-2xl flex flex-col  '>
         <div className='hover:opacity-50'>
            <img className='rounded-t-lg' src="/net-card.jpg" alt="" />
         </div>
         <div className='flex flex-col m-4 mb-6'>
           <p className=' text-white font-bold text-xl'>DATA CENTER SERVICES</p>
           <p className='text-white  '>Decommissioning, Installation, Maintenanace and Turnkey Relocation</p>
           <Link to='/DataCenterServices'><button className='mt-4 bg-[#00cc99] hover:bg-emerald-600 w-30 px-3 py-2 rounded-md font-bold flex text-[1rem]'> Learn More <ArrowRightCircle className='ml-2 mt-[2.5px]' size={20}/></button></Link>
        </div>
      </div> 

      </div> 

       <div className='w-full flex flex-wrap lg:flex-nowrap justify-center items-center md:mt-4 mb-10 px-10 md:px-24'>
      <div className='w-full lg:h-[450px] h-auto md:w-3/4 lg:w-1/4  my-4 mx-3 blue rounded-lg flex flex-col shadow-2xl'>
         <div className='hover:opacity-50'>
            <img className='rounded-t-lg ' src="/outside-card.jpg" alt="" />
         </div>
         <div className='flex flex-col m-4 mb-6'>
           <p className=' text-white font-bold text-xl'>OUTSIDE PLANT ENGINEERING SERVICES</p>
           <p className='text-white  '>Research Survey, Planning, Designing, Drafting, Permitting</p>
           <Link to='OutsidePlantServices/'><button className='mt-4 bg-[#00cc99] hover:bg-emerald-600 w-30 px-3 py-2 rounded-md font-bold flex text-[1rem]'> Learn More <ArrowRightCircle className='ml-2 mt-[2.5px]' size={20}/></button></Link>
        </div>
      </div> 

     <div className='w-full lg:h-[450px] h-auto md:w-3/4 lg:w-1/4  my-4 mx-3 blue rounded-lg shadow-2xl flex flex-col'>
         <div className='hover:opacity-50'>
            <img className='rounded-t-lg ' src="/noc2-card.jpg" alt="" />
         </div>
         <div className='flex flex-col m-4 mb-6'>
           <p className=' text-white font-bold text-xl'>NOC SERVICES</p>
           <p className='text-white  '>24/7 Monitoring and control</p>
           <Link to='/NOCServices'><button className='mt-16 bg-[#00cc99] hover:bg-emerald-600 w-30 px-3 py-2 rounded-md font-bold flex text-[1rem]'> Learn More <ArrowRightCircle className='ml-2 mt-[2.5px]' size={20}/></button></Link>
        </div>
      </div> 

      <div className='w-full lg:h-[450px] h-automd:w-3/4  lg:w-1/4 my-4 mx-3 blue rounded-lg shadow-2xl flex flex-col'>
         <div className='hover:opacity-50'>
            <img className='rounded-t-lg ' src="/prof-card.jpg" alt="" />
         </div>
         <div className='flex flex-col m-4 mb-6'>
           <p className=' text-white font-bold text-xl'>PROFESSIONAL SERVICES</p>
           <p className='text-white  '>Resource Management and Staffing</p>
           <Link to='/ProfessionalServices'><button className='mt-16 bg-[#00cc99] hover:bg-emerald-600 w-30 px-3 py-2 rounded-md font-bold flex text-[1rem]'> Learn More <ArrowRightCircle className='ml-2 mt-[2.5px]' size={20}/></button></Link>
        </div>
      </div>  

      </div> 

    </div>
  )
}

export default Services