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
  </a>     </div> 

        <div>
        </div> 

        <div>
            
    </div>
    
     
        </nav>  
    </header>
  )
}

export default Navbar
