import axios from "axios";
import { NextRequest, NextResponse } from "next/server";
import bodyParser from "body-parser";
import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false, // bodyParser를 false로 설정하여 Next.js에서 기본 파싱을 막음
  },
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  bodyParser.raw({ type: "multipart/form-data" })(req, res, async () => {
    const { formData } = await req.body;
    // 이미지 처리 로직 수행
    // 파일 데이터를 원하는대로 처리하거나 저장할 수 있습니다.
    console.log(formData);
    console.log(formData.image);
    const res = await axios.post(
      "https://naveropenapi.apigw.ntruss.com/vision/v1/celebrity",
      {
        image: formData.image,
      },
      {
        headers: {
          "Content-Type": "multipart/form-data",
          "X-NCP-APIGW-API-KEY-ID": "4rwomemtkm",
          "X-NCP-APIGW-API-KEY": "3RJjYhHMdYafwkWK9osO94AFug5YotSgbeRCJUmp",
        },
      }
    );
    console.log(res);

    // 결과 반환
  });
  return res.status(200).json({ message: "이미지 분석 성공" });
}
