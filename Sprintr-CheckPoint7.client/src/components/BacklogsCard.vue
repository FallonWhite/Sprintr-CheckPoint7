<template>
  <div class="card text-white bg-info mb-3 m-4 justify-content-between " style="max-width: 18rem;">
    <div class="card-header text-center">
      <h5 class="p-2" style="text-align: center; text-shadow: 2px 2px black; background-color: brown">
        <!-- change this to @click to set active Backlog Item -->
        <!-- option2 this router link will be a modal open - task modal -->
        <router-link router-link :to="{ name: 'Backlog', params: {backlogId: backlogsProp.id } }">
          Backlog Item
        </router-link>
      </h5>
    </div>
    <div class="card-body">
      <h5 class="card-title">
        {{ backlogsProp.name }}
      </h5>
      <p class="card-text">
        {{ backlogsProp.body }}
      </p>
      <div class="align-self-end" v-if="account.id === backlogsProp.creatorId">
        <button class="btn-sm btn-dark" style="background-color: brown" @click="destroyBacklogs">
          Remove
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
import Pop from '../utils/Notifier'
import { backlogsService } from '../services/BacklogsService'

export default {
  props: {
    backlogsProp: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    return {
      account: computed(() => AppState.account),
      async destroyBacklogs() {
        try {
          if (await Pop.confirm()) {
            await backlogsService.destroy(props.backlogsProp.id)
            Pop.toast('Backlog Item Removed', 'Success!')
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
