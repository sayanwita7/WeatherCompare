import { useState, useEffect } from 'react'
import './App.css'
import {getCurrentInfo} from './apis/getCurrent.js'
import { getPastInfo } from './apis/getPast.js'

function App() {
  const [currTempMin, setCurrTempMin] = useState(0)
  const [currTempMax, setCurrTempMax] = useState(0)
  const [pastTempMin, setPastTempMin] = useState(0)
  const [pastTempMax, setPastTempMax] = useState(0)

  const [currUvIndex, setCurrUvIndex]=useState(0)
  const [currCloudCover, setCurrCloudCover]= useState(0)
  const [currPrecipitation, setCurrPrecipitation]=useState(0)
  const [pastUvIndex, setPastUvIndex]=useState(0)
  const [pastCloudCover, setPastCloudCover]= useState(0)

  const setTemp =  async () => {
    const curTemp = await getCurrentInfo();
    const pastTemp = await getPastInfo();

    setCurrTempMin(curTemp[1]);
    setCurrTempMax(curTemp[0]);
    setCurrUvIndex(curTemp[2]);
    setCurrCloudCover(curTemp[3]);
    setCurrPrecipitation(curTemp[4]);
    setPastTempMin(pastTemp[1]);
    setPastTempMax(pastTemp[0]);
    setPastUvIndex(pastTemp[2]);
    setPastCloudCover(pastTemp[3]);
  }

  useEffect(() => {
    setTemp()
  }, [])
  
  const today = new Date().toLocaleDateString("en-IN")
  const past = new Date();
  past.setFullYear(past.getFullYear() - 1);
  const fPast = past.toLocaleDateString("en-IN");
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-blue-200 to-blue-400 flex flex-col items-center justify-center p-6">
      <img src="https://cdn-icons-png.flaticon.com/256/6643/6643157.png"  alt="Logo" className="fixed top-4 left-4 w-12 h-12 object-contain z-50"/>
        <div className="grid gap-6 md:grid-cols-1 w-full max-w-4xl">
          {/* Current Weather */}
          <div className="bg-white rounded-2xl shadow-xl p-6 bg-gradient-to-b from-cyan-300 to-purple-200">
            <h2 className="text-xl font-bold text-blue-700 mb-4">Today's Weather: {today}</h2>
            <p className="text-gray-700 text-lg">
              <strong>Maximum Temperature:</strong> <span id="maxTempCurrent">{currTempMax}</span>°C
            </p>
            <p className="text-gray-700 text-lg">
              <strong>Minimum Temperature:</strong> <span id="minTempCurrent">{currTempMin}</span>°C
            </p>
            <p className="text-gray-700 text-lg">
              <strong>UV Index:</strong> <span id="uvindexCurrent">{currUvIndex}</span>
            </p>
            <p className="text-gray-700 text-lg">
              <strong>Cloud cover:</strong> <span id="cloudCurrent">{currCloudCover}</span>%
            </p>
            <p className="text-gray-700 text-lg">
              <strong>Precipitation:</strong> <span id="precipitationCurrent">{currPrecipitation}</span>%
            </p>
          </div>

          {/* Past Weather */}
          <div className="bg-white rounded-2xl shadow-xl p-6 justify-center bg-gradient-to-b from-purple-200 to-purple-500">
            <h2 className="text-xl font-bold text-blue-700 mb-4">Weather a Year Ago: {fPast}</h2>
            <p className="text-gray-700 text-lg">
              <strong>Maximum Temperature:</strong> <span id="maxTempPast">{pastTempMax}</span>°C
            </p>
            <p className="text-gray-700 text-lg">
              <strong>Minimum Temperature:</strong> <span id="minTempPast">{pastTempMin}</span>°C
            </p>
            <p className="text-gray-700 text-lg">
              <strong>UV Index:</strong> <span id="uvindexPast">{pastUvIndex}</span>
            </p>
            <p className="text-gray-700 text-lg">
              <strong>Cloud cover:</strong> <span id="cloudPast">{pastCloudCover}</span>%
            </p>
          </div>
        </div>
      <br/>
      <br/>
      <h1 className="italic font-serif text-white">Comparison is the thief of joy!</h1>
      <h2 className="italic font-serif text-white">-Sayanwita Dey, 2025 (Probably)</h2>
      <img src="https://i.fbcd.co/products/resized/resized-750-500/2110-winking-emoji-mainpreview-896e7321e3bb7dc667fedc9eb6f44e66404dfb6c74a490ea0470f382602a2529.jpg"  alt="Logo" className="bottom-4 right-4 w-12 h-12 object-contain z-50"/>
      
      </div>

    </>
  )
}

export default App
