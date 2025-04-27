import { latLong } from "./location";
export async function getPastInfo() {
    const pastDate = new Date();
    pastDate.setFullYear(pastDate.getFullYear() - 1); // Subtract 1 year
    const fDate = pastDate.toISOString().split("T")[0];

    // console.log("Date: ", fDate);
    const loc = await latLong();
    const url=`https://historical-forecast-api.open-meteo.com/v1/forecast?latitude=${loc[0]}&longitude=${loc[1]}&start_date=${fDate}&end_date=${fDate}&daily=temperature_2m_max,temperature_2m_min,uv_index_max,cloud_cover_mean&timezone=auto`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      //console.log(json);
      //console.log(`Temperature a year back: 
      //  Maximum : ${json.daily.temperature_2m_max[0]}${json.daily_units.temperature_2m_max} 
      //  Minimum : ${json.daily.temperature_2m_min[0]}${json.daily_units.temperature_2m_min}`);
      return [json.daily.temperature_2m_max[0], json.daily.temperature_2m_min[0], json.daily.uv_index_max[0], json.daily.cloud_cover_mean[0]]
    } catch (error) {
      console.error(error.message);
    }
}