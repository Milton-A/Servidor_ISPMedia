import { Router } from "express";

import PlaylistUsuarioController from "../../controllers/PlaylistUsuarioController";

const router = Router();
router.get("/", PlaylistUsuarioController.list);
router.post("/create", PlaylistUsuarioController.create);
router.put("/update/:id", PlaylistUsuarioController.update);
router.get("/getGroup/:id", PlaylistUsuarioController.findById);
router.get("/getByUserId/:id", PlaylistUsuarioController.getUserById);
router.delete("/delete/:id", PlaylistUsuarioController.delete);
router.get("/getUsersPlaylist/:id", PlaylistUsuarioController.getUsersPlaylist);

export default router;
