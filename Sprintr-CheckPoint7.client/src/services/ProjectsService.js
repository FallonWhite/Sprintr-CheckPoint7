import { send } from 'vite'
import { AppState } from '../AppState'
import { api } from './AxiosService'

class ProjectsService {
  async getAll() {
    const res = await api.get('api/projects')
    send(res.data)
    AppState.projects = res.data
  }

  async getById(id) {
    const res = await api.get('api/projects/', id)
    send(res.data)
    AppState.projects = res.data
  }

  async getBacklogByProject(id) {
    const res = await api.get('api/projects/', id)
    send(res.data)
    AppState.backlog = res.data
  }

  async getSprintByProject(id) {
    const res = await api.get('api/projects/', id)
    send(res.data)
    AppState.sprint = res.data
  }

  async getTasksByProject(id) {
    const res = await api.get('api/projects/', id)
    send(res.data)
    AppState.task = res.data
  }

  async create(body) {
    const res = await api.post('api/projects', body)
    send(res.data)
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
