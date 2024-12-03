import React from 'react'
import Image from 'next/image';
const About = () => {
  return (
    <div  id="About" className ="container pt-32  max-w-screen bg-gradient-to-r to-blue-950 from bg-blue-400 " data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="2000">

    
        <h2 className='font-semibold text-center text-4xl md:text-5xl text-black'>
            About Me
            </h2>
            <Image src="/css(1).jpeg" height="350" width="380" alt="text" className='pl-16 mt-4' />
            <div className='flex justify-between  mr-3 px-24 py-6  text-left'>
            <p className=' text-slate-800  pt-4  mr-3 font-semibold'>
             I am a student of GiAIC.Bacically i am expert in fine Arts Multiple Media.For this institute i have much more gain Knowledge
            Inshallah One day i will  have  to become a good experienced  Tools of IT developer.Thats bring of our Country prosperity and Advancement of the  beloved Nation,
            
            
             
              "As an IT developer with a stromg foumdation im Html,CSS,Typescript and javascript and Next.js.Ihve dedicated my Experties to creating
              dynamic and responive Web Applications.Reacentlly i have work ing with framework like Next.js and Tailwimd CSS. enhancing my ability to deliver visually engaging and effiecent websites.My recent<br />
              projects,including a calculator ,traffic lights,and travel focused website Fo Pakistan ,showcasemy abliites in both frontend development and responsive design.I' m also proficient with Node.js giving me a well rounded appoarch to both clint-side and server -side development.<br />
              With a keen eye for detail and a passion for leaning,I am commited to developing innovative solutions that mak an impact. "
            
            
            
            </p>
          
          </div>
            </div>
            

            
  )
}

export default About