import { useNavigate } from "react-router-dom";
import { Card, Button } from "react-bootstrap";
import woman from "../../images/woman.jpg";
import girl from "../../images/girl.jpg";
import man from "../../images/man.jpg";
import Styles from "./HomePage.module.css";
import kidmom from "../../images/kidmom.jpg";
import kid from "../../images/kid.jpg";
import lady from "../../images/lady.jpg";
const Courses = () => {
  const pics = [girl, woman, man];
  const images = [
    {
      image: kid,
      description: "specially trained teachers for kids",
      course: "course - 1 : Kids-Fun-coding",
    },
    {
      image: kidmom,
      description: "Courses in flexible timings",
      course: "course - 2 : Part-Time(working people)",
    },
    {
      image: lady,
      description: "Free workshops and resume preparation.",
      course: "course - 3 : Full-Time(job Seekers)",
    },
  ];
  const navigate = useNavigate();
  const buttonHandle = () => {
    navigate("/courses/apply");
  };
  return (
    <div className={Styles.card}>
      {images.map((img, i) => {
        return (
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={pics[i]} className={Styles.cardImg} />
            <Card.Body>
              <Card.Title className={Styles.height}>{img.course}</Card.Title>
              <Card.Text className={Styles.height}>{img.description}</Card.Text>
              <Button variant="info" onClick={buttonHandle}>
                Apply Now
              </Button>
            </Card.Body>{" "}
          </Card>
        );
      })}
    </div>
  );
};

export default Courses;
