import React from 'react'
import Navbar from '../Components/Navbar'

const ConstServices = () => {
  return (
    <>
    <Navbar/>
    <div style={{ overflowX: 'hidden' }}>
    <div>
          <img src="/Images/const-banner.jpg" alt="Outside service" className="w-full h-auto object-contain" />
        </div>
        <div className="p-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-red-900">Construction Services</h1>
          <p className="text-sm lg:text-xl mb-6 bg-pink-300 rounded-lg p-3 flex ">
          EES provides seasoned tower and ground construction diverse workforce capable of performing work in any type of structure nationally. Our deep technical knowledge with all the major OEM’s HW give us the edge to ensure we are meeting and achieving our customers milestones on every project.
          </p>
          <ul className="text-sm lg:text-xl list-disc list-inside bg-red-600/45 rounded-lg p-3">
            <li>Line and Antenna</li>
            <li>Ground Construction</li>
            <li>Civil Engineering</li>
            <li>New Site Build</li>
            <li>Distributed Antenna Systems</li>
            <li>CRAN</li>
            <li>In - Building</li>
            <li>Microwave</li>
            <li>Backhaul</li>
            <li>Fiber
              <ul className='list-[square] list-inside px-6'>
                <li>Installation</li>
                <li>Splicing</li>
              </ul>
            </li>
            <li>Electrical
              <ul className='list-[square] list-inside px-6'>
                <li>Service Upgrades</li>
                <li>Generators</li>
              </ul>
            </li>
            <li>Tiger team
              <ul className='list-[square] list-inside px-6'>
                <li>Troubleshooting</li>
                <li>PIM Testing</li>
                <li>Maintenance/Break Fix</li>
              </ul>
            </li>
            
          </ul>
        </div>
        </div>
        </>
  )
}

export default ConstServices