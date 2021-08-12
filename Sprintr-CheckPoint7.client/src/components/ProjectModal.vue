<template>
  <!-- Modal -->
  <div class="modal fade"
       id="project-modal"
       tabindex="-1"
       role="dialog"
       aria-labelledby="modelTitleId"
       aria-hidden="true"
  >
    <!-- <div class="modal fade"
         id="exampleModal"
         tabindex="-1"
         role="dialog"
         aria-labelledby="exampleModalLabel"
         aria-hidden="true"
    > -->
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="projectModalLabel">
            New Project
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form>
            <div class="form-group">
              <label for="project.name" class="col-form-label">Name:</label>
              <input type="text" class="form-control" placeholder="Project Name..." id="project.name">
            </div>
            <div class="form-group">
              <label for="project.description" class="col-form-label">Description:</label>
              <textarea class="form-control" placeholder="Project Description..." id="project.description"></textarea>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-outline-dark btn-secondary" data-dismiss="modal">
            Close
          </button>
          <button type="submit" class="btn btn-primary" @click="createProject">
            Create
          </button>
        </div>
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
  backdrop-filter: blur(10px) brightness(.5) contrast(.75);
}

.modal-body{
  height: 50vh;
  overflow-y: auto;
}

</style>
