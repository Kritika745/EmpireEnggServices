import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function FieldServices() {
  return (
    <>
    <Navbar/>
    <div style={{ overflowX: 'hidden' }}>
      
        <div>
          <img src="/Images/fieldservice.jpg" alt="Field Service" className="w-full h-auto object-contain mt-16" />
        </div>
        <div className="p-8">
          <span className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-[#00cc99] poppins border-b-4 border-[#00cc99]">Field Services</span>
          <p className="text-sm lg:text-xl mb-6 text-white blue  rounded-lg p-6 mt-7 flex">
            EES provides the best quality and competent diverse workforce when it comes to radio base installation,
            commissioning, integration, troubleshooting, call testing and drive testing. We have intensive knowledge
            with all the major OEM’s HW, SW and have a national diverse footprint which we can swiftly implement on
            your next project. EES’s culture is built on zero defects quality and safety management to serve our
            clients the best in class services.
          </p>
          <ul className="text-sm lg:text-xl list-disc list-inside text-white blue  rounded-lg p-6">
            <li>Macro Cell Sites</li>
            <li>Micro Cell Sites</li>
            <li>Small Cell</li>
            <li>CRAN</li>
            <li>Cell on Wheels</li>
            <li>DAS</li>
            <li>In - Building</li>
            <li>Private Networks</li>
            <li>Special Events/Projects</li>
          </ul>
        </div>
      
    </div>
    <Footer/>
    </>
  );
}

export default FieldServices;


