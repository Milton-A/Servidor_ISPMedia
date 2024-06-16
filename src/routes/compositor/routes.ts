import { Router } from "express";

import CompositorController from "../../controllers/CompositorController";

const router = Router();
router.get("/", CompositorController.list);
router.post("/create", CompositorController.create);
router.put("/update/:id", CompositorController.update);
router.get("/getGroup/:id", CompositorController.findById);
router.delete("/delete/:id", CompositorController.delete);

export default router;
