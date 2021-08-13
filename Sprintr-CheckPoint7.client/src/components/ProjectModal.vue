<template>
  <!-- Modal -->
  <div class="modal fade"
       id="project-modal"
       tabindex="-1"
       role="dialog"
       aria-labelledby="modelTitleId"
       aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="projectModalLabel">
            New Project
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="createProject">
            <div class="form-group">
              <label for="project.name" class="col-form-label">Name:</label>
              <input v-model="state.newProject.name" type="text" class="form-control" placeholder="Project Name..." id="project.name">
            </div>
            <div class="form-group">
              <label for="project.description" class="col-form-label">Description:</label>
              <textarea v-model="state.newProject.description" class="form-control" placeholder="Project Description..." id="project.description"></textarea>
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
import { projectsService } from '../services/ProjectsService'
// import Pop from '../utils/Notifier'
// import $ from 'jquery'

export default {
  setup() {
    const state = reactive({
      newProject: {}
    })
    return {
      state,
      async createProject() {
        await projectsService.create(state.newProject)
        state.newProject = {}
        // jquery to close modal
        // $('#create-project').modal('hide')
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
