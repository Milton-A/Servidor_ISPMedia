import { Router } from "express";

import MidiaAlbumController from "../../controllers/MidiaAlbumController";

const router = Router();
router.get("/", MidiaAlbumController.list);
router.post("/create", MidiaAlbumController.create);
router.put("/update/:id", MidiaAlbumController.update);
router.get("/getGroup/:id", MidiaAlbumController.findById);
router.delete("/delete/:id", MidiaAlbumController.delete);

export default router;
