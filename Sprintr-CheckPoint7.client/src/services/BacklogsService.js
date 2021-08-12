import { AppState } from '../AppState.js'
import { api } from './AxiosService'
import { logger } from '../utils/Logger.js'

class BacklogsService {
  async getById(id) {
    const res = await api.get('api/backlog/' + id)
    logger.log(res.data)
    AppState.backlogs = res.data
  }

  async getTasksbyBacklog(id) {
    const res = await api.get('api/backlog/' + id + '/tasks')
    logger.log(res.data)
    AppState.task = res.data
  }

  async create(body) {
    const res = await api.post('api/backlog', body)
    logger.log(res.data)
    AppState.backlogs.push(res.data)
  }

  async destroy(id) {
    await api.delete('api/backlog/' + id)
    AppState.backlogs = AppState.backlogs.find(b => b.id !== id)
    logger.log('You deleted Successfully')
  }

  async update(id, body) {
    const res = await api.put('api/backlog/', +id, body)
    logger.log(res.data)
    AppState.backlogs = res.data
  }
}

export const backlogsService = new BacklogsService()
