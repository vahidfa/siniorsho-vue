export default {
  getBlog (state, payload) {
    state.blogs = payload
  },
  loadingOn (state, payload) {
    state.loading = payload
  },
  search (state, search) {
    state.search = search
  },
  setCategory (state, type) {
    state.category = type
  }
}
