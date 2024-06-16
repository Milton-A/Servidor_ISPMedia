import { Router } from "express";

import UserProfileController from "../../controllers/UserProfileController";

const router = Router();
router.get("/", UserProfileController.list);
router.post("/create", UserProfileController.create);
router.put("/update/:id", UserProfileController.update);
router.get("/getGroup/:id", UserProfileController.findById);
router.delete("/delete/:id", UserProfileController.delete);

export default router;
