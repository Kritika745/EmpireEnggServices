import React from 'react'

const AboutUs = () => {
  return (
    <div id='about' className='w-full flex flex-col items-center justify-center bg-[#00cc99] bg-opacity-45'>
      <div className='inline-flex mt-10 border-b-4 border-violet-950 px-2 '>
        <h1 className='poppins text_blue text-center text-4xl'>ABOUT US</h1>
      </div>
      <div className=' flex w-full flex-wrap md:px-10 lg:px-36'>
        <div className='w-full lg:w-1/3 mt-10 flex justify-center items-center'>
            <img className='rounded-[50%] md:h-[400px] md:w-[400px] h-[300px] w-[300px] ring-8 ring-violet-950' src="/aboutus.jpg" alt="" />
        </div>
        <div className='poppins_400 w-full lg:w-2/3 mt-14 text-[1.1rem] text-justify px-16 '>
            <p>Our Mission is, to believe with collaboration, teamwork, and passion we can create the right
               environment for our people to deliver the best results to our clients.</p>
           <p className='my-2'> Our Vision is, to Lead in the fast-paced changing world of technology and telecommunications.</p>
          <p> Over the years, we have learned that great service begins and ends with experienced and friendly
            professionals, which explains our rigorous hiring process. We believe that our team is the best 
            in the business, and have complete and total confidence in every team member providing services
             to our customers across the world. </p>
           <p className='my-2'> Empire Engineering Services finishes each and every project on schedule and with the highest level of
             quality. With a focus on personalized service, competitive rates and customer satisfaction, we are always
              striving to meet and exceed customer expectations. </p>
         <p className='mb-10'> We believe collaboration, teamwork, and excellence create the right environment for our people to deliver the
           best results to our clients. Our values - excellence, commitment and quality - serve as the foundation for our 
           culture and as a guide for our work with clients. On projects, we commit to these values by making our clients KPIs 
           and our own and then increasing the targets.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs