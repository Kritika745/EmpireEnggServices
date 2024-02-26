import React from 'react'
import Navbar from '../Components/Navbar'

const NOCservices = () => {
  return (
    <>
    <Navbar/>
    <div style={{ overflowX: 'hidden' }}>
      
        <div>
          <img src="/Images/fieldservice.jpg" alt="Field Service" className="w-full h-auto object-contain" />
        </div>
        <div className="p-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-red-900">NOC Services</h1>
          <p className="text-sm lg:text-xl mb-6 bg-pink-300 rounded-lg p-3 flex">
          EES’s in-house team is built with experts to monitor and control our customer networks. Our NOC team will provide end of end managed services to ensure networks are working at an optimal level with zero disruption. We know the importance of networks and this is the reason why we provide year around services.
          </p>
          <ul className="text-sm lg:text-xl list-disc list-inside bg-red-600/45 rounded-lg p-3">
            <li>Network Monitoring</li>
            <li>Network Key Performance Indicators Checks (KPI)</li>
            <li>Radio Frequency Support (RF)</li>
            <li>Network Optimization</li>
            
          </ul>
        </div>
      
    </div>
    </>
  )
}

export default NOCservices