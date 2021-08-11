import BaseController from '../utils/BaseController'
// @ts-ignore
import { Auth0Provider } from '@bcwdev/auth0provider'
import { notesService } from '../services/NotesService'

export class NotesController extends BaseController {
  constructor() {
    super('api/notes')
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
      const notes = await notesService.getAll({ creatorid: req.userInfo.id })// do I need to put anything in paranthises?
      res.send(notes)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const notes = await notesService.getById(req.params.id)
      res.send(notes)
    } catch (error) {
      next(error)
    }
  }

  async create(req, res, next) {
    try {
      req.body.creatorId = req.userInfo.id
      const notes = await notesService.create(req.body)
      res.send(notes)
    } catch (error) {
      next(error)
    }
  }

  async update(req, res, next) {
    try {
      req.body.id = req.params.id
      const notes = await notesService.update(req.body)
      res.send(notes)
    } catch (error) {
      next(error)
    }
  }

  async destroy(req, res, next) {
    try {
      await notesService.destroy(req.params.id)
      res.send({ message: 'Successfully Deleted!' })
    } catch (error) {
      next(error)
    }
  }
}
