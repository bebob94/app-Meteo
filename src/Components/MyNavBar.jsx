import { useState } from "react";
import { Button, Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function MyNavBar() {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      window.location.href = `/Detail/${search}`;
    }
  };

  return (
    <Navbar bg="*" expand="lg">
      <Container fluid>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className=" my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <img
              className="logo"
              src="data:image/jpeg;base64,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"
              alt="piove"
            />
            <Link to="/">
              {" "}
              <h1>
                Meteo Bebo <h6>Non Puo Piovere Per Sempre, Baby</h6>
              </h1>
            </Link>
          </Nav>
          <Form className="d-flex ">
            <Form.Control
              type="search"
              placeholder="Search"
              className=" mySearch"
              aria-label="Search"
              onChange={handleSearch}
              onKeyUp={handleKeyUp}
              value={search}
            />
            <Link to={`/Detail/${search}`}>
              <Button variant="outline-light">Search</Button>
            </Link>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavBar;
