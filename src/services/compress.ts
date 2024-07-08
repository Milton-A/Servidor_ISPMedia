import ffmpegStatic from "ffmpeg-static";
import ffmpeg, { FfmpegCommand } from "fluent-ffmpeg";

// Verifica se ffmpegStatic não é null antes de usá-lo
if (!ffmpegStatic) {
  throw new Error(
    "ffmpeg-static não encontrado. Verifique se está instalado corretamente."
  );
}

ffmpeg.setFfmpegPath(ffmpegStatic as string);

const inputPath: string = "test.mp4";

// Opções para reduzir o tamanho do arquivo MP4
const videoCodec: string = "libx264"; // Codec de vídeo H.264
const audioCodec: string = "aac"; // Codec de áudio AAC
const videoBitrate: string = "300k"; // Bitrate de vídeo reduzido
const audioBitrate: string = "96k"; // Bitrate de áudio reduzido
const crf: number = 30; // Constant Rate Factor (CRF) para controle de qualidade (quanto menor, melhor qualidade)

export const comrpessMidia = async (file: string): Promise<string> => {
  const value = Date.now() + "-" + Math.round(Math.random() * 1e9);
  console.log(file);
  const outputPath: string = `public/output_dash/${value}.mp4`;
  const ffmpegCommand: FfmpegCommand = ffmpeg()
    .input(file)
    .videoCodec(videoCodec)
    .audioCodec(audioCodec)
    .videoBitrate(videoBitrate)
    .audioBitrate(audioBitrate)
    .addOption("-crf", crf.toString())
    .output(outputPath);

  const response = await ffmpegCommand
    .on("end", () => {
      console.log("Conversão para MP4 completa");
      return outputPath;
    })
    .on("error", (err: any) => {
      console.error("Erro durante a conversão para MP4:", err);
      return file;
    })
    .run();

  console.log("Compress it's running!");
  return outputPath;
};
