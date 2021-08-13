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
            Create new Sprint!
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="createSprints">
            <div class="form-group">
              <label for="backlogs.name" class="col-form-label">Name:</label>
              <input v-model="state.newSprints.name" type="text" class="form-control" placeholder="Sprint Name..." id="Sprints.name">
            </div>
            <div class="form-group">
              <label for="Sprints.body" class="col-form-label">Body:</label>
              <textarea v-model="state.newSprints.body" class="form-control" placeholder="Sprint Body..." id="Sprints.body"></textarea>
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
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { useRoute } from 'vue-router'
import { sprintsService } from '../services/SprintsService'
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

</style>
