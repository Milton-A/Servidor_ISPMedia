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
const outputPath: string = "public/output_dash/output_compressed.mp4";

// Opções para reduzir o tamanho do arquivo MP4
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
  .addOption("-crf", crf.toString())
  .output(outputPath);

ffmpegCommand
  .on("end", () => {
    console.log("Conversão para MP4 completa");
  })
  .on("error", (err) => {
    console.error("Erro durante a conversão para MP4:", err);
  })
  .run();
