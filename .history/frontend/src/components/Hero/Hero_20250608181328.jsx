// import React from 'react'
import Banner from "../../assets/thebanner.svg"
// function Hero() {
//   return (
//            <main className="bg-gradient-to-r  from-violet-950 to-violet-900 pt-20 dark:bg-violet-950">

// <section className="container flex h-[650px] flex-col  items-center justify-center md:h-[500px]   ">
// <div className="grid grid-cols-1 items-center gap-8 dark:text-white md:grid-cols-2">



// <div className="flex flex-col items-center gap-4 text-center text-white md:items-start md:text-left">

// <h1 className="text-4xl">
//     We Build the apps that get trending on the appworld.

// </h1>

// <p className=" *:">

// Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque, itaque!
// Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere, quibusdam?
// Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, cupiditate.

// </p>


// <div className="space-x-4">

//        <button className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
//    GET Started
//     </button>

//        <button className="rounded-md border-2 border-white px-4 py-2 text-sm text-white transition-colors duration-300" >

// Login

//     </button>
// </div>

// </div>

// <div 
// data-aos="fade-left"
// data-aos-duration="400"
// data-aos-once="true"

// className="mx-auto max-w-xs p-4">

//     <img src={Banner} alt="No image" className="hover:drop-shadow-md"/>


// </div>


// </div>
// </section>



//         </main>
      
  
//   )
// }



// export default Hero






import React from "react";
import Typewriter from "../../Typewriter";
// import Banner from "../../assets/undraw_real_time_sync_re_nky7.svg";

const Hero = () => {
  return (
    <main className="bg-gradient-to-r from-violet-950 to-violet-900 pt-2 dark:bg-violet-950">
      <div 
             className="absolute -left-60 top-80 -translate-y-1/2 w-full h-48 rounded-full transform  rotate-12 blur-xl opacity-70"
        style={{
          background: 'radial-gradient(ellipse, rgba(56, 189, 248, 0.3) 0%, rgba(125, 211, 252, 0.2) 40%, transparent 70%)'
        }}
   ></div>
      <section className="container flex h-[650px] flex-col items-center justify-center md:h-[500px] ">
        <div className="grid grid-cols-1 items-center gap-8 dark:text-white md:grid-cols-2">
          <div
            data-aos="fade-right"
            data-aos-duration="700"
            data-aos-once="false"
            className="flex flex-col items-center gap-4 text-center text-white md:items-start md:text-left "
          >
      <h1 className="text-5xl font-extrabold">
              We Build Apps That Get Trending On Appworld
            </h1>
            <p className="animate-ping  font-semibold ">
         <Typewriter                                          text={Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi
              ducimus eius quis ad enim aliquid iusto eum nihil exercitationem
              necessitatibus?}      dela />
            </p>
            <div className="space-x-4">
              <button className="rounded-md border-2 border-primary bg-primary px-4 py-2 text-sm text-white transition-colors duration-300 hover:bg-primary/80">
                Get Started
              </button>
              <button className="border-1  rounded-md border-2 border-white px-4 py-2 text-sm text-white transition-colors duration-300 ">
                Get Started
              </button>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="400"
            data-aos-once="false"
            className="mx-auto max-w-xs p-4"
          >
            <img src={Banner} alt="No image" className="hover:drop-shadow-md" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;