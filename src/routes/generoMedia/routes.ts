import { Router } from "express";

import GeneroMediaController from "../../controllers/GeneroMediaController";

const router = Router();
router.get("/", GeneroMediaController.list);
router.post("/create", GeneroMediaController.create);
router.put("/update/:id", GeneroMediaController.update);
router.get("/getGroup/:id", GeneroMediaController.findById);
router.delete("/delete/:id", GeneroMediaController.delete);

export default router;
