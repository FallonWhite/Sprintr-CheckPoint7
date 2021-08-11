
import { AppState } from '../AppState'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class ProjectsService {
  async getAll() {
    const res = await api.get('api/projects') // where do I need to define my api?
    AppState.projects = res.data
  }

  async getById(id) {
    const res = await api.get('api/projects/', id)
    AppState.projects = res.data
  }

  async getBacklogByProject(id) {
    const res = await api.get('api/projects/', id)
    AppState.backlog = res.data
  }

  async getSprintByProject(id) {
    const res = await api.get('api/projects/', id)
    AppState.sprint = res.data
  }

  async getTasksByProject(id) {
    const res = await api.get('api/projects/', id)
    logger.log(res.data)
    AppState.task = res.data
  }

  async create(body) {
    const res = await api.post('api/projects', body)
    AppState.project.push(res.data)
    return res.data.id
  }

  async edit(id, body) {
    const res = await api.put('api/projects/', id)
    // eslint-disable-next-line no-console
    console.log(res.data)
    AppState.project = res.data
  }

  async destroy(id) {
    await api.delete('api/projects/', id)
    AppState.project = AppState.project.find(p => p.id !== id)
    // eslint-disable-next-line no-console
    console.log('Deleted Successfully')
  }
}
export const projectsService = new ProjectsService()
