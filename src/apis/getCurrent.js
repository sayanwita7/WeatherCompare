import { latLong } from "./location";
export async function getCurrentInfo() {
    const loc = await latLong();
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${loc[0]}&longitude=${loc[1]}&daily=temperature_2m_max,temperature_2m_min,uv_index_max,cloud_cover_mean,precipitation_probability_mean&forecast_days=1&timezone=auto`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      // console.log(`Today: 
      //   Maximum : ${json.daily.temperature_2m_max[0]}${json.daily_units.temperature_2m_max} 
      //   Minimum : ${json.daily.temperature_2m_min[0]}${json.daily_units.temperature_2m_min}
      //   UV Index: ${json.daily.uv_index_max[0]}
      //   Cloud cover: ${json.daily.cloud_cover_mean} ${json.daily_units.cloud_cover_mean}
      //   Precipitation: ${json.daily.precipitation_probability_mean} ${json.daily_units.precipitation_probability_mean}`);
      return [json.daily.temperature_2m_max[0], json.daily.temperature_2m_min[0],json.daily.uv_index_max[0],json.daily.cloud_cover_mean,json.daily.precipitation_probability_mean] 
    } catch (error) {
      console.error(error.message);
    }
  }
