import { Router, Request } from "express";
import LegendaController from "../../controllers/LegendaController";
import { uploadSubtitles } from "../../middleware/uploadLegenda";

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
