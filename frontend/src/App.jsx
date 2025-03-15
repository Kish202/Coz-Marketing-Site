import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Service from './components/Service/Service'
import Hero from './components/Hero/Hero'
import BannerDetails from './components/BannerDetails.jsx/BannerDetails'
import Banner from './components/Banner/Banner'
import Banner1 from "./assets/blog1.jpg";
import Banner2 from "./assets/blog3.jpg";
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
<div className="dark:bg-slate-900 dark:text-white">
<Navbar/>
<Hero/>
<Service/>
<Banner reverse={true} img={Banner1}/>
<Banner img={Banner2}/>
<BannerDetails/>
  
<Footer/>
   </div>
  )
}

export default App
