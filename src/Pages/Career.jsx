import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import axios from "axios"

const Career = () => {
  const [name,setname]=useState("");
  const [email,setemail]=useState("");
  const [position,setposition]=useState("");
  const [resume,setfile]=useState([]);
  const [phone,setphone]=useState("");
  let web=import.meta.env.VITE_KEY;
 
  async function  handleclick(e){
    
  let form=new FormData();
  form.append("name",name);
  form.append("email",email);
  form.append("position",position);
  form.append("resume",resume[0]);
  form.append("phone",phone);
  console.log(resume);
   axios.post(web+"/eeslc/carrer",form,
    {
      headers: {
        'Content-Type': 'multipart/form-data'
      }

  }).then((response)=>{
    alert(response.data);
  }).catch((e)=>{
    console.log(err);
  });
  
  
  }






  return (
    <>
    <Navbar/>
    <div style={{overflowX:"hidden"}}>
      <div className="mt-12 sm:mt-16" >
        <img  src='https://eesllc.com/assets/images/careers-banner.jpg'/>
      </div>
      <div className='flex flex-col justify-center items-center '>
        <div className=' w-6/6 sm:w-5/6 ml-4 mr-4  mt-6'>
        <div >
        <h1 className="mb-6  font-bold text-3xl text-blue-600">Careers</h1>
        <p class="mb-6 text-md text-blue-500">Our people are our greatest asset.  We welcome and value diversity and recognize that our employees’ inspiration, passion, loyalty and dedication are important to the success of our business. As an organization, our employees come from a wide range of backgrounds.  We also have a distinct company culture and seek out people who share our values, commitment and determination to be the best.</p>
        </div>
        </div>
        <div className='sm:w-1/2'>
          <div className='mt-7 mb-7 '>
          <h3 className="text-3xl font-normal text-blue-500">Join Our Team</h3>
          <div>
          <div className=" mt-5">
                    <label for="fname" className="text-lg">Full Name</label>
                    <input type="text" name="name" id="fname" className="border-lime-900 outline rounded-sm outline-slate-500 w-full" placeholder="" aria-describedby="helpId" required="" onChange={(e)=>{ setname(e.target.value)}}/>
                </div>
                <div class="form-group mt-3">
                    <label for="email">Email</label>
                    <input type="text" name="email" id="email" className="border-lime-900 outline rounded-sm outline-slate-500 w-full" placeholder="" aria-describedby="helpId" required="" onChange={(e)=>{ setemail(e.target.value)}}/>
                </div>
                <div>
                <label for="position">Position Applying For</label>
                    {/* <!-- <input type="text" name="position" id="position" class="form-control" placeholder="" aria-describedby="helpId" required> --> */}
                    <select class="form-select" aria-label="Default select example" id="position" name="position" className="border-lime-900 outline outline-slate-500 rounded-sm  w-full" onChange={(e)=>{ setposition(e.target.value)}}>
                        <option selected="" className="border-lime-900 outline rounded-sm  w-full">Select an option</option>
                        <option value="Data Center Technician -&nbsp;Texas">Data Center Technician -&nbsp;Texas</option>
                        <option value="Data Center Technician - Florida">Data Center Technician - Florida</option>
                        <option value="Data Center Technician - Georgia">Data Center Technician - Georgia</option>
                        <option value="Data Center Technician - Maryland">Data Center Technician - Maryland</option>
                        <option value="Data Center Technician - New&nbsp;Jersey">Data Center Technician - New&nbsp;Jersey</option>
                        <option value="Data Center Technician - New&nbsp;York">Data Center Technician - New&nbsp;York</option>
                        <option value="Data Center Technician - Connecticut">Data Center Technician - Connecticut</option>
                        <option value="Data Center Technician - Washington">Data Center Technician - Washington</option>
                        <option value="Data Center Technician - California">Data Center Technician - California</option>
                        <option value="Data Center Technician - North Carolina">Data Center Technician - North Carolina</option>
                        <option value="OSP Technician - East">OSP Technician - East</option>
                        <option value="OSP Technician - Central">OSP Technician - Central</option>
                        <option value="OSP Technician - West">OSP Technician - West</option>
                        <option value="Integration Field Engineer - East">Integration Field Engineer - East</option>
                        <option value="Integration Field Engineer - Central">Integration Field Engineer - Central</option>
                        <option value="Integration Field Engineer - West">Integration Field Engineer - West</option>
                        <option value="In Building Field Engineer - East">In Building Field Engineer - East</option>
                        <option value="In Building Field Engineer - Central">In Building Field Engineer - Central</option>
                        <option value="In Building Field&nbsp;Engineer&nbsp;-&nbsp;West">In Building Field&nbsp;Engineer&nbsp;-&nbsp;West</option>
                        <option value="Project Manager - Nationwide">Project Manager - Nationwide</option>
                    </select>

                </div>
                <div>
                <div class="form-group mt-3">
                    <label for="phone">Phone</label>
                    <input type="number" name="phone" id="phone" class="form-control" placeholder="" aria-describedby="helpId" required="" className="border-lime-900 outline rounded-md outline-slate-500 w-full" onChange={(e)=>{ setphone(e.target.value)}}/>
                </div>
                </div>
                <div>
                <div class="form-group mt-3">
                    <label for="cv" class="form-label">Upload Resume</label>
                    <input class="form-control" type="file" id="cv" name="cv" className=" outline outline-slate-500 rounded-sm  w-full" onChange={(e)=>{ setfile(e.target.files)}}/>
                </div>
                </div>
                <div>
                  <button className='outline-slate-500 bg-cyan-700 mt-6 w-1/6 h-8 rounded-sm text-white' onClick={handleclick}>Submit</button>
                </div>





          </div>




          </div>
        </div>
      </div>



<Footer/>
    </div>


    </>
    
    
  )
}

export default Career