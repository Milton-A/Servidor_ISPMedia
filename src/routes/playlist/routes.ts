import { Router } from "express";

import PlaylistController from "../../controllers/PlaylistController";

const router = Router();
router.get("/", PlaylistController.list);
router.post("/create", PlaylistController.create);
router.put("/update/:id", PlaylistController.update);
router.get("/getGroup/:id", PlaylistController.findById);
router.delete("/delete/:id", PlaylistController.delete);

export default router;
