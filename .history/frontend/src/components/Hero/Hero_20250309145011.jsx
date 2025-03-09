import React from 'react'
import Banner from "../../assets/thebanner.svg"
function Hero() {
  return (
           <main className="bg-gradient-to-r  from-violet-950 to-violet-900 pt-20 dark:bg-violet-950">

<section className="container flex h-[650px] flex-col  items-center justify-center md:h-[500px]  border border-yellow-600">
<div className="grid grid-cols-1 items-center gap-8 dark:text-white md:grid-cols-2">



<div className="flex flex-col items-center gap-4 text-center text-white md:items-start md:text-left">

<h1 className="text-4xl">
    We Build the apps that get trending on the appworld.

</h1>

<p className=" *:">

Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, itaque!
Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, quibusdam?
Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, cupiditate.

</p>


<div className="space-x-4">

       <button className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
   GET Started
    </button>

       <button className="rounded-md border-" >


    </button>
</div>

</div>

<div>


</div>


</div>
</section>



        </main>
      
  
  )
}

export default Hero
