<template>
  <div class="row">
    <!-- activeBacklog Card Here -->
    <div class="col-12" v-for="b in backlogs" :key="b.id">
      <backlogsCard :backlogs-prop="b" />
    </div>
    <!-- <div class="col-12" v-for="b in sprints" :key="s.id">
      <router-link :to="{name: 'Sprint', params: {id: s.projectId, sprintId: s.id}}" class="text-dark">
        <button class="btn btn-info text-center mt-3 ml-0">
          <b>{{ s.name }}</b>
        </button>
      </router-link> -->
  </div>
  <!-- <router-view>
  </router-view> -->
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    return {
      backlogs: computed(() => AppState.backlogs)
    }
  }
}
</script>
