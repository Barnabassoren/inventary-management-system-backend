import { Router } from "express";
import { createLocation, getAllLocations, updateLocation, deleteLocation } from "../controllers/location.controller.js";


const router = Router();
router.post("/", createLocation);
router.get("/", getAllLocations);
router.patch("/:id", updateLocation);
router.delete("/:id", deleteLocation);


export default router;

