import { dbContext } from '../db/DbContext'
import {BadRequest} from '../utils/Errors'

class ProjectsService {
  async  getAllProjects(query={}) {
    return await dbContext.Projects.find(query)
  }
  async getSingleProject(id) {
    const project = await dbContext.Projects.findById(id) // do I need to pass id inside paranthesis?
    if (!project) {
      throw new BadRequest('invalid request')
    }
    return project
  }
  async createProject(body) {
    return await dbContext.Projects.create(body)
  }
  async updateProject(body) {
    await this.getSingleProject() // what do I need to pass in () ? why?
    const project = await dbContext.Projects.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    // I would like to have a clearification about (body.id, body, { new: true, runValidators: true })
    return project
  }
 async destroyProject(body) {
  await this.getSingleProject() //?
  return await dbContext.Projects.findByIdAndDelete()// ?
  }
}
export const projectsService= new ProjectsService()