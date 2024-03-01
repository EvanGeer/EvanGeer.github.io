import { useState } from "react";
import eg from "../images/EG.png";

export function MainContainer({
  children,
}: {
  children: string | JSX.Element | JSX.Element[];
}) {
  return (
    <div className="d-none d-md-flex justify-items-start border border-dark border-0 mt-5 rounded-5 overflow-hidden shadow row">
      <div className="col m-0 p-0 col-5 d-flex align-items-top">
        <img
          src={eg}
          height={"100%"}
          width={"100%"}
          style={{
            objectFit: "cover",
          }}
          className="m-auto p-0 align-self-top"
        />
      </div>
      <div className="col col-7 bg-black">{children}</div>
    </div>
  );
}

export function MainContainerRight({
  children,
  image,
}: {
  children: string | JSX.Element | JSX.Element[];
  image?: JSX.Element;
}) {
  return (
    <div className="d-none d-md-flex justify-items-start border border-dark border-0 mt-5 rounded-5 overflow-hidden shadow row">
      {" "}
      <div className="col col-7 bg-black">{children}</div>
      <div className="col m-0 p-0 col-5">
        {image ? (
          image
        ) : (
          <img
            src={eg}
            height={"100%"}
            width={"100%"}
            style={{ objectFit: "cover" }}
            className="me-auto ms-auto"
          />
        )}
      </div>
    </div>
  );
}
