
import { AppState } from '../AppState'
import { router } from '../router'
import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class ProjectsService {
  async getAll() {
    const res = await api.get('api/projects')
    logger.log(res.data)
    AppState.projects = res.data
  }

  async getById(id) {
    const res = await api.get('api/projects/', id)
    AppState.projects = res.data
  }

  async getBacklogByProject(id) {
    const res = await api.get('api/projects/' + id + '/backlogs')
    AppState.backlogs = res.data
  }

  async getSprintByProject(id) {
    const res = await api.get('api/projects/' + id + '/sprints')
    AppState.sprints = res.data
  }

  async getTasksByProject(id) {
    const res = await api.get('api/projects/', id)
    // logger.log(res.data)
    AppState.tasks = res.data
  }

  async create(body) {
    const res = await api.post('api/projects', body)
    AppState.projects.push(res.data)
    router.push({ name: 'Backlog', params: { id: res.data.id } })
    router.push({ name: 'Sprint', params: { id: res.data.id } })
    // return res.data.id
  }

  async edit(id, body) {
    const res = await api.put('api/projects/' + id)
    // eslint-disable-next-line no-console
    console.log(res.data)
    AppState.projects = res.data
  }

  async destroy(id) {
    await api.delete('api/projects/' + id)
    AppState.projects = AppState.projects.filter(p => p.id !== id)
    // eslint-disable-next-line no-console
    router.push({ name: 'Home' })
    logger.log('Deleted Successfully')
  }
}
export const projectsService = new ProjectsService()
