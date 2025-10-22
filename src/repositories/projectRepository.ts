import Project from "../models/Project.js";

export const projectRepository = {
    async create( title: string, description: string, createdBy?: string ){return await Project.create({title, description, createdBy}) },
    async findById(id: string){ return await Project.findById(id) },
    async findByName(name: string){return await Project.findOne({title: name})},
    async getAll(){
        return await Project.find().populate("createdBy", "name")
    },
}