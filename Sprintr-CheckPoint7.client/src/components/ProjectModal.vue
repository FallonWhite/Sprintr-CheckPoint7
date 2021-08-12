<template>
  <!-- Modal -->
  <div class="modal"
       id="project-modal"
       tabindex="-1"
       role="dialog"
       aria-labelledby="modelTitleId"
       aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header bg-dark">
          <h5 class="project-modal">
            {{ project.name }}
          </h5>
          <div class="row">
            <div class="col">
              <label for="head">Create project</label>
            </div>
            <div class="col">
              <Label>Name</Label>
              <input type="text" placeholder="Name ...">
            </div>
            <div class="col">
              <label for="">Description</label>
              <textarea name="des" id="des" cols="30" rows="10">Description</textarea>
            </div>
            <div class="col">
              <button>Create</button>
            </div>
          </div>
          <button type="button" class="close text-light">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body bg-dark">
          <div class="container-fluid">
            <!-- <div class="row" v-if="project.modal.length">
              <div class="col-6 p-1" v-for="pic in project.photos" :key="pic.id">
                <img class="w-100 h-100 cover shadow-light" :src="pic.imgUrl">
              </div> -->
          </div>
          <!-- <div class="row" v-else>
            </div> -->
        </div>
      </div>
      <div class="modal-footer bg-dark">
        <button type="button" class="btn btn-outline-light btn-info" data-dismiss="modal">
          Close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // props: {
  //   project: {
  //     type: Object,
  //     required: true
  //   }
  // },
  setup() {
    return {}
  }
}
</script>

<style lang="scss">
.modal-backdrop.show{
  opacity: 1!important;
  background:  var(--fade);
  backdrop-filter: blur(30px) brightness(.5) contrast(.85);
}

.modal-body{
  height: 50vh;
  overflow-y: auto;
}

.cover {
  object-fit: cover;
}
</style>
