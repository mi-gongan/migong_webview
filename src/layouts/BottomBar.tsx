import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";
import { Icon } from "@iconify/react";

function BottomBar() {
  const router = useRouter();

  return (
    <Wrap>
      <IconWrap onClick={() => router.push("/")}>
        <Icon icon="material-symbols:home-rounded" width="28" height="28" />
      </IconWrap>
      <IconWrap onClick={() => router.push("/dignosis")}>
        <Icon
          icon="material-symbols:familiar-face-and-zone-sharp"
          width="28"
          height="28"
        />
      </IconWrap>
      <IconWrap onClick={() => router.push("/video")}>
        <Icon icon="bi:youtube" width="28" height="28" />
      </IconWrap>
      <IconWrap onClick={() => router.push("/mypage")}>
        <Icon icon="material-symbols:person" width="28" height="28" />
      </IconWrap>
    </Wrap>
  );
}

export default BottomBar;

const Wrap = styled.div`
  background-color: black;
  color: white;
  height: 90px;
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 0px;
`;

const IconWrap = styled.div`
  flex: 1;
  text-align: center;
  padding: 20px;
`;
