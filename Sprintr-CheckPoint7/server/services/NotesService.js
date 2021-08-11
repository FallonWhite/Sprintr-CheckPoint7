import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class NotesService {
  async getAll(query = {}) {
    return await dbContext.notes.find(query)
  }

  async getById(id) {
    const note = await dbContext.notes.findById(id)
    if (!note) {
      throw new BadRequest('No Note Available')
    }
    return note
  }

  async getNotesByTaskId(id) {
    return await dbContext.tasks.find({ taskId: id })
  }

  async create(body) {
    return await dbContext.notes.create(body)
  }

  async update(body) {
    const note = await dbContext.notes.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    return note
  }

  async destroy(body) {
    await this.getById(body.id) // ?
    return await dbContext.notes.findByIdAndDelete()// ?
  }
}
export const notesService = new NotesService()
