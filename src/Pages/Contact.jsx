import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import axios from 'axios'

const Contact = () => {
  const [data,setdata]=useState({});
  const [loader,setloader]=useState(false);
  let web=import.meta.env.VITE_KEY;
  function handlechanges(e){
    let v=e.target.value;
    let n=e.target.name;
    
    setdata((pre)=>{
      return ({...pre,[n]:v
      });


    })
    console.log(data);
  }
  async function handleclick (){
       setloader(true);
    axios.post(web+"/eeslc/contact", data,
    {headers: {'content-type': 'application/x-www-form-urlencoded'}}
  ).then((res)=>{
    setloader(false);
    alert(res.data);

  }).catch((e)=>{
    setloader(false);
    alert("server error or fill data properly");
  });
  }



  let x=import.meta.env.VITE_KEY;
  return (
    <div>
   <Navbar/>
   <div  style={{overflowX:"hidden"}} >
    <div className='flex content-center justify-center relative' style={{marginTop:"70px"}}>
      {
        loader && (
          <>
          <div className='absolute h-full w-full flex content-center justify-center bg-slate-100 overflow-hidden'>
            <img src='https://vauxhallone.co.uk/wp-content/themes/hermio/images/loading.gif' className='w-1/6 h-1/6 self-center'/>

          </div>
          </>
        )
      }



     <div className='flex flex-col content-center justify-center w-6/6 sm:w-4/6 m-8 rounded-lg bg-slate-600 sm:flex-row' >
      <div className='flex  flex-col' >
      <h3 className="text-3xl text-white font-bold  mt-5 mb-5 ml-4">Contact Us</h3>
      <p className="text-1xl text-white font-normal mt-5 mb-4 ml-4">Fill up the form and our Team will get back to you within 24 hours.</p>
      <div>
        <ul>
          <li className='text-lg text-white mt-1 mb-3 ml-4'> <a rel="stylesheet" href="" >  +1 877-337-5520
          
           </a> </li>
           <li className='text-lg text-white mt-1 mb-3 ml-4'>    <a href="mailto:info@eesllc.com"><i class="fa-solid fa-envelopes-bulk me-2" aria-hidden="true"></i> info@eesllc.com</a>
         </li>
          <li className='text-lg text-white mt-1 mb-3 ml-4'> <a target="_blank" href="https://goo.gl/maps/afZQE1Lp8MKo25Cy6" className='ml-0'><i class="fa-solid fa-location-dot me-3" aria-hidden="true"> !!</i> Corporate HQ <br/> 100 N Central Expy, Richardson, Texas 75080</a> </li>
        </ul>
      </div>
      



      </div>
      <div className='flex flex-col mt-8 mb-8 bg-slate-50 m-6 rounded-md' >
      <div className='mb-4 mt-3 ml-5 mr-5'>
                                <label for="fullname" class="form-label">Full Name</label>
                                <input type="text" class="form-control" name="name" id="fullname" required="" className="border-lime-900 outline rounded-sm outline-slate-500 w-full" onChange={handlechanges}/>
                            </div>
                            <div className='mb-4 mt-3 ml-5 mr-5'>
                                <label for="fullname" class="form-label">Email address</label>
                                <input type="text" class="form-control" name="email" id="fullname" required="" className="border-lime-900 outline rounded-sm outline-slate-500 w-full" onChange={handlechanges}/>
                            </div>
                            <div className='mb-4 mt-3 ml-5 mr-5'>
                                <label for="fullname" class="form-label">Phone Number</label>
                                <input type="text" class="form-control" name="phone" id="fullname" required="" className="border-lime-900 outline rounded-sm outline-slate-500 w-full" onChange={handlechanges}/>
                            </div>
                            <div className='mb-4 mt-3 ml-5 mr-5'>
                                <label for="fullname" class="form-label">Comment</label>
                                <input type="textarea" class="form-control" name="comment" id="fullname" required="" className="border-lime-900 outline rounded-sm outline-slate-500 w-full" onChange={handlechanges}/>
                            </div>
                            <button className='mb-4 mt-3 ml-5 mr-5 bg-emerald-600 w-1/3 text-white rounded-md h-10' onClick={handleclick}>
                              Submit
                            </button>




      </div>



     </div>

     </div>
   </div>
   <Footer/>

    </div>
  )
}

export default Contact