import { useState, useEffect } from 'react'
import './App.css'
import {getCurrentInfo} from './apis/getCurrent.js'
import { getPastInfo } from './apis/getPast.js'
import { address } from './apis/address.js'

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
    address();
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
      <div className="min-h-screen w-full pt-20 pb-1 p-6">
        <div className="grid gap-2 md:grid-cols-1">
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
      </div>

    </>
  )
}

export default App
