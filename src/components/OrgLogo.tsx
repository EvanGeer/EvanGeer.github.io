import DeWalt_Logo from "../images/orgs/dewalt.jpeg"
import MITx_Logo from "../images/orgs/mitx-pro-logo.png"
// import BC_Logo from "../images/brown-and-caldwell-logo.webp"
import BC_Logo from "../images/orgs/Brown-and-Caldwell.jpg"
import SBD_Logo from "../images/orgs/sbd_logo_square.png";
import Kc_Logo from "../images/orgs/kitconnect.png";
import MSuite_Logo from "../images/orgs/msuite.png";
import Org from "../types/Org";
import { HeadShot } from "./HeadShot";

export function OrgLogo({org, className=""}: {org: string, className?: string}) {
  const OrgLogos = new Map<string, JSX.Element>([
    [Org.BC, <LogoImg src={BC_Logo} />],
    [Org.MIT_MERN, <LogoImg src={MITx_Logo}/>],
    [Org.PERSONAL, <div className="d-flex align-items-center"><HeadShot size={30} />{" "}Personal</div>],
    [Org.MSUITE, <ComboLogoImg />],
    [Org.KitConnect, <LogoImg src={Kc_Logo}/>],
    [Org.DEWALT, <LogoImg src={DeWalt_Logo}/>],
  ])

    function LogoImg({src}: {src:string}) {
      return <img
      src={src}
      className={className}
      style={{ height: "50px" }}
    />              
    }

    function ComboLogoImg() {
      return( 
        <>

                <img
          src={MSuite_Logo}
          className={className}
          style={{ height: "50px", paddingRight:"4px", borderRight: "darkgray 1px solid" }}
          />{" "}
          {/* <img
          src={DeWalt_Logo}
          style={{ height: "30px" }}
          // className="rounded float-right"
        />           */}
        <img
          src={SBD_Logo}
          className={className}
          style={{ height: "50px"}}
          />
          
        </>     );
      
    }

    return (
      OrgLogos.get(org)
    );


}