<template>
  <div class="project container-fluid component">
    <div class="row mt-4">
      <div class="col-12">
        <h1 class="text-info p-3 pb-1 m-1" style="text-align: center; text-shadow: 2px 2px black; background-color: brown">
          <button class="btn btn-info text-center mr-4" data-target="#project-modal" data-toggle="modal">
            <b>Create Project</b>
          </button>
          <button class="btn btn-info text-center ml-4" data-target="#sprint" data-toggle="">
            <b>Sprint 1</b>
          </button>
          Welcome to Your Project Page
          <button class="btn btn-info text-center ml-4" data-target="#backlog-modal" data-toggle="modal">
            <b>Create Backlog Item</b>
          </button>
          <button class="btn btn-info text-center ml-4" data-target="#task-modal" data-toggle="modal">
            <b>Create Task</b>
          </button>
        </h1>
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
// import ProjectCard from '../components/ProjectCard.vue'
// import Backlog from '../components/Backlog.vue'
// import TaskCard from '../components/TaskCard.vue'
export default {
  name: 'Home',
  setup() {
    onMounted(async() => {
      try {
        await projectsService.getAll()
        // await backlogsService.get()
        // await tasksService.getById(id)
      } catch (error) {
        Pop.toast(error, 'error')
      }
    })
    return {
      projects: computed(() => AppState.projects)
      // backlogs: computed(() => AppState.backlogs)
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
