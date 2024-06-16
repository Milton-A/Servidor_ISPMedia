import { Router } from "express";

import NotificacaoController from "../../controllers/NotificacaoController";

const router = Router();
router.get("/", NotificacaoController.list);
router.post("/create", NotificacaoController.create);
router.put("/update/:id", NotificacaoController.update);
router.get("/getGroup/:id", NotificacaoController.findById);
router.delete("/delete/:id", NotificacaoController.delete);

export default router;
