import { dbContext } from '../db/DbContext'
import { BadRequest } from '../utils/Errors'

class TasksService {
  async getAll(query = {}) {
    return await dbContext.tasks.find(query)
  }

  async getById(id) {
    const task = await dbContext.tasks.findById(id)
    if (!task) {
      throw new BadRequest('No Task Available')
    }
    return task
  }

  async getTasksByProjectId(id) {
    return await dbContext.tasks.find({ projectId: id })
  }

  async getTasksByBacklogId(req, res, next) {
    try {
      const tasks = await tasksService.getTasksByBacklogId(req.params.id)
      res.send(tasks)
    } catch (error) {
      next(error)
    }
  }

  async getTasksBySprintId(req, res, next) {
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

  async destroy(body) {
    await this.getById(body.id) // ?
    return await dbContext.tasks.findByIdAndDelete()// ?
  }
}
export const tasksService = new TasksService()
