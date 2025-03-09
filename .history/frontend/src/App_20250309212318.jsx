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



function App() {
  const [count, setCount] = useState(0)

  return (
<>

<Hero/>
<Banner reverse={true} img={Banner1}/>
<Banner img={B}/>
<BannerDetails/>
   <Service/>

   </>
  )
}

export default App
