import { projectsService } from '../services/ProjectsService'
import BaseController from '../utils/BaseController'
// @ts-ignore
import { Auth0Provider } from '@bcwdev/auth0provider'

export class ProjectsController extends BaseController {
  constructor() {
    super()
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAllProjects)
      .get('/:id', this.getSingleProject)
      .post('', this.createProject)
      .put('/:id', this.updateProject)
      .delete('/:id', this.destroyProject)
  }

  async getAllProjects(req, res, next) {
    try {
      const projects = await projectsService.getAllProjects({ creatorid: req.userInfo.id })// do I need to put anything in paranthises?
      res.send(projects)
    } catch (error) {
      next(error)
    }
  }

  async getSingleProject(req, res, next) {
    try {
      // clearification on req.params.id, req.id?
      const project = await projectsService.getSingleProject(req.params.id) // what should we place inside of paranthises?
      res.send(project)
    } catch (error) {
      next(error)
    }
  }

  async createProject(req, res, next) {
    try {
      // what dose below relation defines?
      req.body.creatorId = req.params.id
      const project = await projectsService.createProject(req.body) // why req.body?
      res.send(project)
    } catch (error) {
      next(error)
    }
  }

  async updateProject(req, res, next) {
    try {
      req.body.id = req.params.id
      const project = await projectsService.updateProject(req.body)
      res.send(project)
    } catch (error) {
      next(error)
    }
  }

  async destroyProject(req, res, next) {
    try {
      await projectsService.destroyProject(req.params.id)
      res.send({ message: 'You deleted' })
    } catch (error) {
      next(error)
    }
  }
}
