import React from 'react'
import Navbar from '../Components/Navbar'

const OPEservices = () => {
  return (
    <>
    <Navbar/>
    <div style={{ overflowX: 'hidden' }}>
    <div>
          <img src="/Images/outsidebanner.jpg" alt="Outside service" className="w-full h-auto object-contain" />
        </div>
        <div className="p-8">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-red-900">Outside Plant Engineering Services</h1>
          <p className="text-sm lg:text-xl mb-6 bg-pink-300 rounded-lg p-3 flex ">
          EES combines engineering tools and processes with expert diverse workforce for optimal outside plant network engineering services. Our deep fundamental in the OSP space enables us to ensure we are able to provide our customers with vertical services to ensure we are exceeding milestones on all projects we touch.
          </p>
          <ul className="text-sm lg:text-xl list-disc list-inside bg-red-600/45 rounded-lg p-3">
            <li>Research</li>
            <li>Field Surveys</li>
            <li>Planning & Design</li>
            <li>Drafting</li>
            <li>Permit Drawing</li>
            
          </ul>
        </div>
        </div>
        </>
  )
}

export default OPEservices