<template>
  <div class="modal fade" id="create" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">
            Create
          </h5>
          <button type="button" class="btn-close btn btn-outline-danger" data-dismiss="modal" aria-label="Close">
            Delete
          </button>
        </div>
        <div class="modal-body">
          <!-- VModel -->
          <input
            class="form-control"
            type="text"
            v-model="state.newNote.name"
            id="name"
            placeholder="Name Note..."
          >
          <br>
          <textarea
            class="form-control"
            id="description"
            v-model="state.newNote.description"
            rows="6"
            placeholder="Description..."
          >
          </textarea>
        </div>
        <div class="modal-footer">
          <button type="submit" @click="create" class="btn btn-primary" data-toggle="modal" data-target="#create">
            Submit
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
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>
