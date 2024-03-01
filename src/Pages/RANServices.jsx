import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const RANservices = () => {
  return (
    <>
    <Navbar/>
    <div style={{ overflowX: 'hidden' }}>
      
    <div>
      <img src="/Images/radio-banner.jpg" alt="Field Service" className="w-full h-auto object-contain mt-16" />
    </div>
    <div className="p-8">
      <span className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text_blue poppins border-b-4 border-violet-950">Radio Access Network Services</span>
      <p className="text-sm lg:text-xl mb-6  bg-[#00cc99] bg-opacity-45 rounded-lg p-6 mt-7 flex">
      EES takes customer networks as their own to ensure zero impact in networks availability, 
      we provide best in market expert diverse workforce that understand all the major OEM’s core network. 
      Our in-house RAN team understands and is able to provide the best end to end support when it comes any customers network.
      </p>
      <ul className="text-sm lg:text-xl list-disc list-inside bg-[#00cc99] bg-opacity-45  rounded-lg p-6">
        <li>CIQ Design
          <ul className='list-[square] list-inside px-6'>
          <li>Radio (RND)</li>
          <li>Transport (TND)</li>
          </ul>
        </li>
        <li>Scripting</li>
        <li>Cell Site Integration</li>
        <li>Network Monitoring</li>
        <li>Network Key Performance Indicators Checks (KPI)</li>
        <li>Radio Frequency Support (RF)</li>
        <li>Network Optimization</li>
      </ul>
    </div>
  
</div>
<Footer/>
</>
  )
}

export default RANservices