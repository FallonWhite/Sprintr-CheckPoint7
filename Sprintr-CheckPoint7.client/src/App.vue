<template>
  <header>
    <Navbar />
  </header>
  <main>
    <router-view />
    <div class="modals">
      <ProjectModal />
    </div>
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
export default {
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
