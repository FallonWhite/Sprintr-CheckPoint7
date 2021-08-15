<template>
  <div class="modal fade"
       id="sprint-modal"
       tabindex="-1"
       role="dialog"
       aria-labelledby="exampleModalLabel"
       aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Create New Sprint!
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="createSprints">
            <div class="form-group">
              <label for="sprints.name" class="col-form-label">Name:</label>
              <input v-model="state.newSprints.name" type="text" class="form-control" placeholder="Sprint Name..." id="sprints.name">
            </div>
            <div class="form-group">
              <label for="sprints.body" class="col-form-label">Body:</label>
              <textarea v-model="state.newSprints.body" class="form-control" placeholder="Sprint Body..." id="sprints.body"></textarea>
            </div>
            <button type="button" class="btn btn-outline-info btn-warning m-2" data-dismiss="modal">
              <b><i>Close</i></b>
            </button>
            <button type="submit" class="btn btn-outline-dark btn-info">
              <b>Create</b>
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { sprintsService } from '../services/SprintsService'
import { useRoute } from 'vue-router'
import $ from 'jquery'
export default {
  setup() {
    const route = useRoute()
    const state = reactive({
      newSprints: {}
    })
    return {
      state,
      async createSprints() {
        state.newSprints.projectId = route.params.id
        await sprintsService.create(state.newSprints)
        state.newSprints = {}
        $('#sprint-modal').modal('hide')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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
