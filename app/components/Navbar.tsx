
import Link from 'next/link'
import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className='container pt-8 '>
      <div className='flex justify-between items-center text-white '>

  
          
        <div className='text-xl font-medium text-white ' >Aumbreen Zahara </div>
        <div 
            className='text-1xl font-bold rounded-full text-black bg-white   hover:bg-green-400'><a
            href="#/">AZ
          </a>
      </div>
        

          
          
            <ul  className=" gap-10 lg:gap-16 hidden md:flex font-white">
              <li className='menuLink'><Link href="#Hero">Home</Link></li>
              <li className='menuLink'><Link href="#About">About</Link></li>
              <li className='menuLink'><Link href="#Skills">Skills</Link></li>
            <li className='menuLink'><a href="#Projects">Projects</a></li>
      
            <li className='menuLink'><Link href="#Contact">Contact</Link></li>
              
              
            </ul>
                       <AiOutlineMenu className="md:hidden" size={30} />
            </div>
            
          </div>
            
            
        
        
    
    
      

      
  )
}

export default Navbar