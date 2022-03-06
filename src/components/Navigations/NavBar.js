import React from "react";
import { Link,NavLink } from "react-router-dom";
import logo from "../../images/FCA.png";
import styles from "./NavBar.module.css"
const NavBar = () => {
  return (
    <div>
      <div
        className="d-flex flex-column flex-md-row align-items-center justify-content-between
        p-4 px-md-4 mb-4 bg-Transparent border-bottom shadow-sm"
      >
        <h5 className="my-0 mr-md-auto font-weight-normal"> <NavLink
            className={(navData) =>
              navData.isActive ? styles.selected : styles.unselected
            }
            to={"/"}
          >
            <img src={logo} width="70px"/>
          </NavLink></h5>
        <nav className="my-2 my-md-1 me-md-5">
          {/* <Link className="p-2 text-dark" to={"/"} >Home</Link> */}
         
          <NavLink
            className={(navData) =>
              navData.isActive ? styles.selected : styles.unselected
            }
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive ? styles.selected : styles.unselected
            }
            to={"/about"}
          >
            About
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive ? styles.selected : styles.unselected
            }
            to={"/contact"}
          >
            Contact
          </NavLink>
          <NavLink
            className={(navData) =>
              navData.isActive ? styles.selected : styles.unselected
            }
            to={"/MyClass"}
          >
            MyClass
          </NavLink>
        </nav>
      </div>
      {/* <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar> */}
    </div>
  );
};

export default NavBar;
