import express from "express";
const router = express.Router();

import projectController from "../controllers/projectController.js";



router.post("/project", projectController);



export default router;



