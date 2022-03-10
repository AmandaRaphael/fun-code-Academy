import { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../images/FCA.png";
import styles from "./NavBar.module.css";
import { Navbar, Nav, NavItem, Container } from "react-bootstrap";
const NavigationBar = () => {
  return (
    <div className={styles.navContainer}>
      <Navbar
        collapseOnSelect
        expand="lg"
        sticky="top"
        className="d-flex flex-column flex-md-row align-items-center justify-content-center
        p-4 px-md-4 mb-4   border-bottom shadow-sm nav"
      >
        <Container id={styles.navContainer} >
          <h5 className="my-0 mr-md-auto ">
            {" "}
            <NavLink
              className={(navData) =>
                navData.isActive ? styles.selected : styles.unselected
              }
              to={"/"}
            >
              <img src={logo} width="70px" alt="logo" />
            </NavLink>
          </h5>
          <h3 className={styles.title}>
            <NavLink to={"/"}>Fun-code Academy</NavLink>
          </h3>
        </Container>

        <Navbar expand="lg" collapseOnSelect sticky="top">
          {" "}
          <Container>
            {" "}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              {" "}
              <Nav className="me-auto">
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
                  to={"/courses"}
                >
                  Courses
                </NavLink>
                <NavLink
                  className={(navData) =>
                    navData.isActive ? styles.selected : styles.unselected
                  }
                  to={"/MyClass"}
                >
                  MyClass
                </NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
