import { Router } from "express";

import MidiaController from "../../controllers/MidiaController";

const router = Router();
router.get("/", MidiaController.list);
router.post("/create", MidiaController.create);
router.put("/update/:id", MidiaController.update);
router.get("/getGroup/:id", MidiaController.findById);
router.delete("/delete/:id", MidiaController.delete);

export default router;
