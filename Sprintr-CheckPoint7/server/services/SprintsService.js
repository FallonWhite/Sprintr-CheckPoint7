import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class SprintsService {

  async getAll(query = {}) {
    return await dbContext.sprint.find(query)
  }

  async getById(id) {
    const project = await dbContext.sprint.findById(id) // do I need to pass id inside paranthesis?
    if (!project) {
      throw new BadRequest('invalid request')
    }
    return project
  }

  async create(body) {
    return await dbContext.sprint.create(body)
  }

  async update(body) {
    const project = await dbContext.sprint.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    // I would like to have a clearification about (body.id, body, { new: true, runValidators: true })
    return project
  }

  async destroy(body) {
    await this.getById(body.id) // ?
    return await dbContext.sprint.findByIdAndDelete()// ?
  }
}
export const sprintsService = new SprintsService()
