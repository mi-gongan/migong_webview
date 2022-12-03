import { useRouter } from "next/router";
import React, { useCallback, useEffect } from "react";
import { checkUser } from "../../src/service/user";
import { useRecoilState, useSetRecoilState } from "recoil";
import { userAtom } from "../../src/store/user";
import { useCookies } from "react-cookie";
import { db } from "../../src/config/firebase";

function Login() {
  const router = useRouter();
  const { ...validate } = router.query;
  const setEmail = useSetRecoilState(userAtom);

  const validateUser = useCallback(
    async (_email: string, _nonce: string) => {
      if (await checkUser(_email, _nonce)) {
        setEmail(_email);
        router.push("/mypage");
      } else {
        router.push("/");
      }
    },
    [router, setEmail]
  );

  useEffect(() => {
    if (validate.validate && validate.validate[0] && validate.validate[1]) {
      validateUser(validate.validate[0], validate.validate[1]);
    }
  }, [validate, validateUser]);

  return <div>login</div>;
}

export default Login;
