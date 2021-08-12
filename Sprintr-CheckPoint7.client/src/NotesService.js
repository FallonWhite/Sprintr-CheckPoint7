
import { AppState } from '../AppState'
// import { logger } from '../utils/Logger'
import { api } from './AxiosService'

class NotesService {
  async getById(id) {
    const res = await api.get('api/notes/' + id) // are accessing the note through the taskId?
    AppState.notes = res.data
  }

  async create(body) {
    const res = await api.post('api/notes' + body)
    AppState.notes.push(res.data)
    return res.data.id
  }

  async edit(id, body) {
    const res = await api.put('api/notes/' + id)
    AppState.notes = res.data
  }

  async destroy(id) {
    await api.delete('api/notes/' + id)
    AppState.notes = AppState.notes.filter(t => t.id !== id)
  }
}
export const notesService = new NotesService()
