<template>
  <div class="row">
    <div class="col-12" v-for="s in sprints" :key="s.id">
      <SprintsCard :sprints-prop="s" />
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    return {
      sprints: computed(() => AppState.sprints)
    }
  }
}
</script>
