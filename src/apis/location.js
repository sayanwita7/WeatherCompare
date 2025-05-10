export async function latLong() {
    if (navigator.geolocation) {
      return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            console.log("Latitude: " + position.coords.latitude);
            console.log("Longitude: " + position.coords.longitude);
            resolve([position.coords.latitude, position.coords.longitude]);
          },
          (error) => {
            console.error("Error occurred. Error code: " + error.code);
            resolve([0, 0]); 
          }
        );
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
      return [0, 0];
    }
  }
  