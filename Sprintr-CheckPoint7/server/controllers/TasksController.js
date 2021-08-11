import BaseController from '../utils/BaseController'
// @ts-ignore
import { Auth0Provider } from '@bcwdev/auth0provider'
import { tasksService } from '../services/TasksService'

export class TasksController extends BaseController {
  constructor() {
    super('api/tasks')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.update) // update or edit? is that matter?
      .delete('/:id', this.destroy)
  }

  async getById(req, res, next) {
    try {
      const task = await tasksService.getById(req.params.id)
      res.send(task)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const task = await tasksService.create(req.body)
      res.send(task)
    } catch (error) {
      next(error)
    }
  }

  async update(req, res, next) {
    try {
      req.body.id = req.params.id
      const task = await tasksService.update(req.body)
      res.send(task)
    } catch (error) {
      next(error)
    }
  }

  async destroy(req, res, next) {
    try {
      await tasksService.destroy(req.params.id, req.userInfo.id)
      res.send({ message: 'Successfully Deleted!' })
    } catch (error) {
      next(error)
    }
  }
}
