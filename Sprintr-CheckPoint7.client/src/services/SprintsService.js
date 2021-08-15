import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class SprintsService {
  async getById(id) {
    const res = await api.get('api/sprints/' + id)
    logger.log(res.data)
    AppState.activeSprints = res.data
  }

  async getTasksBySprint(id) {
    const res = await api.get('api/sprints/' + id + 'tasks')
    logger.log(res.data)
    AppState.task = res.data
  }

  async create(body) {
    const res = await api.post('api/sprints', body)
    logger.log(res.data)
    AppState.sprints.push = res.data
  }

  async update(id, body) {
    const res = await api.put('api/sprints/', id, body)
    logger.log(res.data)
    AppState.sprints = res.data
  }

  async destroy(id) {
    await api.delete('api/sprints/' + id)
    AppState.sprints = AppState.sprints.find(s => s.id !== id)
    logger.log('You deleted Successfully')
  }
}
export const sprintsService = new SprintsService()
