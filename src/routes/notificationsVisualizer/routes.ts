import { Router } from "express";

import NotificacaoVisualizacaoController from "../../controllers/NotificacaoVisualizacaoController";

const router = Router();
router.get("/", NotificacaoVisualizacaoController.list);
router.post("/create", NotificacaoVisualizacaoController.create);
router.put("/update/:id", NotificacaoVisualizacaoController.update);
router.get("/getGroup/:id", NotificacaoVisualizacaoController.findById);
router.delete("/delete/:id", NotificacaoVisualizacaoController.delete);

export default router;
