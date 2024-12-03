import { Input } from 'postcss'
import React from 'react'

const Contact = () => {
  return (
    <div className='bg-gradient-to-r from-blue-500 to bg-green-500 min-h-screen flex items-center justify-center'>
        <div className=' w-full max-w-lg bg-white rounded-lg shadow-lg p-8'>
            <h2 className=' text-3xl font-bold text-center text-blue-800 mb-8'>Contact us Form

            </h2>
            <form action="#" method='POST'>
                <div className='flex flex-col sm:flex-row gap-4 mb-4'>
                    <div className='w-full'>
                        <label htmlFor="firstName"
                            
                         className='block text-sm: font-medium text-gray-700'>
First Name
                        </label>
                        <input  type="text" id="firstName" className='mt-1 p-2 w-fill border border-gray-300 rounded focus:outlint-n0ne focus:ring-2 focus:ring-blue-400 required:'/>
                        
                    </div>
                    
                    <div className='w-full'>
                        
                    <label htmlFor="LastName"
                            
                            className='block text-sm: font-medium text-gray-700'>
   Last Name
                           </label>
                           <input  type="text" id="LasttName" className='mt-1 p-2 w-fill border border-gray-300 rounded focus:outlint-n0ne focus:ring-2 focus:ring-blue-400 required:'/>
                           
                       </div> 
                       
                    </div>


                    <div className='mb-4'>
                    <label htmlFor="email"
               className='block text-sm: font-medium text-gray-700'>
                            Email Address </label>
                           <input  type="email" id="email"  name="email"className='mt-1 p-2 w-fill border border-gray-300 rounded focus:outlint-n0ne focus:ring-2 focus:ring-blue-400 required:'/>
                           </div>
                           <div className='mb-4'>
                           <label htmlFor="confirm Email"
                            
                            className='block text-sm: font-medium text-gray-700'>
Confirm Email
                           </label>
                           <input  type="email" id="confirmEmail" className='mt-1 p-2 w-fill border border-gray-300 rounded focus:outlint-n0ne focus:ring-2 focus:ring-blue-400 required:'/>
                           
                       </div>
                       <div className='mb-4'>

                       <label htmlFor="message"
                            
                            className='block text-sm: font-medium text-gray-700'>
   write your message
                           </label>
                           <textarea  id="message"  name="message"rows={4}
                           className='mt-1 p-2 w-fill border border-gray-300 rounded focus:outlint-none focus:ring-2 focus:ring-blue-400 required'>
                            </textarea>
                           
                       </div>
                       <button type='submit' className='w-full bg-gradient-to-r from-blue-700 to-black text-white font-bold py-2 rounded-lg shadow-md hover:border-l-gray-900 transition duration-300'>
submit
                       </button>

                       </form>
 
                       </div>

 </div>







                    
                

  )
        

    

}

export default Contact