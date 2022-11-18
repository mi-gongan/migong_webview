import React, { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { userAtom } from "../src/store/user";
import { useRecoilValue } from "recoil";

function Mypage() {
  const email = useRecoilValue(userAtom);

  return (
    <div>
      <div>{email}</div>
      <div>logout</div>
    </div>
  );
}

export default Mypage;
