import express from "express";
import {
  createGroup,
  deleteGroup,
  getAllGroups,
  getGroupById,
  updateGroup,
} from "../../controllers/groupController";

const routes = express.Router();

routes.post("/create", createGroup);
routes.put("/update/:id", updateGroup);
routes.get("/", getAllGroups);
routes.get("/getGroup/:id", getGroupById);
routes.delete("/delete/:id", deleteGroup);

export default routes;
