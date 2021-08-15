<template>
  <div class="container-fluid">
    <div class="row mt-4">
      <div class="col-12 text-right">
        <button class="btn btn-info text-dark" data-target="#project-modal" data-toggle="modal">
          <b>Create Project</b>
        </button>
      </div>
    </div>
    <div class="row">
      <ProjectCard v-for="p in projects" :key="p.id" :project-prop="p" />
    </div>
    <!-- temporay added  -->
    <div class="row">
      <SprintsCard v-for="s in sprints" :key="s.id" :sprints-prop="s" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { projectsService } from '../services/ProjectsService'
import Pop from '../utils/Notifier'
import { AppState } from '../AppState'
import ProjectCard from '../components/ProjectCard.vue'
export default {
  name: 'Home',
  setup() {
    onMounted(async() => {
      try {
        await projectsService.getAll()
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      projects: computed(() => AppState.projects)
    }
  },
  components: {
    ProjectCard
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
