import { projectsService } from '../services/ProjectsService'
import BaseController from '../utils/BaseController'
// @ts-ignore
import { Auth0Provider } from '@bcwdev/auth0provider'
import { sprintsService } from '../services/SprintsService'
import { backlogsService } from '../services/BacklogsService'
import { BadRequest } from '../utils/Errors'

export class ProjectsController extends BaseController {
  constructor() {
    super('api/projects')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAllProjects)
      .get('/:id', this.getSingleProject)
      .get('/:id/sprints', this.getSprintsByProjectId)
      .get('/:id/backlogs', this.getBacklogsByProjectId)
      .post('', this.createProject)
      .put('/:id', this.updateProject)
      .delete('/:id', this.destroyProject)
  }

  async getAllProjects(req, res, next) {
    try {
      const projects = await projectsService.getAllProjects({ creatorId: req.userInfo.id })// do I need to put anything in paranthises?
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

  async getSprintsByProjectId(req, res, next) {
    try {
      const sprints = await sprintsService.getSprintsByProjectId(req.params.id)
      if (!sprints) {
        throw new BadRequest('No sprint available')
      }
      res.send(sprints)
    } catch (error) {
      next(error)
    }
  }

  async getBacklogsByProjectId(req, res, next) {
    try {
      const backlogs = await backlogsService.getBacklogsByProjectId(req.params.id)
      if (!backlogs) {
        throw new BadRequest('No backlogs available')
      }
      res.send(backlogs)
    } catch (error) {
      next(error)
    }
  }

  async createProject(req, res, next) {
    try {
      // what dose below relation defines?
      req.body.creatorId = req.userInfo.id
      const project = await projectsService.createProject(req.body) // why req.body?
      res.send(project)
    } catch (error) {
      next(error)
    }
  }

  async updateProject(req, res, next) {
    try {
      req.body.id = req.params.id
      req.body.creatorId = req.userInfo.id
      const project = await projectsService.updateProject(req.body)
      res.send(project)
    } catch (error) {
      next(error)
    }
  }

  async destroyProject(req, res, next) {
    try {
      await projectsService.destroyProject(req.params.id, req.userInfo.id)
      res.send({ message: 'Successfully Deleted' })
    } catch (error) {
      next(error)
    }
  }
}
