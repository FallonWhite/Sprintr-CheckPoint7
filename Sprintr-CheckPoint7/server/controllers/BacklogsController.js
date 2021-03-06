import BaseController from '../utils/BaseController'
// @ts-ignore
import { Auth0Provider } from '@bcwdev/auth0provider'
import { backlogsService } from '../services/BacklogsService'
import { tasksService } from '../services/TasksService'

export class BacklogsController extends BaseController {
  constructor() {
    super('api/backlogs')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAll) // don't need this route
      .get('/:id', this.getById)
      .get('/:id/tasks', this.getTasksByBacklogId)
      // .get('/:id/tasks', this.getTasksByBacklogId)
      .post('', this.create)
      .put('/:id', this.update)
      .delete('/:id', this.destroy)
  }

  async getAll(req, res, next) {
    try {
      const backlogs = await backlogsService.getAll({ creatorid: req.userInfo.id })// do I need to put anything in paranthises?
      res.send(backlogs)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      // clearification on req.params.id, req.id?
      const backlogs = await backlogsService.getById(req.params.id) // what should we place inside of paranthises?
      res.send(backlogs)
    } catch (error) {
      next(error)
    }
  }

  async getTasksByBacklogId(req, res, next) {
    try {
      const tasks = await tasksService.getTasksByBacklogId(req.params.id)
      res.send(tasks)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      // what dose below relation defines?
      req.body.creatorId = req.userInfo.id
      const backlogs = await backlogsService.create(req.body) // why req.body?
      res.send(backlogs)
    } catch (error) {
      next(error)
    }
  }

  async update(req, res, next) {
    try {
      req.body.id = req.params.id
      const project = await backlogsService.update(req.body)
      res.send(project)
    } catch (error) {
      next(error)
    }
  }

  async destroy(req, res, next) {
    try {
      await backlogsService.destroy(req.params.id, req.userInfo.id)
      res.send({ message: 'You deleted' })
    } catch (error) {
      next(error)
    }
  }
}
