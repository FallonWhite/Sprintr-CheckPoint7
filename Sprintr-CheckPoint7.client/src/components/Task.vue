<template>
  <div class="row bg-info rounded shadow m-2">
    <div class="col-12 d-flex align-items-center my-2">
      <p class="m-0 mr-2 pointer" title="Delete Task" @click="destroy">
        <span class="fas fa-times"></span>
      </p>
      <h5 class="m-0 mr-auto pointer"
          data-toggle="modal"
          :data-target="'#taskDetailsModal'+ task.id"
          title="See Task Details"
      >
        <b>{{ task.body }}</b>
      </h5>
      <p class="m-0 mr-3">
        <span class="fa fa-balance-scale"></span> <b>{{ task.weight }}</b>
      </p>
      <p class="m-0">
        <b>{{ task.status }}</b>
      </p>
    </div>
    <TaskDetailsModal :task="task" />
  </div>
</template>

<script>
import { tasksService } from '../services/TasksService'
import Pop from '../utils/Notifier'
export default {
  props: {
    task: { type: Object, required: true }
  },
  setup(props) {
    return {
      async destroy() {
        if (await Pop.confirm()) {
          try {
            await tasksService.destroy(props.task.id, props.task.backlogId)
          } catch (error) {
            Pop.toast(error, 'error')
          }
        }
      }
    }
  }
}
</script>
