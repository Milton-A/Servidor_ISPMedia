import { Router } from "express";

import EditoraController from "../../controllers/EditoraController";

const router = Router();
router.get("/", EditoraController.list);
router.post("/create", EditoraController.create);
router.put("/update/:id", EditoraController.update);
router.get("/getGroup/:id", EditoraController.findById);
router.delete("/delete/:id", EditoraController.delete);

export default router;
