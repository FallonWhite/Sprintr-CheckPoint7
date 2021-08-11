import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class TasksService {
  async getById(id) {
    const task = await dbContext.tasks.findOne({ _id: id })
    if (!task) {
      throw new BadRequest('No Task Available')
    }
    return task
  }

  async getTasksByProjectId(id) {
    return await dbContext.tasks.find({ projectId: id })
  }

  async getTasksByBacklogId(id) {
    return await dbContext.tasks.find({ backlogId: id })
  }

  async getTasksBySprintId(req, res, next) {
    // NOTE need to fix this route, should look similar to above
    try {
      const tasks = await tasksService.getTasksBySprintId(req.params.id)
      res.send(tasks)
    } catch (error) {
      next(error)
    }
  }

  async create(body) {
    return await dbContext.tasks.create(body)
  }

  async update(body) {
    const task = await dbContext.tasks.findByIdAndUpdate(body.id, body, { new: true, runValidators: true })
    return task
  }

  async destroy(id, userId) {
    return await dbContext.tasks.findOneAndDelete({ _id: id, creatorId: userId })// ?
  }
}
export const tasksService = new TasksService()
