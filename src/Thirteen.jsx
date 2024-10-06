import React, { useEffect, useState } from "react";

function Thirteen() {
  const [weather, setWeather] = useState("");
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        console.log(lat, " ", lon);
        

        fetch(
          `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&exclude={part}&appid=32315c2afef301a4625e15776815e47c`
        )
          .then((res) => res.json())
          .then((data) => setWeather(data));
      });
    }
    console.log(weather);
    
  }, []);
  return (
    <div>
      {weather ? (
        <div>
          <h2>Weater forecast</h2>
          <p>Temperature:</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default Thirteen;
