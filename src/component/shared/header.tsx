import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import "./header.css";

export const Header = () => {
  let isUserLoggedIn = true;

  let getContactBanner = () => {
    return (
      <div id="top_line">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 hidden-xs">
              <span id="tag_line">"Experts since 1998"</span>
            </div>
            <div className="col-sm-8">
              <ul id="top_links">
                <li>
                  <a href="tel://004542344599" id="phone_top">
                    0045 043204434
                  </a>
                  <span id="opening">Mon - Sat 8.00/18.00</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  };

  if (isUserLoggedIn) {
    return (
      <>
        <div id="header-wrapper">
          {getContactBanner()}
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Ignite Institute</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav>
                  <Nav.Link href="#features">Home</Nav.Link>
                  <NavDropdown title="Courses" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#pricing">Achievements</Nav.Link>
                  <Nav.Link href="#deets">Contact Us</Nav.Link>
                  <NavDropdown
                    title="Ruminder Singh"
                    id="collasible-nav-dropdown"
                  >
                    <NavDropdown.Item href="#action/3.1">
                      Notifications
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Your Courses
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Account Setting
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div id="header-wrapper">
          {getContactBanner()}
          <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
              <Navbar.Brand href="#home">Ignite Institute</Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav>
                  <Nav.Link href="#features">Home</Nav.Link>
                  <NavDropdown title="Courses" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Another action
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#pricing">Achievements</Nav.Link>
                  <Nav.Link href="#deets">Contact Us</Nav.Link>
                  <NavDropdown title="Account" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">
                      Login
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">
                      Register
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">
                      Something
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">
                      Separated link
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
      </>
    );
  }
};
