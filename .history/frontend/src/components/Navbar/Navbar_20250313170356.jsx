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

          <li className="cursor pointer group"></li>
          <li></li>
         <li></li>
          </ul>
        </div> 

        <div className="block md:hidden">
          
            
    </div>
    
     
        </nav>  
    </header>
  )
}

export default Navbar
