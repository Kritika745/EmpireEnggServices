import React from 'react'
import Navbar from '../Components/Navbar'

const ProffServices = () => {
  return (
    <>
   <Navbar/>
    <div style={{ overflowX: 'hidden' }}>
      
        <div>
          <img src="/Images/prof-banner.jpg" alt="Field Service" className="w-full h-auto object-contain" />
        </div>
        <div className="p-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-red-900">Professional Services</h1>
          <p className="text-sm lg:text-xl mb-6 bg-pink-300 rounded-lg p-3 flex">
          EES self-perform professional services. We are, therefore, an organization of subject matter experts. Our client's competitive advantage often hinges upon our ability to swiftly assemble high-performance teams who can perform at the pace of change.
          </p>
          <ul className="text-sm lg:text-xl list-disc list-inside bg-red-600/45 rounded-lg p-3">
            <li>Wireless</li>
            <li>Wireline</li>
            <li>ICT</li>
            <li>Oil & Gas</li>
            <li>Solar Energy</li>
            <li>Staffing Services</li>
            
          </ul>
        </div>
      
    </div>
    </>
  )
}

export default ProffServices