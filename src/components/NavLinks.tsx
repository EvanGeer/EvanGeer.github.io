import Nav from "react-bootstrap/Nav";
import { NavLink } from "react-router-dom";
import {
  CodeSlash,
  House,
  Icon,
  JournalCode,
  Send,
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
