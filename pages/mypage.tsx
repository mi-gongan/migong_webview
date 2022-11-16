import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

function Mypage() {
  const [cookie, setCookie] = useCookies<string>(["id"]);

  useEffect(() => {
    setCookie("idss", "hi");
  }, [setCookie]);

  return <div>{cookie.id}</div>;
}

export default Mypage;
