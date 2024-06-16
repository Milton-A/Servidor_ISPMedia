import { Router } from "express";

import GrupoUsuarioController from "../../controllers/GrupoUsuarioController";

const router = Router();
router.get("/", GrupoUsuarioController.list);
router.post("/create", GrupoUsuarioController.create);
router.put("/update/:id", GrupoUsuarioController.update);
router.get("/getGroup/:id", GrupoUsuarioController.findById);
router.delete("/delete/:id", GrupoUsuarioController.delete);

export default router;
