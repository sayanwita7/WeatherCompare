import { latLong } from "./location";
export async function address() {
    const loc = await latLong();
    const url=`https://geocode.maps.co/reverse?lat=${loc[0]}&lon=${loc[1]}&api_key=68138b3cb9635049416245ise6779b9`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log("Address: ",json.address.suburb, json.address.city, json.address.state_district, json.address.state, json.address.country);
      return [json.address.suburb, json.address.city, json.address.state_district, json.address.state, json.address.country]
    } catch (error) {
      console.error(error.message);
    }
  }
  