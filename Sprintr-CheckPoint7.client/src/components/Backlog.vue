<template>
  <div class="modal fade" id="create" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            This is my backlog
          </h5>
          <button type="button" class="btn-close btn btn-outline-danger" data-dismiss="modal" aria-label="Close">
            delete
          </button>
        </div>
        <div class="modal-body">
          <input class="form-control"
                 type="text"
                 v-model="state.newBacklog.name"
                 id="name"
                 placeholder="Name Backlog..."
          >
          <br>
          <input
            class="form-control"
            id="body"
            v-model="state.newBacklog.body"
            rows="4"
            placeholder="Body..."
          >
        </div>
        <div class="modal-footer">
          <button type="submit" @click="create" class="btn btn-infor" data-toggle="modal" data-target="#create">
            Create Backlog
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Component',
  setup() {

  }
}
</script>
