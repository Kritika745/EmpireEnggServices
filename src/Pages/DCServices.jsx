import React from 'react'
import Navbar from '../Components/Navbar'


const DCServices = () => {
  return (
    <>
    <Navbar/>
    <div style={{ overflowX: 'hidden' }}>
      
    <div>
      <img src="/Images/datacenter-banner.jpg" alt="Field Service" className="w-full h-auto object-contain" />
    </div>
    <div className="p-8">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-red-900">Data Center Services</h1>
      <p className="text-sm lg:text-xl mb-6 bg-pink-300 rounded-lg p-3 flex">
      EES data center specialized diverse workforce understands the importance of HW, SW and support in this evolving space in the technology industry. With deep extensive knowledge we are able to leverage those key components to deliver best in class results to our customers.
      </p>
      <ul className="text-sm lg:text-xl list-disc list-inside bg-red-600/45 rounded-lg p-3">
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
</>
  )
}

export default DCServices