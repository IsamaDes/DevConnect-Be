import { Request, Response } from "express";
import Project from "../models/Project.js";
import {AuthenticatedRequest} from "../middleware/authMiddleware.js";



export const createProject = async (req: AuthenticatedRequest, res: Response) => {
  const { title, description } = req.body;
  const project = await Project.create({ title, description, createdBy: req.user?._id });
  res.status(201).json(project);
};

export const getProjects = async (_: Request, res: Response) => {
  const projects = await Project.find().populate("createdBy", "name");
  res.json(projects);
};

export const commentOnProject = async (req: AuthenticatedRequest, res: Response) => {
  const { text } = req.body;
  const project = await Project.findById(req.params.id);
  if (!project) return res.status(404).json({ message: "Project not found" });
  project.comments.push({ text, user: req.user?._id! });
  await project.save();
  res.json(project);
};
