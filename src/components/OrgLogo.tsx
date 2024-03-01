import DeWalt_Logo from "../images/orgs/dewalt.jpeg";
import MITx_Logo from "../images/orgs/mitx-pro-logo.png";
// import BC_Logo from "../images/brown-and-caldwell-logo.webp"
import BC_Logo from "../images/orgs/Brown-and-Caldwell.jpg";
import SBD_Logo from "../images/orgs/sbd_logo_square.png";
import Kc_Logo from "../images/orgs/kitconnect.png";
import MSuite_Logo from "../images/orgs/msuite.png";
import BIMdexter_Logo from "../images/orgs/BIMdexter.png";
import Org from "../types/Org";
import { HeadShot } from "./HeadShot";

export function OrgLogo({
  org,
  className = "",
}: {
  org: string;
  className?: string;
}) {
  const OrgLogos = new Map<string, JSX.Element>([
    [Org.BC, <LogoImg src={BC_Logo} localClass="bg-light rounded" />],
    [
      Org.MIT_MERN,
      <LogoImg src={MITx_Logo} localClass="bg-light rounded ps-3 pe-3" />,
    ],
    [
      Org.PERSONAL,
      <div className="d-flex align-items-center p-1 h4">
        <HeadShot size={40} />
        <span className="ms-2">Personal Project</span>
      </div>,
    ],
    [Org.MSUITE, <ComboLogoImg />],
    [Org.KitConnect, <LogoImg src={Kc_Logo} />],
    [Org.BIMdexter, <LogoImg src={BIMdexter_Logo} />],
    [Org.DEWALT, <LogoImg src={DeWalt_Logo} />],
  ]);

  function LogoImg({ src, localClass }: { src: string; localClass?: string }) {
    return (
      <img
        src={src}
        className={`${className} ${localClass}`}
        style={{ height: "50px" }}
      />
    );
  }

  function ComboLogoImg() {
    return (
      <>
        <img
          src={MSuite_Logo}
          className={className}
          style={{
            height: "50px",
            paddingRight: "4px",
            borderRight: "darkgray 1px solid",
          }}
        />
        <img src={SBD_Logo} className={className} style={{ height: "50px" }} />
      </>
    );
  }

  return OrgLogos.get(org);
}
