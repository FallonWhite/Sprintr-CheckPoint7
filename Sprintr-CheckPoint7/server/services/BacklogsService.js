import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class BacklogsService {
  async getAll(query = {}) {
    return await dbContext.backlogs.find(query)
  }

  async getById(id) {
    const project = await dbContext.backlogs.findById(id) // do I need to pass id inside paranthesis?
    if (!project) {
      throw new BadRequest('invalid request')
    }
    return project
  }

  async getBacklogsByProjectId(id) {
    return await dbContext.backlogs.find({ projectId: id })
  }

  async create(body) {
    return await dbContext.backlogs.create(body)
  }

  async update(body) {
    const project = await dbContext.backlogs.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    // I would like to have a clearification about (body.id, body, { new: true, runValidators: true })
    return project
  }

  async destroy(body) {
    await this.getById(body.id) // ?
    return await dbContext.backlogs.findByIdAndDelete()// ?
  }
}
export const backlogsService = new BacklogsService()
