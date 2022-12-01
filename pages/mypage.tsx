import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { userAtom } from "../src/store/user";
import { useRecoilState, useRecoilValue } from "recoil";
import { logoutUser } from "../src/service/user";

function Mypage() {
  const [email, setEmail] = useRecoilState(userAtom);

  const handleLogout = async () => {
    setEmail("");
    await logoutUser(email);
  };
  return (
    <div>
      <div>{email}</div>
      <div onClick={handleLogout}>logout</div>
    </div>
  );
}

export default Mypage;
