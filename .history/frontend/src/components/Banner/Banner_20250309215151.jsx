import React from 'react'
import Bannerimg from "../../assets/blog2.jpg";


function Banner({reverse, img}) {
  return (
    <section>
     <main   className="bg-slate-100 dark:bg-slate-900 dark:text-white">
     <section className="container flex flex-col items-center justify-center py-10 md:h-[500px]">


      <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">

 <div 
 className={`flex flex-col items-start gap-4 text-left md:p-8 ${reverse ? "md:order-last": ""}`}>
 <h1>
    
      </h1> 


      <p>
        
        </p>  
    </div>       
        
   <div>
    
    </div>     
   
        </div>  
        
        </section>   
        </main> 
    </section>
  )
}

export default Banner
