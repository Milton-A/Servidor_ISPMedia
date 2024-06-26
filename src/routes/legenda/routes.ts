import { Router } from "express";

import LegendaController from "../../controllers/LegendaController";
import multer from "multer";

const subtitleStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/subtitles"); // Diretório onde os arquivos de legenda serão salvos
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const uploadSubtitles = multer({ storage: subtitleStorage });

const router = Router();
router.get("/", LegendaController.list);
router.post(
  "/create",
  uploadSubtitles.single("legenda"),
  LegendaController.create
);
router.put("/update/:id", LegendaController.update);
router.get("/getGroup/:id", LegendaController.findById);
router.delete("/delete/:id", LegendaController.delete);

export default router;
