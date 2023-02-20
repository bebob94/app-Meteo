import { useEffect, useState } from "react";
import { Col, Container, ListGroup, ListGroupItem, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import NotFound from "./NotFound";

const DetailCard = () => {
  let params = useParams();

  const [meteoCity, setMeteoCity] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMeteo = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${params.cityName}&units=imperial&appid=86cb61e3531717351bd4f33c316d31ff`
        );
        if (response.ok) {
          let data = await response.json();
          console.log(meteoCity);
          setMeteoCity(data);
          setLoading(false);
          setError(false);
        } else {
          setLoading(false);
          setError(true);
        }
      } catch (error) {
        alert(error);
      }
    };

    fetchMeteo();
  }, [params.cityName]);

  return (
    <>
      {loading && <Loading />}
      {error ? (
        <NotFound />
      ) : (
        <Container>
          <Row>
            <h3 className="mt-1">
              {meteoCity.name} <span>{meteoCity.sys?.country}</span>
            </h3>

            <Col>
              <ListGroup>
                <ListGroupItem className="details">
                  <Row className="justify-content-between">
                    <Col xs={6}>Meteo:</Col>
                    <Col xs={2}>
                      {meteoCity.weather?.length > 0 &&
                        meteoCity.weather[0].description}
                    </Col>{" "}
                  </Row>
                </ListGroupItem>
                <ListGroupItem className="details">
                  <Row className="justify-content-between">
                    <Col xs={6}>Umidità:</Col>
                    <Col xs={2}>{meteoCity.main?.humidity}%</Col>
                  </Row>
                </ListGroupItem>
                <ListGroupItem className="details">
                  <Row className="justify-content-between">
                    <Col xs={6}>Vento:</Col>
                    <Col xs={2}>{meteoCity.wind?.speed}km/h</Col>{" "}
                  </Row>
                </ListGroupItem>
                <ListGroupItem className="details">
                  <Row className="justify-content-between">
                    <Col xs={6}>Pressione:</Col>
                    <Col xs={2}>{meteoCity.main?.pressure}hPa</Col>{" "}
                  </Row>
                </ListGroupItem>
                <ListGroupItem className="details">
                  <Row className="justify-content-between">
                    <Col xs={6}>Temperatura:</Col>
                    <Col xs={2}>
                      {" "}
                      {(((meteoCity.main?.temp - 32) * 5) / 9).toFixed()}°C
                    </Col>{" "}
                  </Row>
                </ListGroupItem>
                <ListGroupItem className="details">
                  <Row className="justify-content-between">
                    <Col xs={6}>Temperatura minima:</Col>
                    <Col xs={2}>
                      {(((meteoCity.main?.temp_min - 32) * 5) / 9).toFixed()}°C
                    </Col>{" "}
                  </Row>
                </ListGroupItem>
                <ListGroupItem className="details">
                  <Row className="justify-content-between">
                    <Col xs={6}>Temperatura massima:</Col>
                    <Col xs={2}>
                      {(((meteoCity.main?.temp_max - 32) * 5) / 9).toFixed()}°C
                    </Col>{" "}
                  </Row>
                </ListGroupItem>
              </ListGroup>
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
};

export default DetailCard;
