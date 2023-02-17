import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";

const DetailCard = () => {
  let params = useParams();

  const [meteoCity, setMeteoCity] = useState({});

  useEffect(() => {
    const fetchMeteo = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${params.cityName}&units=imperial&appid=86cb61e3531717351bd4f33c316d31ff`
        );
        if (response.ok) {
          let data = await response.json();
          setMeteoCity(data);
        } else {
          alert("error");
        }
      } catch (error) {
        alert(error);
      }
    };

    fetchMeteo();
  }, [params.cityName]);

  return (
    <Container>
      <Row>
        <h3>
          {meteoCity.name} <span>{meteoCity.sys?.country}</span>
        </h3>

        <Col>
          {" "}
          <p>
            {meteoCity.weather?.length > 0 && meteoCity.weather[0].description}
          </p>
          <p>{meteoCity.main?.humidity} %</p>
          <p>{meteoCity.main?.pressure} hPa</p>
          <p style={{ transform: `rotate(${meteoCity.wind?.deg}deg)` }}> ⬆ </p>
        </Col>
        <Col>
          <p>{meteoCity.wind?.speed} km/h</p>
          <p>{meteoCity.main?.pressure} hPa</p>
          <p>{(((meteoCity.main?.temp - 32) * 5) / 9).toFixed()}° C</p>
        </Col>
      </Row>
    </Container>
  );
};

export default DetailCard;
