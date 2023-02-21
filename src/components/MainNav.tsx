import { NavbarBrand } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import gitHubLogo from "../images/Github_black.png";
import linkInLogo from "../images/LinkedIN_black.png";
import mailIcon from "../images/Mail_ru_black.png";
import { LinkContainer } from "react-router-bootstrap";

export function BasicExample() {
  return (
    <>
      <Navbar bg="light" expand="lg" className="sticky-top mb-4">
        <Container className="">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand href="/">
            <img
              className="navbar-brand rounded p-0"
              src="https://avatars.githubusercontent.com/u/49009980?v=4"
              width="40"
              alt=""
            />
            Evan Geer
          </Navbar.Brand>
          {/* <Container className="d-flex justify-content-left"> */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto  nav-tabs">
              <LinkContainer to="/">
                <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/bio">
                <Nav.Link>Bio</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/projects">
                <Nav.Link>Projects</Nav.Link>
              </LinkContainer>
              {/* <LinkContainer to="/resume">
                <Nav.Link>Resume</Nav.Link>
              </LinkContainer>
              <LinkContainer to="/books">
                <Nav.Link>Books</Nav.Link>
              </LinkContainer> */}
            </Nav>
          </Navbar.Collapse>
          <Navbar.Text>
            <a className="footer" href="https://www.linkedin.com/in/evangeer/">
              <img width="20" className="p-0" src={linkInLogo} />
            </a>
            <span className="text-dark">&nbsp;&nbsp;|&nbsp;&nbsp;</span>
            <a className="footer" href="https://github.com/EvanGeer">
              <img width="20" className="m2" src={gitHubLogo} />
            </a>
          </Navbar.Text>
          {/* </Container> */}
        </Container>
      </Navbar>
    </>
  );
}

export default BasicExample;

export function NavEG(): any {
  return (
    <nav className="navbar flex-column flex-sm-row navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="navbar-brand flex-column  justify-content-center">
        <img
          className="navbar-brand rounded p-0 asdf"
          src="https://avatars.githubusercontent.com/u/49009980?v=4"
          width="60"
          alt=""
        />
      </div>

      <ul className="nav nav-pills col-5">
        <li className="navbar-brand">Evan Geer</li>
        <li className="nav-item">
          <a className="nav-link active" href="#">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="MITxMERN.html">
            MITx Projects
          </a>
        </li>
      </ul>

      <div className="navbar-text justify-content-end d-flex container">
        <div className="d-flex flex-row col-auto">
          <span className="navbar-text justify-content-end d-flex">
            Leader | Product Manager | Coder | Civil Engineer
          </span>
        </div>
      </div>
    </nav>
  );
}