import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class NotesService {
  async getAll(query = {}) {
    return await dbContext.notes.find(query)
  }

  async getById(id) {
    const notes = await dbContext.notes.findById(id)
    if (!notes) {
      throw new BadRequest('No Note Available')
    }
    return notes
  }

  async getNotesByTaskId(req, res, next) {
    try {
      const notes = await notesService.getNotesByTaskId(req.params.id)
      res.send(notes)
    } catch (error) {
      next(error)
    }
  }

  async create(body) {
    return await dbContext.notes.create(body)
  }

  async update(body) {
    const note = await dbContext.notes.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    return note
  }

  async destroy(id) { // body or Id
    await this.getById(id) // ?
    return await dbContext.notes.findByIdAndDelete()// ?
  } // nobody should be able to delete the note except the creator ?
}
export const notesService = new NotesService()
