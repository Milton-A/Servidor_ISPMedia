import { Router } from "express";
import multer from "multer";
import MidiaController from "../../controllers/MidiaController";

const router = Router();

const midiaStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "public/uploads/midia"); // Diretório onde os arquivos de legenda serão salvos
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname);
  },
});
const uploadMidia = multer({ storage: midiaStorage });

router.get("/", MidiaController.list);
router.post("/create", uploadMidia.single("midia"), MidiaController.create);
router.put("/update/:id", MidiaController.update);
router.get("/getGroup/:id", MidiaController.findById);
router.get("/video", MidiaController.stream);
router.delete("/delete/:id", MidiaController.delete);

export default router;
