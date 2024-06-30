import { Router } from "express";

import PlaylistMediaController from "../../controllers/PlaylistMediaController";

const router = Router();
router.get("/", PlaylistMediaController.list);
router.post("/create", PlaylistMediaController.create);
router.put("/update/:id", PlaylistMediaController.update);
router.get("/getGroup/:id", PlaylistMediaController.findById);
router.get("/getByUserId/:id", PlaylistMediaController.getUserById);
router.get("/getMidiaById/:id", PlaylistMediaController.getMidiaById);
router.delete("/delete/:id", PlaylistMediaController.delete);

export default router;
