import { Router } from "express";

import UserController from "../../controllers/UserController";

const router = Router();
router.get("/", UserController.list);
router.post("/create", UserController.create);
router.put("/update/:id", UserController.update);
router.get("/getGroup/:id", UserController.findById);
router.delete("/delete/:id", UserController.delete);

export default router;
