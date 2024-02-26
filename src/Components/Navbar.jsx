import React from 'react'
import { Menu, X } from 'lucide-react'
import { Link, useLocation } from 'react-router-dom'
import logo from '/ees-logo.png'
import '../App.css'

const Navbar=()=> {
  const handleClick = () => {
    const serviceSection = document.getElementById('about');
    if (serviceSection) {
      serviceSection.scrollIntoView({ behavior: 'smooth' }); 
    }
  }
  
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const [isMenuOpen1, setIsMenuOpen1] = React.useState(false)
  const location1 = useLocation();

  const toggleMenu1 = () => {
    setIsMenuOpen1(!isMenuOpen1)
  }
  

  const currentPathname = location.pathname;
  console.log(currentPathname)
 
  return (
    <div className="blue w-full md:h-20 h-22 z-10 flex">
      <div className=" md:h-20 h-22 flex w-full items-center px-4 py-2 sm:px-6 lg:px-8 justify-between ">
        <div className="">
         <img className='w-[24vw] md:w-[10vw] mx-10' src={logo} alt="" />
        </div>
        <div className="hidden lg:block mx-10 ">
          <ul className="flex gap-8">
            <Link to='/'><li className={`text-base hover:text-[#00cc99] font-bold ${currentPathname === '/' ? 'border-b-2 border-[#00cc99] text-[#00cc99]' : 'border-none text-white'}`}>Home</li></Link>           
             <Link to='/#about'><li onClick={handleClick} className={`text-base hover:text-[#00cc99] font-bold ${currentPathname === '/#about' ? 'border-b-2 border-[#00cc99] text-[#00cc99]' : 'border-none text-white'} `}>About Us</li></Link>
             <li className="relative z-50 ">
              <span className={`text-base hover:text-[#00cc99] font-bold cursor-pointer ${currentPathname.includes('/services') ? 'border-b-2 border-[#00cc99] text-[#00cc99]' : 'border-none text-white'}`} onClick={toggleMenu1}>Services</span>
              {isMenuOpen1 && (
                <ul className="blue p-1 w-[19vw] ring-1 ring-white ring-opacity-20   absolute mt-2  text-white font-bold rounded-lg shadow-lg">
                  <li className="py-1 px-2 hover:text-[#00cc99]">
                    <Link to='/FieldServices'>Field Services</Link>
                  </li>
                  <li className="py-1 px-2 hover:text-[#00cc99]">
                    <Link to='/ConstructionServices'>Construction Services</Link>
                  </li>
                  <li className="py-1 px-2 hover:text-[#00cc99]">
                    <Link to='/RadioAccessNetworkServices'>Radio Access Network Services</Link>
                  </li>
                  <li className="py-1 px-2 hover:text-[#00cc99]">
                    <Link to='/OutsidePlantServices'>Outside Plant Engineering Services</Link>
                  </li>
                  <li className="py-1 px-2 hover:text-[#00cc99]">
                    <Link to='/DataCenterServices'>Data Center Services</Link>
                  </li>
                  <li className="py-1 px-2 hover:text-[#00cc99]">
                    <Link to='/NOCServices'>NOC Services</Link>
                  </li>
                  <li className="py-1 px-2 hover:text-[#00cc99]">
                    <Link to='/ProfessionalServices'>Professional Services</Link>
                  </li>
                </ul>
              )}
            </li>            
            <Link to='/Careers'><li className={`text-base hover:text-[#00cc99] font-bold ${currentPathname === '/Careers' ? 'border-b-2 border-[#00cc99] text-[#00cc99]' : 'border-none text-white'} `}>Careers</li></Link>
            <Link to='/Contact'><li className={`text-base hover:text-[#00cc99] font-bold ${currentPathname === '/Contact' ? 'border-b-2 border-[#00cc99] text-[#00cc99]' : 'border-none text-white'}`}>Contact Us</li></Link>   
          </ul>
        </div>
        <div className="lg:hidden">
          <Menu onClick={toggleMenu} className="text-[#00cc99] h-8 w-8 cursor-pointer" />
        </div>
        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-0 z-10 origin-top-right transform p-2 transition lg:hidden cursor-pointer">
            <div className="blue rounded-lg shadow-lg ring-1 ring-white ring-opacity-20 ">
              <div className="px-5 pb-6 pt-5">
                <div className="flex items-center justify-between">
                  <div className=" ">
                  <img className='w-[100px] ' src={logo} alt="" />
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={toggleMenu}
                      className=" text-[#00cc99]"
                    >
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-2">
                     <Link to='/'><li onClick={()=>setIsMenuOpen(false)} className={`text-base hover:text-[#00cc99] font-bold  ${currentPathname === '/' ? 'text-[#00cc99]' : 'border-none text-white'} `}>Home</li></Link>
                     <Link to='/#about'><li  onClick={()=>setIsMenuOpen(false)} className={`text-base hover:text-[#00cc99] font-bold ${currentPathname === '/#about' ? ' text-[#00cc99]' : 'border-none text-white'} `}>About Us</li></Link>
                     <li   className={`relative z-50 text-base hover:text-[#00cc99] font-bold cursor-pointer ${currentPathname.includes('/services') ? 'border-b-2 border-[#00cc99] text-[#00cc99]' : 'border-none text-white'}`} >
              <span  onClick={toggleMenu1}>Services</span>
              {isMenuOpen1 && (
                <ul className="blue p-1 w-[19vw] ring-1 ring-white ring-opacity-20   absolute mt-2  text-white font-bold rounded-lg shadow-lg">
                  <li className="py-1 px-2 hover:text-[#00cc99]">
                    <Link to='/FieldServices'>Field Services</Link>
                  </li>
                  <li className="py-1 px-2 hover:text-[#00cc99]">
                    <Link to='/ConstructionServices'>Construction Services</Link>
                  </li>
                  <li className="py-1 px-2 hover:text-[#00cc99]">
                    <Link to='/RadioAccessNetworkServices'>Radio Access Network Services</Link>
                  </li>
                  <li className="py-1 px-2 hover:text-[#00cc99]">
                    <Link to='/OutsidePlantServices'>Outside Plant Engineering Services</Link>
                  </li>
                  <li className="py-1 px-2 hover:text-[#00cc99]">
                    <Link to='/DataCenterServices'>Data Center Services</Link>
                  </li>
                  <li className="py-1 px-2 hover:text-[#00cc99]">
                    <Link to='/NOCServices'>NOC Services</Link>
                  </li>
                  <li className="py-1 px-2 hover:text-[#00cc99]">
                    <Link to='/ProfessionalServices'>Professional Services</Link>
                  </li>
                </ul>
              )}
            </li>                          
            <Link to='/Careers'><li  onClick={()=>setIsMenuOpen(false)} className={`text-base hover:text-[#00cc99] font-bold ${currentPathname === '/Careers' ? ' text-[#00cc99]' : 'border-none text-white'} `}>Careers</li></Link>
            <Link to='/Contact'><li onClick={()=>setIsMenuOpen(false)} className={`text-base hover:text-[#00cc99] font-bold ${currentPathname === '/Contact' ? ' text-[#00cc99]' : 'border-none text-white'}`}>Contact Us</li></Link> 
                  </nav>
                </div>
               
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar