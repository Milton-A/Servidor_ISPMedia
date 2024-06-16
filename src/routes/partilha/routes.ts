import { Router } from "express";

import PartilhaController from "../../controllers/PartilhaController";

const router = Router();
router.get("/", PartilhaController.list);
router.post("/create", PartilhaController.create);
router.put("/update/:id", PartilhaController.update);
router.get("/getGroup/:id", PartilhaController.findById);
router.delete("/delete/:id", PartilhaController.delete);

export default router;
