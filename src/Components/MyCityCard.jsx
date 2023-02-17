import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const MyCityCard = ({ location }) => {
  const [meteoCity, setMeteoCity] = useState({});

  useEffect(() => {
    const fetchMeteo = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=imperial&appid=86cb61e3531717351bd4f33c316d31ff`
        );
        if (response.ok) {
          let data = await response.json();
          console.log(data);
          setMeteoCity(data);
        } else {
          alert("error");
        }
      } catch (error) {
        alert(error);
      }
    };

    fetchMeteo();
  }, []);

  return (
    <Link to={`/Detail/${meteoCity.name}`}>
      <Container className="m-2">
        {" "}
        <h3>
          {meteoCity.name} 📍 <span>{meteoCity.sys?.country}</span>
        </h3>
        <div className="bodyCard">
          <p>Umidità: {meteoCity.main?.humidity}%</p>
          <p>
            Temperatura: {(((meteoCity.main?.temp - 32) * 5) / 9).toFixed()}°C
          </p>
          <p>
            meteo:{" "}
            {meteoCity.weather?.length > 0 && meteoCity.weather[0].description}
          </p>
        </div>
      </Container>
    </Link>
  );
};
export default MyCityCard;
