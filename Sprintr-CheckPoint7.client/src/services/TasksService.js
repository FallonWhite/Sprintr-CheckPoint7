
import { AppState } from '../AppState'
// import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class TasksService {
  async getById(id) {
    const res = await api.get('api/tasks/', id)
    AppState.tasks = res.data
  }

  async create(body) {
    const res = await api.post('api/tasks', body)
    AppState.tasks.push(res.data)
    return res.data.id
  }

  async edit(id, body) {
    const res = await api.put('api/tasks/' + id)
    AppState.tasks = res.data
  }

  async destroy(id) {
    await api.delete('api/tasks/' + id)
    AppState.tasks = AppState.tasks.filter(t => t.id !== id)
  }
}
export const tasksService = new TasksService()
