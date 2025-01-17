import React from 'react'
import Image from 'next/image';
interface propsType{
  
  title:string;
  desc:string;
  img:string;
  tags:string[];
}

const Card:React.FC<propsType> = ({title,desc,img,tags}) => {
  return (
    <div className=' border border-accent w-[200px] sm:w-[200px]  mb-4'>



      <div>
        <Image className="w-[250px] sm:w-[250px] h-auto" 
        
        src={img}
        width={250}
        height={250}
        alt={title}
/>
      </div>



      <div className='p-4 space-y-4'>
        <div className='text-4xl font-extralight'>{title} </div>
        <div>{desc}</div>
         <div>{tags.map((el)=> (
          <div className='tags' key={el}>{el}
        </div>))}
        </div>

      </div>
    </div>
  )
}

export default Card