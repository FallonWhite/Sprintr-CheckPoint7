<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
    <project-card />
  </main>
  <footer>
    <div class="bg-light text-dark text-center p-4">
      Made with 💖 by Fallon and Shadab
    </div>
  </footer>
</template>

<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import ProjectCard from './components/ProjectCard.vue'
export default {
  components: { ProjectCard },
  name: 'App',
  setup() {
    return {
      appState: computed(() => AppState)
    }
  }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

</style>
