import { Router } from "express";

import ArtistaController from "../../controllers/ArtistaController";

const router = Router();
router.get("/", ArtistaController.list);
router.post("/create", ArtistaController.create);
router.put("/update/:id", ArtistaController.update);
router.get("/getGroup/:id", ArtistaController.findById);
router.delete("/delete/:id", ArtistaController.delete);

export default router;
