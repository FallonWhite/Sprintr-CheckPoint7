import { dbContext } from '../db/DbContext'
import {BadRequest} from '../utils/Errors'

class ProjectsService {
  async  getAllProjects(query={}) {
    return await dbContext.Projects.find(query)
  }
  getSingleProject() {
    throw new Error('Method not implemented.')
  }
  createProject(body) {
    throw new Error('Method not implemented.')
  }
  updateProject(body) {
    throw new Error('Method not implemented.')
  }
  destroyProject(body) {
    throw new Error('Method not implemented.')
  }
  
  
}
export const projectsService= new ProjectsService()