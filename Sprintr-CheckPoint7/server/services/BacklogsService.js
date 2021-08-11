import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class BacklogsService {
  async getAll(query = {}) {
    return await dbContext.backlogs.find(query)
  }

  async getById(id) {
    const backlog = await dbContext.backlogs.findById(id)
    if (!backlog) {
      throw new BadRequest('invalid request')
    }
    return backlog
  }

  async getBacklogsByProjectId(id) {
    return await dbContext.backlogs.find({ projectId: id })
  }

  async create(body) {
    return await dbContext.backlogs.create(body)
  }

  async update(body) {
    const backlog = await dbContext.backlogs.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    return backlog
  }

  async destroy(id, userId) {
    return await dbContext.backlogs.findOneAndDelete({ _id: id, creatorId: userId })// ?
  }
}
export const backlogsService = new BacklogsService()
