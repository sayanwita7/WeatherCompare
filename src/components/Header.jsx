import React, {useState, useEffect} from 'react';
import { address } from '../apis/address';
function Header() {
  const [address1, setAddress] = useState("")
  const setAdd = async () => {
    const add=await address()
    setAddress(`${add[0]}, ${add[1]}`)
  }
  useEffect(() => {
    setAdd()
  }, [])
    return (
      <header className="py-2 shadow bg-purple-300 fixed top-0 left-0 w-full z-40">
  <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-4 space-y-2 md:space-y-0 px-4 md:px-10">
    <div className="flex items-center space-x-3">
      <img
        src="https://cdn-icons-png.flaticon.com/256/6643/6643157.png"
        alt="Logo"
        className="w-10 h-10 object-contain"
      />
      <span className="text-lg md:text-xl font-semibold text-white">WeatherCompare</span>
    </div>
    <h2 className="italic font-serif text-white text-sm md:text-base">
      Current Location: {address1}
    </h2>
  </div>
</header>

    
    )
  }

export default Header
