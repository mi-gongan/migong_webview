import { useRouter } from "next/router";
import React, { useCallback, useEffect } from "react";
import { checkUser } from "../../src/service/user";
import { useRecoilState } from "recoil";
import { userAtom } from "../../src/store/user";
import { useCookies } from "react-cookie";

function Login() {
  const router = useRouter();
  const { ...validate } = router.query;
  const [email, setEmail] = useRecoilState(userAtom);

  const validateUser = useCallback(
    async (email: string, nonce: string) => {
      if (await checkUser(email, nonce)) {
        setEmail(email);
        router.push("/mypage");
      } else {
        router.push("/");
      }
    },
    [router, setEmail]
  );

  useEffect(() => {
    console.log(validate.validate);
    if (validate.validate && validate.validate[0] && validate.validate[1]) {
      validateUser(validate.validate[0], validate.validate[1]);
    }
  }, [validate, validateUser]);

  return <div>login</div>;
}

export default Login;
