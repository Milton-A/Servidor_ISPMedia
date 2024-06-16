import { Router } from "express";

import MidiaArtistaController from "../../controllers/MidiaArtistaController";

const router = Router();
router.get("/", MidiaArtistaController.list);
router.post("/create", MidiaArtistaController.create);
router.put("/update/:id", MidiaArtistaController.update);
router.get("/getGroup/:id", MidiaArtistaController.findById);
router.delete("/delete/:id", MidiaArtistaController.delete);

export default router;
