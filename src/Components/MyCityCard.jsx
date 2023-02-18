import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import NotFound from "./NotFound";

const MyCityCard = ({ location }) => {
  const [meteoCity, setMeteoCity] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

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
          setLoading(false);
          setError(false);
        } else {
          alert("error");
          setLoading(false);
          setError(true);
        }
      } catch (error) {
        alert(error);
      }
    };

    fetchMeteo();
  }, []);

  return (
    <>
      {loading && <Loading />}
      {error ? (
        <NotFound />
      ) : (
        <Link to={`/Detail/${meteoCity.name}`}>
          <Container className="m-2">
            {" "}
            <h3>
              {meteoCity.name} 📍 <span>{meteoCity.sys?.country}</span>
            </h3>
            <div className="bodyCard">
              <p>Umidità: {meteoCity.main?.humidity}%</p>
              <p>
                Temperatura: {(((meteoCity.main?.temp - 32) * 5) / 9).toFixed()}
                °C
              </p>
              <p>
                meteo:{" "}
                {meteoCity.weather?.length > 0 &&
                  meteoCity.weather[0].description}
              </p>
            </div>
          </Container>
        </Link>
      )}
    </>
  );
};
export default MyCityCard;
