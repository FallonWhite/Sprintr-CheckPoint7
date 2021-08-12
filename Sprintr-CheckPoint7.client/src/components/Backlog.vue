<template>
  <!-- <div class="modal fade" id="create" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            This is my backlog
          </h5>
          <button type="button" class="btn-close btn btn-outline-danger" data-dismiss="modal" aria-label="Close">
            delete
          </button>
        </div>
        <div class="modal-body">
          <input class="form-control"
                 type="text"
                 v-model="state.newBacklog.name"
                 id="name"
                 placeholder="Name Backlog..."
          >
          <br>
          <input
            class="form-control"
            id="body"
            v-model="state.newBacklog.body"
            rows="10"
            placeholder="Body..."
          >
        </div>
        <div class="modal-footer">
          <button type="submit" @click="create" class="btn btn-infor" data-toggle="modal" data-target="#create">
            Create Backlog
          </button>
        </div>
      </div>
    </div>
  </div> -->
  <div class="text-white">
    <h1>hellooooo</h1>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { backlogsService } from '../services/BacklogsService'
import Pop from '../utils/Notifier'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'

export default {
  name: 'Component',
  setup() {
    const route = useRoute()
    const state = reactive({
      newBacklog: {}
    })
    return {
      state,
      account: computed(() => AppState.account),
      backlogs: computed(() => AppState.backlogs),
      activeProject: computed(() => AppState.activeProject),
      async createBacklog() {
        try {
          state.newBacklog.projectId = route.params.id
          await backlogsService.create(state.newBacklog)
          state.newBacklog = {}
          Pop.toast('Backlog Created succesfully')
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  },
  components: {}
}
</script>
