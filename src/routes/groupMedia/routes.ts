import { Router } from "express";

import GrupoMediaController from "../../controllers/GrupoMediaController";

const router = Router();
router.get("/", GrupoMediaController.list);
router.post("/create", GrupoMediaController.create);
router.put("/update/:id", GrupoMediaController.update);
router.get("/getGroup/:id", GrupoMediaController.findById);
router.delete("/delete/:id", GrupoMediaController.delete);
router.get("/getMidiaById/:id", GrupoMediaController.getMidiaById);

export default router;
