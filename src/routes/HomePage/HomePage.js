import { Link } from "react-router-dom";
import Styles from "./HomePage.module.css";
import { Carousel } from "react-bootstrap";
import kid from "../../images/kid.jpg";
import man from "../../images/man.webp";
import woman from "../../images/woman.jpg";
import men from "../../images/men.jpg";
import lady from "../../images/lady.jpg";

const HomePage = () => {
  const images = [
    {
      image: men,
      description: "Courses in flexible timings",
      course: "course-2:Part-Time(working people)",
    },
    {
      image: lady,
      description: "Free workshops and resume preparation.",
      course: "course-3:Full-Time(job Seekers)",
    },
    {
      image: kid,
      description: "specially trained teachers for kids",
      course: "course-1:Kids-Fun-coding",
    },
  ];
  return (
    <div className={Styles.home}>
      

      <Carousel fade>
        {images.map((img, i) => {
          return (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={img.image}
                alt="First slide"
                height="800px"
              />
              <Carousel.Caption>
                <h3>{img.course}</h3>
                <p>{img.description}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
      <div className={Styles.overlay}>
        <h1>Learn a computer language and open your world of opportunities!</h1>
        <h3>
          And If you want to have fun learning it,{" "}
          <Link to="/contact">Contact us,</Link> now!
        </h3>
        <p>We do online coding classes at your pace in flexible timings.</p>
      </div>
    </div>
  );
};

export default HomePage;
