import express from "express";
import {
  getAllUsers,
  addUser,
  getOneUser,
  deleteUser,
  updateUser,
} from "../controllers/userControllers.js";

const router = express.Router();

router.route("/").get(getAllUsers).post(addUser);
router.route("/:id").get(getOneUser).delete(deleteUser).patch(updateUser);

export default router;
