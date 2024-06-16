import { Router } from "express";

import LegendaController from "../../controllers/LegendaController";

const router = Router();
router.get("/", LegendaController.list);
router.post("/create", LegendaController.create);
router.put("/update/:id", LegendaController.update);
router.get("/getGroup/:id", LegendaController.findById);
router.delete("/delete/:id", LegendaController.delete);

export default router;
