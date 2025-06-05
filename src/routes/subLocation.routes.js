import { Router } from "express";
import {
  createSubLocation,
  updateSubLocation,
  getAllSubLocations,
  deleteSubLocation,
} from "../controllers/subLocation.controller.js";

const router = Router();

router.post("/", createSubLocation);
router.get("/", getAllSubLocations);
router.patch("/:id", updateSubLocation);
router.delete("/:id", deleteSubLocation);

export default router;
