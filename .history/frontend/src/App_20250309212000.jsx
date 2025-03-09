import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Service from './components/Service/Service'
import Hero from './components/Hero/Hero'
import BannerDetails from './components/BannerDetails.jsx/BannerDetails'
import Banner from './components/Banner/Banner'
import Bann



function App() {
  const [count, setCount] = useState(0)

  return (
<>

<Hero/>
<Banner/>
<BannerDetails/>
   <Service/>

   </>
  )
}

export default App
