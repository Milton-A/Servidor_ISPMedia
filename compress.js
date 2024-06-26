let ffmpegStatic = require("ffmpeg-static");
const ffmpeg = require("fluent-ffmpeg");

ffmpeg.setFfmpegPath(ffmpegStatic);
let inputPath = "test.mp4";
const outputPath = "public/output_dash/output_compressed.mp4";

// Opções para reduzir o tamanho do arquivo MP4
const videoCodec = "libx264"; // Codec de vídeo H.264
const audioCodec = "aac"; // Codec de áudio AAC
const videoBitrate = "300k"; // Bitrate de vídeo reduzido
const audioBitrate = "96k"; // Bitrate de áudio reduzido
const crf = 30; // Constant Rate Factor (CRF) para controle de qualidade (quanto menor, melhor qualidade)
 
ffmpeg()
  .input(inputPath)
  .videoCodec(videoCodec)
  .audioCodec(audioCodec)
  .videoBitrate(videoBitrate)
  .audioBitrate(audioBitrate)
  .addOption("-crf", crf)
  .output(outputPath)
  .on("end", () => {
    console.log("Conversão para MP4 completa");
  })
  .on("error", (err) => {
    console.error("Erro durante a conversão para MP4:", err);
  })
  .run();
