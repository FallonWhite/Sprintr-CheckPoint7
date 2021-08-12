<template>
  <!-- Modal -->
  <div class="modal fade"
       id="project-modal"
       tabindex="-1"
       role="dialog"
       aria-labelledby="modelTitleId"
       aria-hidden="true"
  >
    <!-- <div class="modal fade"
         id="exampleModal"
         tabindex="-1"
         role="dialog"
         aria-labelledby="exampleModalLabel"
         aria-hidden="true"
    > -->
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="backlogModalLabel">
            New Backlog Item
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="createBacklogs">
            <div class="form-group">
              <label for="backlogs.name" class="col-form-label">Name:</label>
              <input v-model="state.newBacklogs.name" type="text" class="form-control" placeholder="Backlog Item Name..." id="backlogs.name">
            </div>
            <div class="form-group">
              <label for="backlogs.body" class="col-form-label">Body:</label>
              <textarea v-model="state.newBacklogs.body" class="form-control" placeholder="Backlog Item Body..." id="backlogs.body"></textarea>
            </div>
            <button type="button" class="btn btn-outline-dark btn-warning m-2" data-dismiss="modal">
              <b><i>Close</i></b>
            </button>
            <button type="submit" class="btn btn-outline-dark btn-info">
              <b>Create</b>
            </button>
          </form>
        </div>
      </div>
      <div class="modal-footer">
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { backlogsService } from '../services/BacklogsService'
export default {
  setup() {
    const state = reactive({
      newBacklogs: {}
    })
    return {
      state,
      async createBacklogs() {
        // console.log(state.newProject)
        await backlogsService.create(state.newBacklogs)
        state.newBacklogs = {}
        // jquery to close modal
      }
    }
  }
}
</script>
<style lang="scss">
.modal-backdrop.show{
  opacity: 1!important;
  background:  var(--fade);
  backdrop-filter: blur(10px) brightness(.5) contrast(.75);
}

.modal-body{
  height: 50vh;
  overflow-y: auto;
  background-color: dark;
}
</style>
