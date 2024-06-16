import { Router } from "express";

import MidiaCompositorController from "../../controllers/MidiaCompositorController";

const router = Router();
router.get("/", MidiaCompositorController.list);
router.post("/create", MidiaCompositorController.create);
router.put("/update/:id", MidiaCompositorController.update);
router.get("/getGroup/:id", MidiaCompositorController.findById);
router.delete("/delete/:id", MidiaCompositorController.delete);

export default router;
