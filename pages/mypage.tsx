import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { userAtom } from "../src/store/user";
import { useRecoilState, useRecoilValue } from "recoil";
import { logoutUser } from "../src/service/user";

function Mypage() {
  const [email, setEmail] = useRecoilState(userAtom);

  const handleLogout = async () => {
    if (window.webviewChannel) {
      window.webviewChannel.postMessage("logout");
    }
    setEmail("");
    await logoutUser(email);
  };
  return (
    <div>
      <div>mypage</div>
      <div>{email}</div>
      {email && <div onClick={handleLogout}>logout</div>}
    </div>
  );
}

export default Mypage;
