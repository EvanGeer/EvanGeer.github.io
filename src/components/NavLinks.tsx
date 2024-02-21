import { NavbarBrand } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink } from "react-router-dom";
import gitHubLogo from "../images/Github_black.png";
import linkInLogo from "../images/LinkedIN_black.png";
import stackOverflowLogo from "../images/stack.svg";
import mailIcon from "../images/Mail_ru_black.png";
import { LinkContainer } from "react-router-bootstrap";
import { HeadShot } from "./HeadShot";
import {
  CardHeading,
  CodeSlash,
  Github,
  House,
  Icon,
  JournalCode,
  JustifyLeft,
  Linkedin,
  Send,
  StackOverflow,
} from "react-bootstrap-icons";

const Link = ({ to, Icon, text }: { to: string; Icon: Icon; text: string }) => {
  return (
    <Nav.Link
      as={NavLink}
      to={to}
      className="text-dark d-flex align-items-center"
    >
      <Icon size={20}/> <span className="ms-2 d-none d-lg-block">{text}</span>
      {/* <Icon size={20} /> <span className="ms-2 ">{text}</span> */}
    </Nav.Link>
  );
};

const navLinks = [
  <Link to={"/"} text="Home" Icon={House} />,
  <Link to={"/codesamples"} text="Code Samples" Icon={CodeSlash} />,
  <Link to={"/projects"} text="Projects" Icon={JournalCode} />,
  <Link to={"/contact"} text="Contact" Icon={Send} />,
];

export const NavLinks = ({className}: {className?: string}) => {
  return <Nav className={`${className} pt-2`} variant="tabs" style={{ height: 50 }}>{navLinks}</Nav>;
};
