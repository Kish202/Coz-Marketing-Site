import React from 'react'
import CountUp from "react-countup"

const Service =() =>{
  return (
    <section className="container h-12 md:h-32">
     <div className="grid grid-cols-4 w-full -translate-y-10  border border-yellow-900 bg-teal-300 p-2 shadow-lg dark:bg-violet-800 dark:text-white/70 md:max-w-[800px] md:-translate-y-16 md:p-8">
    <div className="flex flex-col items-center justify-center " >



<h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl text-lime-900">
      <CountUp end={234} suffix="+" duration={2.75}/>

</h1>

<h1 className="sm:text-md text-xs font-bold md:text-lg">
Clients
</h1>




        </div>   

        <div className="flex flex-col items-center justify-center">
  <h1 className="text-sm text-black/80 sm:text-lg md:text-3xl dark:text-white">
  <CountUp end={57} suffix="+" duratiion={2.75}/>  </h1>  

    <h1 className="sm:text-md font-bold text-xs md:text-lg">
        Projects
        
        </h1>        
            </div>        

    <div className="flex flex-col items-center justify-center" >
     
     
     
        <h1 className="text-sm text-black/80 dark:text-white  sm:text-lg md:text-3xl">
<CountUp end={234}  suffix="k+" / >
        </h1>
<h1 className="font-bold  sm:text-md text-xs md:text-lg" >
Subscribers
</h1>


            </div>


<div className="flex flex-col items-center justify-center">
<h1 className="text-sm font-bold text-black/80 dark:text-white sm:text-lg md:text-3xl">
<CountUp start={-875.020}
end={160527.012} duration={2.75} separator="" suffix="+" />
</h1>


<h1 className="text-xs sm:text-md  font-bold md:text-lg ">
Clients
</h1>
</div>
</div> 
    </section>
  )
}

export default Service
