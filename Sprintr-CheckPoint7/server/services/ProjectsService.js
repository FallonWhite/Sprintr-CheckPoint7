import { dbContext } from '../db/DbContext'

class ProjectsService {
  async getAllProjects() {
    const project = await dbContext.getAllProjects()
    if (!project) {
      throw new BadRequest('Invalid project')
    }
    return project
  }

  async getProjectById() {
    const project = await dbContext.getProjectById()
    if (!project) {
      throw new BadRequest('Invalid project')
    }
    return project
  }
  }

  async createProject(body) {
    return await dbContext.createProject(body)

  }


