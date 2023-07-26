import axios from "axios";

export function encodeImageFileAsURL(file: File) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      resolve(reader.result);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

export async function handleImageUpload(event: any) {
  const file = event.target.files[0];

  if (!file) {
    console.error("이미지를 선택해주세요.");
    return;
  }

  try {
    const reader = new FileReader();

    reader.onloadend = async () => {
      if (typeof reader.result !== "string") {
        console.error("reader.result is not string");
        return;
      }
      const imageBase64 = reader.result.split(",")[1]; // Base64 데이터 추출

      // 이미지 분석 요청을 보낼 서버 엔드포인트 URL을 설정합니다.
      const serverUrl = "/api/test";

      // 서버로 POST 요청을 보냅니다.
      const response = await fetch(serverUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ image: imageBase64 }),
      });

      // 서버 응답 데이터를 JSON 형태로 파싱합니다.
      const data = await response.json();

      // 이미지 분석 결과를 출력합니다.
      console.log(data);
    };
    reader.readAsDataURL(file); // 이미지를 Base64로 인코딩합니다.
  } catch (error) {
    console.error("서버 에러:", error);
  }
}

export async function uploadImage(event: any) {
  const file = event.target.files[0];
  if (!file) return;

  // FormData 객체 생성
  const formData = new FormData();
  formData.append("image", file); // 이미지 파일을 FormData에 추가

  try {
    const response = await axios.post("/api/test", {
      formData,
    });
    console.log(response);
  } catch (error) {
    console.error("서버 요청 오류:", error);
  }
}
