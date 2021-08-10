import BaseController from '../utils/BaseController'
// @ts-ignore
import { Auth0Provider } from '@bcwdev/auth0provider'
import { sprintsService } from '../services/SprintsService'

export class SprintsController extends BaseController {
  constructor() {
    super('api/backlogs')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getAll)
      .get('/:id', this.getById)
      .post('', this.create)
      .put('/:id', this.update)
      .delete('/:id', this.destroy)
  }

  async getAll(req, res, next) {
    try {
      const sprints = await sprintsService.getAll({ creatorid: req.userInfo.id })// do I need to put anything in paranthises?
      res.send(sprints)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      // clearification on req.params.id, req.id?
      const sprint = await sprintsService.getById(req.params.id) // what should we place inside of paranthises?
      res.send(sprint)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      // what dose below relation defines?
      req.body.creatorId = req.params.id
      const sprint = await sprintsService.create(req.body) // why req.body?
      res.send(sprint)
    } catch (error) {
      next(error)
    }
  }

  async update(req, res, next) {
    try {
      req.body.id = req.params.id
      const sprint = await sprintsService.update(req.body)
      res.send(sprint)
    } catch (error) {
      next(error)
    }
  }

  async destroy(req, res, next) {
    try {
      await sprintsService.destroy(req.params.id)
      res.send({ message: 'You deleted' })
    } catch (error) {
      next(error)
    }
  }
}