import { Link } from "react-router-dom";
import Styles from "./HomePage.module.css";
import { Carousel, Button } from "react-bootstrap";

import woman from "../../images/woman.jpg";
import men from "../../images/men.jpg";


import Courses from "./Courses.jsx";
import { useNavigate } from "react-router-dom";
import {useContext} from "react"

import MyContext from "../../context/MyContext";
const HomePage = () => {
  const{ images}=useContext(MyContext)
  const navigate = useNavigate();
  const buttonHandle = () => {
    navigate("/courses");
  };
  return (
    <div>
      {" "}
      <div className={Styles.home}>
        <div className={Styles.overlay}>
          <h1>Learn a computer language.Open your world of opportunities!</h1>
          <h3>
            And If you want to have fun learning it,{" "}
            <Link to="/contact">Contact us,</Link> now!
          </h3>
          <ul>
            {" "}
            <li>Online coding classes at your own pace.</li>
            <li>Courses in English and German.</li>
          </ul>

          <h3>Bootcamp in German available!</h3>
          <Button variant="outline-primary" onClick={buttonHandle}>
            Explore our Courses
          </Button>
        </div>
        <div className={Styles.carousel}>
          {" "}
          <Carousel fade>
            {images.map((img, i) => {
              return (
                <Carousel.Item key={i}>
                  <img
                    className="d-block w-70 carImg"
                    src={img.image}
                    alt="First slide"
                    height="700px"
                  />
                  <Carousel.Caption>
                    <div className={Styles.overlayCarousel}>
                      {" "}
                      <h3>{img.course}</h3>
                      <p>{img.description}</p>
                    </div>
                  </Carousel.Caption>
                </Carousel.Item>
              );
            })}
          </Carousel>
        </div>
      </div>
      <Courses  />
    </div>
  );
};

export default HomePage;
