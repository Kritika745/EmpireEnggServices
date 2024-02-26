import React from 'react'

const AboutUs = () => {
  return (
    <div id='about' className='w-full flex flex-col items-center justify-center'>
      <div className='inline-flex mt-8 border-b-4 border-[#00cc99] px-2 '>
        <h1 className='poppins text-[#00cc99] text-center text-4xl'>ABOUT US</h1>
      </div>
      <div className='mt-14 flex'>
        <div className='w-1/2'>
            <img src="/aboutus.jpg" alt="" />
        </div>
        <div className='w-1/2 '>
            <p>Our Mission is, to believe with collaboration, teamwork, and passion we can create the right
               environment for our people to deliver the best results to our clients.
            Our Vision is, to Lead in the fast-paced changing world of technology and telecommunications.
           Over the years, we have learned that great service begins and ends with experienced and friendly
            professionals, which explains our rigorous hiring process. We believe that our team is the best 
            in the business, and have complete and total confidence in every team member providing services
             to our customers across the world.
            Empire Engineering Services finishes each and every project on schedule and with the highest level of
             quality. With a focus on personalized service, competitive rates and customer satisfaction, we are always
              striving to meet and exceed customer expectations.
          We believe collaboration, teamwork, and excellence create the right environment for our people to deliver the
           best results to our clients. Our values - excellence, commitment and quality - serve as the foundation for our 
           culture and as a guide for our work with clients. On projects, we commit to these values by making our clients KPIs 
           and our own and then increasing the targets.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs