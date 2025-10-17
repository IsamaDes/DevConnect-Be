import express from "express";
const router = express.Router();

import {createProject, getProjects, commentOnProject} from "../controllers/projectController.js";
import protect from "../middleware/authMiddleware.js";



router.post("/create-project", protect, createProject);
router.get("/projects", getProjects);
router.post("/:id/comment", protect, commentOnProject);




export default router;



