<template>
  <div class="card text-white bg-info mb-3" style="max-width: 18rem;">
    <div class="card-header">
      Project
    </div>
    <div class="card-body">
      <h5 class="card-title">
        {{ project.name }}
      </h5>
      <p class="card-text">
        {{ project.description }}
      </p>
      <div class="align-self-end" v-if="account.id === project.creatorId">
        <button class="btn-lg btn-dark">
          Remove
        </button>
      </div>
      <router-link router-link :to="{ name: 'Project', params: {id: project.creator.id } }" @click.stop="" class="creator p-3 align-self-end">
      </router-link>
    </div>
  </div>
  <ProjectModal :project="project" />
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { projectsService } from '../services/ProjectsService'

export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      account: computed(() => AppState.account),
      async destroy() {
        try {
          if (await Pop.confirm()) {
            await projectsService.destroy(props.project.id)
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

</style>
