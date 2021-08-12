<template>
  <div class="card text-white bg-info mb-3 m-4 justify-content-center" style="max-width: 18rem;">
    <div class="card-header text-center">
      <h5>Task</h5>
    </div>
    <div class="card-body">
      <p class="card-title">
        ⚖{{ taskProp.weight }}
      </p>
      <p class="card-text">
        {{ taskProp.body }}
      </p>
      <p>{{ taskProp.status }}</p>
      <div class="align-self-end" v-if="account.id === taskProp.creatorId">
        <button class="btn-sm btn-dark" @click="destroytask">
          Remove
        </button>
      </div>
      <router-link router-link :to="{ name: 'Task', params: {id: taskProp.id } }" @click="projectPage">
      </router-link>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { tasksService } from '../services/TasksService'

export default {
  props: {
    taskProp: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      account: computed(() => AppState.account),
      async destroyTask() {
        try {
          if (await Pop.confirm()) {
            await tasksService.destroy(props.taskProp.id)
            Pop.toast('Task Removed', 'Success!')
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
