import { Router } from "express";

import {
  createGroup,
  updateGroup,
  getAllGroups,
  getGroupById,
  deleteGroup,
} from "../controllers/groupController";

const router = Router();

router.get("/", getAllGroups);
router.post("/createGroup", createGroup);
router.get("/getGroupById/:id", getGroupById);
router.put("/updateGrooup/:id", updateGroup);
router.delete("/deletGroup/:id", deleteGroup);

export default router;
