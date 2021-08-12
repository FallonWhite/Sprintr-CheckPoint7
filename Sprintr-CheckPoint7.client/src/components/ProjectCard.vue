<template>
  <div class="card text-white bg-info mb-3 m-4 justify-content-center" style="max-width: 18rem;">
    <div class="card-header text-center">
      <h5>Project</h5>
    </div>
    <div class="card-body">
      <h5 class="card-title">
        {{ projectProp.name }}
      </h5>
      <p class="card-text">
        {{ projectProp.description }}
      </p>
      <div class="align-self-end" v-if="account.id === projectProp.creatorId">
        <button class="btn-sm btn-dark" @click="destroyProject">
          Remove
        </button>
      </div>
      <router-link router-link :to="{ name: 'Project', params: {id: projectProp.id } }" @click="projectPage">
      </router-link>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { projectsService } from '../services/ProjectsService'

export default {
  props: {
    projectProp: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      account: computed(() => AppState.account),
      async destroyProject() {
        try {
          if (await Pop.confirm()) {
            await projectsService.destroy(props.projectProp.id)
            Pop.toast('Project Removed', 'Success!')
          }
        } catch (error) {
          Pop.toast(error, 'error')
        }
      }
    }
  }
}
</script>

<style>
.card{
  width: 100vh;
}

</style>
