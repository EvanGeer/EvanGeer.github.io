import DeWalt_Logo from "../images/orgs/dewalt.jpeg"
import MITx_Logo from "../images/orgs/mitx-pro-logo.png"
// import BC_Logo from "../images/brown-and-caldwell-logo.webp"
import BC_Logo from "../images/orgs/Brown-and-Caldwell.jpg"
import SBD_Logo from "../images/orgs/sbd_logo_square.png";
import MSuite_Logo from "../images/orgs/msuite.png";
import Org from "../types/Org";
import { HeadShot } from "./HeadShot";

export function OrgLogo({org, layout="justify-content-between"}: {org: string, layout?: string}) {
  const OrgLogos = new Map<string, JSX.Element>([
    [Org.BC, <LogoImg src={BC_Logo} />],
    [Org.MIT_MERN, <LogoImg src={MITx_Logo}/>],
    [Org.PERSONAL, <><HeadShot size={30} /> Personal</>],
    [Org.MSUITE, <ComboLogoImg />],
  ])

    function LogoImg({src}: {src:string}) {
      return <img
      src={src}
      style={{ height: "30px" }}
    />              
    }

    function ComboLogoImg() {
      return( 
        <>
                <img
          src={MSuite_Logo}
          style={{ height: "30px", paddingRight:"4px", borderRight: "darkgray 1px solid" }}
          />{" "}
          <img
          src={SBD_Logo}
          style={{ height: "30px"}}
          />
          
          {/* <img
          src={DeWalt_Logo}
          style={{ height: "30px" }}
          className="rounded float-right"
        /> */}
        </>     );
      
    }

    return (
      OrgLogos.get(org)
    );


}