import { projectsService } from '../services/ProjectsService'
import BaseController from '../utils/BaseController'

export class ProjectsController extends BaseController {
  constructor() {
    super(project)
    this.router

      .get('', this.getAllProjects)
      .get('/:id', this.getProjectById)
      .post('', this.createProject)
  }

  async getAllProjects(req, res, next) {
    try {
      const res = await projectsService.getAllProjects()
      res.send(project)
    } catch (error) {
      next(error)
    }
  }

  async getProjectById(req, res, next) {
    try {
      const res = await projectsService.getProjectById()
      res.send(project)
    } catch (error) {
      next(error)
    }
  }

  async createProject(req, res, next) {
    try {
      const res = await projectsService.createProject()
      res.send(project)
    } catch (error) {
      next(error)
    }
  }
}
