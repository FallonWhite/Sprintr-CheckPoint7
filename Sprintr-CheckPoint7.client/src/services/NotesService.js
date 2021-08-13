import { logger } from '../utils/Logger'
import { AppState } from '../AppState'
import { api } from './AxiosService'

class NotesService {
  async getAllNotesByTaskId(id) {
    const res = await api.get(`api/tasks/${id}/notes`)
    logger.log(res.data)
    AppState.notes = res.data
  }

  async getNoteById(id) {
    const res = await api.get(`api/notes/${id}`)
    AppState.activeNote = res.data
  }

  async create(newNote) {
    try {
      const res = await api.post('api/notes')
      logger.log(res.data)
      AppState.notes.push(res.data) // ?
    } catch (error) {
      logger.error(error)
    }
  }

  async update(id, body) {
    const res = await api.put('api/notes' + id)
    AppState.notes = res.data
  }

  async destroy(id) {
    logger.log(id)
    await api.delete('api/notes/' + id)
    const allNotes = AppState.notes
    AppState.notes = allNotes.filter(p => p.id !== id)
  }
}
export const notesService = new NotesService()
