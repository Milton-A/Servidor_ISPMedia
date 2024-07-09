import { Router } from "express";
import MidiaController from "../../controllers/MidiaController";
import { uploadMidia } from "../../middleware/uploadFileMidia";

const router = Router();

router.get("/", MidiaController.list);
router.post("/create", uploadMidia.single("midia"), MidiaController.create);
router.put("/update/:id", MidiaController.update);
router.get("/getGroup/:id", MidiaController.findById);
router.get("/video/:midia", MidiaController.stream);
router.delete("/delete/:id", MidiaController.delete);

export default router;
