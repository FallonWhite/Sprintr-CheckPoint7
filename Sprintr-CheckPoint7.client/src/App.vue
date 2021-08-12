<template>
  <header>
    <Navbar />
  </header>
  <main class="main">
    <router-view />
    <div class="modals">
      <ProjectModal />
      <BacklogModal />
      <SprintModal />
    </div>
  </main>
  <footer>
    <div class="bg-dark text-light text-center p-4">
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

.main {
flex-grow: 1;
  display: flex;
  flex-direction: column;
  min-height: 130vh;
  // font-family: 'Kaushan Script', cursive;
  // font-weight: bolder;
  // font-size: larger;
  background-image: url('./assets/img/Autumn.jpg');
  background-position: center;
  background-size: cover;
}

</style>
