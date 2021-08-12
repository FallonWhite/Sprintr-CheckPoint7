import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class SprintsService {
  async getAll(query = {}) {
    return await dbContext.sprints.find(query)
  }

  async getById(id) {
    const sprint = await dbContext.sprints.findById(id) // do I need to pass id inside paranthesis?
    if (!sprint) {
      throw new BadRequest('invalid request')
    }
    return sprint
  }

  async getSprintsByProjectId(id) {
    return await dbContext.sprints.find({ projectId: id })
  }

  async create(body) {
    return await dbContext.sprints.create(body)
  }

  async update(body) {
    const sprint = await dbContext.sprints.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    // I would like to have a clearification about (body.id, body, { new: true, runValidators: true })
    return sprint
  }

  async destroy(id, userId) {
    return await dbContext.Projects.findOneAndDelete({ _id: id, creatorId: userId })// ?
  }
}
export const sprintsService = new SprintsService()
