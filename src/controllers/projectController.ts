import { Request, Response } from "express";
import {AuthenticatedRequest} from "../middleware/authMiddleware.js";
import { projectRepository } from "../repositories/projectRepository.js";



export const createProject = async (req: AuthenticatedRequest, res: Response) => {
  const { title, description } = req.body;
  const createdBy = req.user?._id;
  const project = await projectRepository.create( title, description, createdBy );
  res.status(201).json(project);
};

export const getProjects = async (_: Request, res: Response) => {
  const projects = await projectRepository.getAll()
  res.json(projects);
};

export const commentOnProject = async (req: AuthenticatedRequest, res: Response) => {
  const { text } = req.body;
  const id = req.params._id
  const project = await projectRepository.findById(id);
  if (!project) return res.status(404).json({ message: "Project not found" });
  project.comments.push({ text, user: req.user?._id! });
  await project.save();
  res.json(project);
};
