import { Router } from "express";

import CriticaController from "../../controllers/CriticaController";

const router = Router();
router.get("/", CriticaController.list);
router.post("/create", CriticaController.create);
router.put("/update/:id", CriticaController.update);
router.get("/getGroup/:id", CriticaController.findById);
router.get("/getMidiaById/:id", CriticaController.getCommentByIdMidia);
router.delete("/delete/:id", CriticaController.delete);

export default router;
