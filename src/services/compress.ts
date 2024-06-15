import ffmpeg from "fluent-ffmpeg";

const compressVideo = (file: any) => {
  ffmpeg(file)
    .videoCodec("libx264")
    .audioCodec("aac")
    .outputOptions("-crf 28")
    .output("output.mp4")
    .on("end", () => {
      console.log("Compressão de vídeo concluída!");
    })
    .run();
};
