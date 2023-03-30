import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, Container, Nav, Navbar, Col, Row } from "react-bootstrap";
import imgtransform from "./img/desktop/image-transform.jpg";
import imgstand from "./img/desktop/image-stand-out.jpg";
import imgaemily from "./img/image-emily.jpg";
import imgthomas from "./img/image-thomas.jpg";
import imgjennie from "./img/image-jennie.jpg";
import images1 from "./img/desktop/image-gallery-milkbottles.jpg";
import images2 from "./img/desktop/image-gallery-orange.jpg";
import images3 from "./img/desktop/image-gallery-cone.jpg";
import images4 from "./img/desktop/image-gallery-sugarcubes.jpg";
import AOS from "aos";
import "aos/dist/aos";

import {
  AiFillFacebook,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";

function App() {
  const MenuData = [
    {
      path: "/",
      name: "About",
      id: "about",
    },
    {
      path: "/services",
      name: "Services",
      id: "services",
    },
    {
      path: "/proects",
      name: "Projects",
      id: "projects",
    },
  ];
  AOS.init();

  return (
    <>
      <Container fluid className=" header-navbar ">
        <Navbar className="navbar" expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="#home" className="brand">
              <div className="logo">sunnyside</div>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
              <Nav className="nav ms-auto ">
                {MenuData.map((item) => (
                  <NavLink
                    href={item.id}
                    exact
                    to={item.path}
                    key={item.name}
                    activeClassName="active"
                  >
                    <div className="list-item mx-3">{item.name}</div>
                  </NavLink>
                ))}
                <button className="btn ">
                  <a href="#contact">CONTACT</a>
                </button>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <header className="header text-center">
          <Container fluid>
            <h1
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1000"
            >
              <span className="h1-span"> WE</span>
              <span className="h1-span"> ARE</span>
              <span className="h1-span"> CREATİVES</span>
            </h1>
            <span
              className="arrow"
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1750"
            >
              &#8595;
            </span>
          </Container>
        </header>
      </Container>
      {/* 1.Container */}
      <Container fluid className="tanim" id="about">
        <Row>
          <Col
            md={6}
            className="tanim-left container-1"
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="w-75">
              <h4> Transform your brand</h4>
              <p>
                We are a full-service creative agency specializing in helping
                brands grow fast. Engage your clients through compelling visuals
                that do most of the marketing for you.
              </p>
              <button className="btn ">LEARN MORE</button>
            </div>
          </Col>
          <Col
            md={6}
            className="tanim-right px-0 "
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img src={imgtransform} alt="" />
          </Col>
        </Row>
      </Container>
      {/* 2.Container */}
      <Container fluid className="tanim">
        <Row>
          <Col
            md={6}
            className="tanim-right p-0 "
            data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <img src={imgstand} alt="" />
          </Col>
          <Col
            md={6}
            className="tanim-left container-2 "
            data-aos="fade-left"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="w-75">
              <h4>Stand out to the right audience</h4>
              <p>
                Using a collaborative formula of designers, researchers,
                photographers, videographers, and copywriters, we’ll build and
                extend your brand in digital places.
              </p>
              <button className="btn btn-ice">LEARN MORE</button>
            </div>
          </Col>
        </Row>
      </Container>
      {/* 3.Container */}
      <Container fluid className="tanim">
        <Row>
          <Col
            md={6}
            className="tanim-gp graphic px-0 bg-light "
            id="services"
            data-aos="fade-top"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="w-75">
              <h4>Graphic design</h4>
              <p>
                Using a collaborative formula of designers, researchers,
                photographers, videographers, and copywriters, we’ll build and
                extend your brand in digital places.
              </p>
            </div>
          </Col>
          <Col
            md={6}
            className="tanim-gp photography px-0 bg-light"
            data-aos="fade-top"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
          >
            <div className="w-75">
              <h4>Photography</h4>
              <p>
                Increase your credibility by getting the most stunning,
                high-quality photos that improve your business image.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
      {/* ABOUT */}
      <Container fluid className="about " id="projects">
        <h4
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-offset="0"
        >
          CLİENT TESTIMONIALS
        </h4>
        <Row>
          <Col
            md={4}
            className="about-all"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="200"
            data-aos-offset="0"
          >
            <img src={imgaemily} />
            <p>
              We put our trust in Sunnyside and they delivered, making sure our
              needs were met and deadlines were always hit.
            </p>
            <h6>
              <b>Emily R.</b>
            </h6>
            <p className="job">Marketing Director</p>
          </Col>
          <Col
            md={4}
            className="about-all"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="400"
            data-aos-offset="0"
          >
            <img src={imgthomas} />
            <p>
              Sunnyside’s enthusiasm coupled with their keen interest in our
              brand’s success made it a satisfying and enjoyable experience.
            </p>
            <h6>
              <b>Thomas S.</b>
            </h6>
            <p className="job"> Chief Operating Officer</p>
          </Col>
          <Col
            md={4}
            className="about-all"
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="600"
            data-aos-offset="0"
          >
            <img src={imgjennie} />
            <p>
              Incredible end result! Our sales increased over 400% when we
              worked with Sunnyside. Highly recommended!
            </p>
            <h6>
              <b>Jennie F.</b>
            </h6>
            <p className="job"> Business Owner</p>
          </Col>
        </Row>
      </Container>
      <Container fluid className="images ">
        <Row>
          <img
            className="col-md-3 col-6 p-0"
            src={images1}
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="200"
            data-aos-offset="0"
          />
          <img
            className="col-md-3 col-6 p-0"
            src={images2}
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="300"
            data-aos-offset="0"
          />
          <img
            className="col-md-3 col-6 p-0"
            src={images3}
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="600"
            data-aos-offset="0"
          />
          <img
            className="col-md-3 col-6 p-0"
            src={images4}
            data-aos="fade-zoom-in"
            data-aos-easing="ease-in-back"
            data-aos-delay="900"
            data-aos-offset="0"
          />
        </Row>
      </Container>
      {/* FOOTER */}
      <footer>
        <Container fluid className="footer " id="contact">
          <div>
            <h2>sunnyside</h2>
            <ul className="ul-1">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
            </ul>
            <button className="btn ">Contact</button>
            <ul className="ul-2">
              <li>
                <AiFillFacebook className="ıcon" />
              </li>
              <li>
                <AiFillInstagram className="ıcon" />
              </li>
              <li>
                <AiFillTwitterCircle className="ıcon" />
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/mahmut-saba-7643b3250/"
                  target="_blank"
                >
                  <AiFillLinkedin className="ıcon" />
                </a>
              </li>
            </ul>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default App;
