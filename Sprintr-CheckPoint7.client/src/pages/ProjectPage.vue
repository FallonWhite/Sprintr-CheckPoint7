<template>
  <div class="project container-fluid component">
    <div class="row mt-4">
      <div class="col-12">
        <h1 class="text-info p-4 m-4" style="text-align: center; text-shadow: 2px 2px black; background-color: brown">
          <button class="btn btn-info text-center mr-5 text-dark" data-target="#project-modal" data-toggle="modal">
            <b>Create Project</b>
          </button>
          Welcome to Your Project Page
          <button class="btn btn-info text-center ml-4 text-dark" data-target="#backlog-modal" data-toggle="modal">
            <b>Create Backlog Item</b>
          </button>
          <button class="btn btn-info text-center ml-4" data-target="#sprint-modal" data-toggle="modal">
            <b>Create Sprint</b>
          </button>
        </h1>
      </div>
    </div>
    <div class="row text-info" style="text-align: center; text-shadow: 2px 2px black; background-color: brown">
      <!-- <h2 class="p-2 ml-4">
        Sprints:
      </h2>
      <button class="btn btn-info text-center ml-2 text-dark" data-target="#sprint-modal" data-toggle="modal">
        <b>Create Sprint</b>
      </button> -->
      <div class="col-12" v-for="s in sprints" :key="s.id">
        <router-link :to="{name: 'Sprint', params: {id: s.projectId, sprintId: s.id}}" class="text-dark">
          <button class="btn btn-info text-center text-dark mt-3 ml-0">
            <b>{{ s.name }}</b>
          </button>
        </router-link>
      </div>
    </div>
    <div class="row">
      <!-- <ProjectCard v-for="p in projects" :key="p.id" :project-prop="p" /> -->
      <!-- <Backlog v-for="b in backlog" :key="b.id" :backlog-prop="b" /> -->
      <!-- <TaskCard v-for="t in tasks" :key="t.id" :task-prop="t" /> -->
    </div>
    <router-view>
    </router-view>
  </div>
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { projectsService } from '../services/ProjectsService'
// import { backlogsService } from '../services/BacklogsService'
// import { tasksService } from '../services/TasksService'
import Pop from '../utils/Notifier'
import { AppState } from '../AppState'
import { useRoute } from 'vue-router'
// import ProjectCard from '../components/ProjectCard.vue'
// import Backlog from '../components/Backlog.vue'
// import TaskCard from '../components/TaskCard.vue'
export default {
  name: 'Home',
  setup() {
    const route = useRoute()
    onMounted(async() => {
      try {
        await projectsService.getAll()
        await projectsService.getBacklogByProject(route.params.id)
        await projectsService.getSprintByProject(route.params.id)
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      projects: computed(() => AppState.projects),
      sprints: computed(() => AppState.sprints)
      // tasks: computed(() => AppState.tasks)
    }
  },
  components: {
    // ProjectCard
    // Backlog
    // TaskCard
  }
}
</script>
