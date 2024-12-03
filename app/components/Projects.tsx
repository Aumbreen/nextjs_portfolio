import React from 'react'







const data=[ 
{
  id:0,
  title:" simple calculator",
  desc:"A basic HTML,CSS and typescript calculator performing",
  img: "/calculator.jpg",
  tags:["HtML","Node","CSS","Typescript"],
  
},


{


id:1,
  title:" currency converter",
  desc:"A basic HTML,CSS and typescript calculator performing",
  img: "/currency convertor.png",
  tags:["HtML","Node","CSS","Typescript"],
  
},




{
  id:2,
  title:" trafic Lights",
  desc:"A basic HTML,CSS and typescript  performing",
  img: "/trafic lights.jpg",
  tags:["HTML","Node","CSS","Typescript"]
},
{
  id:3,
  title:" Weather Update",
  desc:"A basic HTML,CSS and typescript  performing",
  img: "/weather.jpg",
  tags:["HtML","Node","CSS","Typescript"]

}

















]

import Heading from './Heading'
import Card from './Card'
const Projects = () => {
  return (
    <div id="Projects" className='containter pt-32 text-white '>
        <Heading  title="My Projects"/>
        <div className='grid gap-8 xl:gap-0 xl:gap-y-8 md:grid-cols-1 lg:grid-cols-4 place-items-center '>
{data.map((el) => (<Card 
key={el.id}
title={el.title}
desc={el.desc}
img={el.img}
tags={el.tags}
 
/>))}
        </div>
    </div>
  )
}

export default Projects