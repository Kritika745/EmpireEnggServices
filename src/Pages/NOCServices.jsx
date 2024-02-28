import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const NOCservices = () => {
  return (
    <>
    <Navbar/>
    <div style={{ overflowX: 'hidden' }}>
      
        <div>
          <img src="/Images/noc2-banner.jpg" alt="Field Service" className="w-full h-auto object-contain mt-16" />
        </div>
        <div className="p-8">
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#00cc99] poppins border-b-4 border-[#00cc99]">NOC Services</span>
          <p className="text-sm lg:text-xl mb-6 text-white blue  rounded-lg p-6 mt-7 flex ">
          EES’s in-house team is built with experts to monitor and control our customer networks. Our NOC team will provide end of end managed services to ensure networks are working at an optimal level with zero disruption. We know the importance of networks and this is the reason why we provide year around services.
          </p>
          <ul className="text-sm lg:text-xl list-disc list-inside text-white blue  rounded-lg p-6">
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

export default NOCservices