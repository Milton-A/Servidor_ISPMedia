import { Router } from "express";

import TipoMediaController from "../../controllers/TipoMediaController";

const router = Router();
router.get("/", TipoMediaController.list);
router.post("/create", TipoMediaController.create);
router.put("/update/:id", TipoMediaController.update);
router.get("/getGroup/:id", TipoMediaController.findById);
router.delete("/delete/:id", TipoMediaController.delete);

export default router;
