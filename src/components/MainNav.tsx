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
import { NavLinks } from "./NavLinks";

export function MainNav() {
  const Social = ({ Icon: Icon, linkUrl }: { Icon: Icon; linkUrl: string }) => {
    return (
      // <div id={linkUrl}
      //   className="d-flex p-0 m-0 justify-content-center align-items-center bg-dark rounded-circle text-light"
      //   style={{ width: 36, height: 36 }}
      // >
      <a href={linkUrl} target="newPage">
        <Icon size={24} className="d-flex text-dark ms-3 link-secondary" />
      </a>
      // </div>
    );
  };

  const socials = [
    <Social Icon={Linkedin} linkUrl="https://www.linkedin.com/in/evangeer/" />,
    <Social Icon={Github} linkUrl="https://github.com/EvanGeer" />,
    <Social
      Icon={StackOverflow}
      linkUrl="https://stackoverflow.com/users/15534202/egeer"
    />,
  ];

  const SocialLinks = () => {
    return <div className="d-flex pe-4 align-items-center">{socials}</div>;
  };

  return (
    <>
      <div className="ps-4 d-flex align-items-center">
        <HeadShot size={45} className="rounded-circle me-2" />
        <span className="text-white h3 p-0 m-0 pe-4 d-none d-md-block">
          Evan Geer
        </span>
        <span className="text-white h4 p-0 m-0 pe-2 d-xs-block d-md-none">
          Evan Geer
        </span>
        {/* <span className="text-white h5 p-0 m-0 pe-2 d-xs-block d-sm-none">Evan Geer</span> */}
        <div className="d-none d-sm-inline">
          <NavLinks className={""} />
        </div>
      </div>

      <div className="">
        <SocialLinks />
      </div>
    </>
  );
}

export default MainNav;

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
