// /pages/api/analyze.ts

import { NextApiRequest, NextApiResponse } from "next";
import * as faceapi from "face-api.js";
import canvas from "canvas";
import path from "path";
import Jimp from "jimp";

// 모델이 로드되었는지 확인하는 플래그 변수
let isModelsLoaded = false;

// 모델 로드 함수
async function loadModels() {
  if (!isModelsLoaded) {
    const modelsPath = path.join(process.cwd(), "/public/models"); // models 폴더 경로 설정
    await faceapi.nets.tinyFaceDetector.loadFromDisk(modelsPath);
    await faceapi.nets.faceLandmark68Net.loadFromDisk(modelsPath);
    await faceapi.nets.faceRecognitionNet.loadFromDisk(modelsPath);
    await faceapi.nets.faceExpressionNet.loadFromDisk(modelsPath);
    isModelsLoaded = true;
  }
}
// @ts-ignore
faceapi.env.monkeyPatch({ canvas });

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { image } = req.body;

    // 이미지 형식 변환
    const imageBuffer = Buffer.from(image, "base64");
    const imageJimp = await Jimp.read(imageBuffer);
    const imageBufferJpeg = await imageJimp.getBufferAsync(Jimp.MIME_JPEG);

    // 모델 로드
    await loadModels();

    // Face-API.js로 얼굴형 분석

    const imageCanvas = await canvas.loadImage(imageBufferJpeg);
    console.log("imageCanvas", imageCanvas);
    const detections = await faceapi
      // @ts-ignore
      .detectAllFaces(imageCanvas, new faceapi.TinyFaceDetectorOptions())
      .withFaceLandmarks()
      .withFaceDescriptors()
      .withFaceExpressions();

    // 결과 출력
    console.log(detections);

    res.status(200).json({ message: "이미지 분석 성공", detections });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "서버 에러" });
  }
}
