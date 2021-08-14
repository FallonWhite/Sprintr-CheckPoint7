<template>
  <div class="col-md-7 col-7 bg-light d-flex mt-3 justify-content-between">
    <p class="pt-3 text-light hoverable">
      <router-link :to="{ name: 'Sprints', params: {sprintId: sprint.id, projectId: project.id}}">
        {{ sprints.name }}
      </router-link>
    </p>
    <h5 class="pt-3 hoverable" @click="destory(sprint.id, project.id)">
      Delete
    </h5>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import { sprintsService } from '../services/SprintsService'
import { projectsService } from '../services/ProjectsService'
export default {
  props: {
    sprint: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      account: computed(() => AppState.account),
      project: computed(() => AppState.activeProject),
      async destory(id, projectid) {
        await sprintsService.destroy(id)
        await projectsService.getSprintsByProject(projectid)
      }
    }
  }
}
</script>
