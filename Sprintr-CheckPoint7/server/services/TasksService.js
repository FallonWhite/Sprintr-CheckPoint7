import { dbContext } from '../db/DbContext'

class TasksService {
  async getTasksBySprintId(id) {
    return await dbContext.tasks.find({ sprintId: id })
  }
}

export const tasksService = new TasksService()
