<template>
  <div class="row">
    <!-- activeBacklog Card Here -->
    <div class="col-12" v-for="b in backlogs" :key="b.id">
      <backlogsCard :backlogs-prop="b" />
    </div>
  </div>
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
