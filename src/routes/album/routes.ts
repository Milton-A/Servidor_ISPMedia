import { Router } from "express";

import AlbumController from "../../controllers/AlbumController";

const router = Router();

router.get("/", AlbumController.list);
router.post("/create", AlbumController.create);
router.put("/update/:id", AlbumController.update);
router.get("/get/:id", AlbumController.findById);
router.delete("/delete/:id", AlbumController.delete);

export default router;
