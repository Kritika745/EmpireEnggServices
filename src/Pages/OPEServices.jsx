import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const OPEservices = () => {
  return (
    <>
    <Navbar/>
    <div style={{ overflowX: 'hidden' }}>
    <div>
          <img src="/Images/outsidebanner.jpg" alt="Outside service" className="w-full h-auto object-contain mt-16" />
        </div>
        <div className="p-8">
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text_blue poppins border-b-4 border-violet-950 ">Outside Plant Engineering Services</span>
          <p className="text-sm lg:text-xl mb-6 bg-[#00cc99] bg-opacity-45  rounded-lg p-6 flex mt-7">
          EES combines engineering tools and processes with expert diverse workforce for optimal outside plant network engineering services. Our deep fundamental in the OSP space enables us to ensure we are able to provide our customers with vertical services to ensure we are exceeding milestones on all projects we touch.
          </p>
          <ul className="text-sm lg:text-xl list-disc list-inside  bg-[#00cc99] bg-opacity-45  rounded-lg p-6">
            <li>Research</li>
            <li>Field Surveys</li>
            <li>Planning & Design</li>
            <li>Drafting</li>
            <li>Permit Drawing</li>
            
          </ul>
        </div>
        </div>
        <Footer/>
        </>
  )
}

export default OPEservices