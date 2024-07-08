let ffmpegStatic = require("ffmpeg-static");
const ffmpeg = require("fluent-ffmpeg");

ffmpeg.setFfmpegPath(ffmpegStatic);
let inputPath = "test.mp4";
const value = inputPath.split(".")[0];
const outputPath = `public/output_dash/${value}.mp4`;

// Opções para reduzir o tamanho do arquivo MP4
const videoCodec = "libx264"; // Codec de vídeo H.264
const audioCodec = "aac"; // Codec de áudio AAC
const videoBitrate = "300k"; // Bitrate de vídeo reduzido
const audioBitrate = "96k"; // Bitrate de áudio reduzido
const crf = 30; // Constant Rate Factor (CRF) para controle de qualidade (quanto menor, melhor qualidade)
const compress = (location: string) => {
  ffmpeg()
    .input(location)
    .videoCodec(videoCodec)
    .audioCodec(audioCodec)
    .videoBitrate(videoBitrate)
    .audioBitrate(audioBitrate)
    .addOption("-crf", crf)
    .output(outputPath)
    .on("end", () => {
      console.log("Conversão para MP4 completa");
    })
    .on("error", (err: any) => {
      console.error("Erro durante a conversão para MP4:", err);
    })
    .run();
  console.log("compress, it's running");
};
