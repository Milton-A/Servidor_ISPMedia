let ffmpegStatic = require("ffmpeg-static");
const ffmpeg = require("fluent-ffmpeg");

ffmpeg.setFfmpegPath(ffmpegStatic);
let inputPath = "test.mp4";
const outputPath = "output_dash/output.mpd";

const scaleOptions = [
  "scale=1280:720",
  "scale=640:320",
  "scale=1920:1080",
  "scale=854:480"
];
const videoCodec = "libx264";
const x2640Options = "keyint=24:min-keyint=24:no-scenecut";
const videoBitrates = ["500k", "1000k", "2000k", "4000k"];

ffmpeg()
  .input(inputPath)
  .videoFilter(scaleOptions)
  .videoCodec(videoCodec)
  .addOption("-x264opts", x2640Options)
  .outputOptions("-b:v", videoBitrates[0])
  .format("dash")
  .output(outputPath)
  .on("end", () => {
    console.log("DASH Encoding  complete");
  })
  .run();
