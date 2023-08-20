import React from "react";

function Footer({ year = "2023" }) {
  return <div className="mx-auto w-fit">@{year} | All right reserved.</div>;
}

export default Footer;
