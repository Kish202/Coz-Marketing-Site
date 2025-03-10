import React from 'react'
import Bannerimg from "../../assets/blog2.jpg";


function Banner({reverse, img}) {
return (
    <section>
     <main   className="bg-slate-100 dark:bg-slate-900 dark:text-white mt-10 ">
     <section className="container flex flex-col items-center justify-center py-10 md:h-[500px]">


        <div className="grid grid-cols-1 items-center gap-4 md:grid-cols-2">

 <div 
 className={`flex flex-col items-start gap-4 text-left md:p-8 ${reverse ? "md:order-last": ""}`}>
 <h1 className="text-2xl md:text-4xl">
     We Builds apps that get Trending on techworld.
    
        </h1> 


        <p classname="text-sm text-slate-600 dark:text-slate-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ab commodi fugiat nemo 
            possimus voluptates
             illo facere iure atque corrupti enim?
            </p>  
    
    

    <div>

            <ul className="flex list-inside flex-start  list-disc flex-col gap-2 md:gap-4">
 
                     <li className="font-medium ">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam!
                    </li>
<li className="font-medium">Lorem ipsum, dolor sit amet consectetur adipisicing T.</li>
        
                    <li className="font-medium" >
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam!
                    </li>
            </ul>
    </div>
        <div className="space-x-4">

            <button className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white duration-300 hover:bg-primary/90">
GET Started
            </button>
    </div>
    </div>       
            
 <div className={reverse?"order-1":""}>
    <img 
    src={img} 
    alt="no image" 
    className="mx-auto w-full h-[400px] object-cover hover:drop-shadow-md"
    />
    </div>     
 
            </div>  
            
            </section>   
            </main> 
    </section>
)
}

export default Banner
