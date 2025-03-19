import { useState } from 'react'
import "aos/dist/aos.css"
import './App.css'
import Service from './components/Service/Service'
import Hero from './components/Hero/Hero'
import BannerDetails from './components/BannerDetails.jsx/BannerDetails'
import Banner from './components/Banner/Banner'
import Banner1 from "./assets/blog1.jpg";
import Banner2 from "./assets/blog3.jpg";
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import Blogs from './components/Blogs/Blogs'
import Swipe from './components/Blogs/Swipe'
import AOS from "aos"
import {useEffect} from "react"


function App() {
 const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark",
  );
  const [showMenu, setShowMenu] = useState(false);

  const element = document.documentElement;

useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
      console.log("dark theme");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
      console.log("light theme");
    }
                  }, [theme]);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 500,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
  return (

    <>
<div className="dark:bg-slate-900 dark:text-white">
<Navbar theme={theme}     setTheme={setTheme}/>
<Hero/>
<Service/>
<Blogs/>
<Swipe/>
<Banner reverse={true} img={Banner1}/>
<Banner img={Banner2}/>
<BannerDetails/>
  
<Footer/>
   </div>
   </>
  )
}

export default App
