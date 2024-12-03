import React from 'react'


import Navbar from './Navbar'

const Hero = () => {
  return (
    <div id="hero" className='min-h-screen bg-no-repeat  bg-[url(/pic4.jfif)]  rounded-s  bg-cover '
     style={{backgroundSize :"25%",backgroundPosition:"left 100px top 100px"}}>

          <Navbar />
          <div className=' container grid lg:grid-cols-2 h-[calc(100vh-60px)]'>
            <div className='hidden lg:block'>

            </div>
           
           
          
          
            
            
              <div className='text-[30px]  sm:text-[40px] font-bold leading-tight  flex justify-center text-right text-white  items-center'>
<div>
  
               <p data-aos="zoom-in-up"> Turning Vision Into</p>
             <p data-aos="zoom-in-up"> Reality With Code</p>
             <p data-aoa="zoom-in-up " >And Design.</p>
             
            </div>
            
      
          </div>
          <div><h4 className='flex justify-between text-center text-white'> I' m a softwae Developer wih a focus on web <br />and mobile applications,<br />currently expanding my experties in Artificial Intelligenece and Mataverse.</h4>
            </div>
            <div>
              <button className=' bg-white text-black px-6 py-2 rounded-full hover:bg-black'>About me</button>
            </div>
      </div>
      
      </div>
      

    
  )
}

export default Hero