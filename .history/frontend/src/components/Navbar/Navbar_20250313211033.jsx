import React from 'react'
import React, { useEffect, useState } from "react";
import { BiMenu, BiPhoneCall } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";


function Navbar() {
  return (
     <header   className="relative z-20 border-b-[1px] border-primary/50 bg-gradient-to-t from-violet-900 via-violet-600 to-violet-900 text-white shadow-lg">
  

    <nav className="container flex h-[70px] items-center justify-between py-2">

  
     <div className="text-2xl text-white md:text-3xl">
        <a href="/#home ">
          COZ
        
  <span className="inline-block font-bold text-primary ">
    WEB
  </span>
  </a>      
  
  </div> 

        <div className="hidden md:block">
          <ul className="flex items-center gap-10">
          <li className="cursor pointer group relative" >
            
         <a href="/#home" classname="flex h-[72px] items-center gap-[2px]">
Home{" "}
<span>
  <FaCaretDown className="transtion-all duration-200      group-hover:rotate-180"/>
  </span>            
            </a>

            
        
            <div className="absolute -left-9 z-[9999] hidden w-[150px] rounded-md bg-white p-2 text-black group-hover:block">
<ul className="space-y-3">
  <li className="p-2 hover:bg-violet-200">Services</li>
<li className="p-2  hover:bg-violet-200"> about us</li>
<li className="p-2 hover:bg-violet-200">Privacy Policy</li>


</ul>


            </div>
            </li>   

          <li className="cursor pointer group">
            <a    href="/#home" className="flex h-[72px] items-center gap-[2px]">
Services{" "}
       

       <span>
        <FaCaretDown className="transition-all duration-200 group-hover:rotate-180"/>
       </span>
            </a>

  <div className="absolute left-0 z-[9999] hidden w-full rounded-b-3xl bg-white p-2 text-black group-hover:block">
   <div className="  grid grid-cols-3 gap-5">
   
   
   
    <div className="overflow-hidden">
<img   className="max-h-[300px] w-full rounded-b-3xl object-fill" src="https://picsum.photos/200" alt="pics" />
    </div>

    <div className="col-span-2">
<h1 className="pb-3 text-slate-600">
  BesT Selling

</h1>
<p className="text-sm text-slate-600  " >
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo, amet.
</p>

<div className="grid grid-cols-3">
   <ul className="mt-3 flex flex-col gap-2">
    <h1 className="pb-1 text-xl font-semibold">Development</h1>

<li className="cursor-pointer text-black/80 hover:text-primary">
  Web Development
</li>
 
 <li className="cursor-pointer text-black/80 hover:text-primary">
IOS app development
 </li>
   
   
   <li className=" cursor-pointer text-black/80 hover:text-primary " >
 The app development
    </li></ul>  

   <ul className="mt-3 flex flex-col gap-2">
<h1 className="pb-1 text-xl font-semibold">
  Other Services
</h1>

<li className="cursor-pointer text-black/80 hover:text-primary"> Other Services</li>
 
 <li className="cursor-primary text-black/80 hover:text-primary"> Cloud Services</li>
 
 <li className="curor-pointer text-black/80 hover:text-primary"> Mobile app</li>
 <div>
  <img src="" alt="" />
 </div>
   </ul>

</div>
    </div>
    </div>     
    </div>     
          </li>
          <li className="cursor pointer"></li>
         <li className="flex items-center gap-4"></li>
          </ul>
        </div> 

        <div className="block md:hidden">
          
            
    </div>
    
     
        </nav>  
    </header>
  )
}

export default Navbar
