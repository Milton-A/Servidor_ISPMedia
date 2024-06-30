import ffmpegStatic from "ffmpeg-static";
import ffmpeg, { FfmpegCommand } from "fluent-ffmpeg";
import path from "path";
import { Request, Response, NextFunction } from "express";
import { promises as fs } from "fs";

// Função para comprimir o vídeo usando fluent-ffmpeg
export async function compressVideo(
  inputPath: string,
  outputPath: string
): Promise<void> {
  return new Promise((resolve, reject) => {
    ffmpeg.setFfmpegPath(ffmpegStatic as string);

    const videoCodec: string = "libx264"; // Codec de vídeo H.264
    const audioCodec: string = "aac"; // Codec de áudio AAC
    const videoBitrate: string = "300k"; // Bitrate de vídeo reduzido
    const audioBitrate: string = "96k"; // Bitrate de áudio reduzido
    const crf: number = 30; // Constant Rate Factor (CRF) para controle de qualidade (quanto menor, melhor qualidade)

    const ffmpegCommand: FfmpegCommand = ffmpeg()
      .input(inputPath)
      .videoCodec(videoCodec)
      .audioCodec(audioCodec)
      .videoBitrate(videoBitrate)
      .audioBitrate(audioBitrate)
      .addOption("-crf", crf.toString()) // Converte crf para string
      .output(outputPath);

    ffmpegCommand
      .on("end", () => {
        console.log("Conversão para MP4 completa");
        resolve();
      })
      .on("error", (err) => {
        console.error("Erro durante a conversão para MP4:", err);
        reject(err);
      })
      .run();
  });
}
