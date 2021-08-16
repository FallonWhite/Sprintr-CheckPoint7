import BaseController from '../utils/BaseController'
// @ts-ignore
import { Auth0Provider } from '@bcwdev/auth0provider'
import { notesService } from '../services/NotesService'

export class NotesController extends BaseController {
  constructor() {
    super('api/notes')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      // .get('', this.getAll)
      .get('/:id', this.getById)
      .get('/:id/taskId/') // do we need to add getNotesByTaskId
      .get('/:id/creatorId')// and also getNoteByAccountId
      .post('', this.create)
      .put('/:id', this.update)
      .delete('/:id', this.destroyNote)
  }

  async getAll(req, res, next) {
    try {
      const notes = await notesService.getAll({ creatorid: req.userInfo.id })
      res.send(notes)
    } catch (error) {
      next(error)
    }
  }

  async getById(req, res, next) {
    try {
      const notes = await notesService.getById(req.params.id) // do we need params or userInfo?
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
      const notes = await notesService.update(req.body) // we don,t need req.params.id?
      res.send(notes)
    } catch (error) {
      next(error)
    }
  }

  async destroyNote(req, res, next) {
    try {
      await notesService.destroyNote(req.params.id)
      res.send({ message: 'Successfully Deleted!' })
    } catch (error) {
      next(error)
    }
  }
}
