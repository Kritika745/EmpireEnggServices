import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'


const DCServices = () => {
  return (
    <>
    <Navbar/>
    <div style={{ overflowX: 'hidden' }}>
      
    <div>
      <img src="/Images/datacenter-banner.jpg" alt="Field Service" className="w-full h-auto object-contain mt-16" />
    </div>
    <div className="p-8">
      <span className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#00cc99] poppins border-b-4 border-[#00cc99]">Data Center Services</span>
      <p className=" text-sm lg:text-xl mb-6 text-white blue rounded-lg p-6 mt-7 flex">
      EES data center specialized diverse workforce understands the importance of HW, SW and support in this evolving space in the technology industry. With deep extensive knowledge we are able to leverage those key components to deliver best in class results to our customers.
      </p>
      <ul className="  text-sm lg:text-xl list-disc list-inside text-white blue  rounded-lg p-6">
        <li>Design and Deployment</li>
        <li>Suite and Server Cabinet Solution</li>
        <li>Physical Security and Power Usage</li>
        <li>Decommissioning</li>
        <li>Installation</li>
        <li>Maintenance</li>
        <li>Turnkey Relocation</li>
        
      </ul>
    </div>
  
</div>
<Footer/>
</>
  )
}

export default DCServices