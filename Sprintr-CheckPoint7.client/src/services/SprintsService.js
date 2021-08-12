import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class SprintsService {
  async getAll() {
    const res = await api.get('api/sprints')
    logger.log(res.data)
    AppState.sprints = res.data
  }

  async getById(id) {
    const res = await api.get('api/sprints/', id)
    AppState.sprints = res.data
  }

  async getTasksBySprintId(id) {
    const res = await api.get('api/sprints/tasks', id)
    AppState.sprints = res.data // would this be AppState.tasks = res.data??
  }

  async create(body) {
    const res = await api.post('api/sprints', body)
    console.log(res.data)
    AppState.sprints.push(res.data)
    return res.data.id
  }

  async edit(id, body) {
    const res = await api.put('api/sprints/' + id)
    AppState.sprints = res.data
  }

  async destroy(id) {
    await api.destroy('api/sprints/' + id)
    AppState.sprints = AppState.sprints.filter(s => s.id !== id)
  }
}
export const sprintsService = new SprintsService()
