import { Router } from "express";

import GrupoUsuarioController from "../../controllers/GrupoUsuarioController";

const router = Router();
router.get("/", GrupoUsuarioController.list);
router.post("/create", GrupoUsuarioController.create);
router.put("/update/:id", GrupoUsuarioController.update);
router.get("/getGroup/:id", GrupoUsuarioController.findById);
<<<<<<< HEAD
router.get("/getByUserId/:id", GrupoUsuarioController.getUserById);
=======
router.get("/getByUser/:id", GrupoUsuarioController.findByUserId);
>>>>>>> c57b10b5e572100441ddcc3566c2ac5d38672003
router.delete("/delete/:id", GrupoUsuarioController.delete);

export default router;
