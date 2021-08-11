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

  async getNotesByTaskId(id) {
    const notes= await dbContext.tasks.findByTaskId({ taskId: id })
    if(!notes){
      throw new BadRequest("There is no note to show")// some miner check
    }

  }

  async create(body) {
    return await dbContext.notes.create(body)
  }

  async update(body) {
    const note = await dbContext.notes.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    return note
  }

  async destroy(body) { // body or Id
    await this.getById(body.id) // ?
    return await dbContext.notes.findByIdAndDelete()// ?
  } // nobody should be able to delete the note except the creator ?
}
export const notesService = new NotesService()
