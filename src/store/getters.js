export default {
  blogFilter (state) {
    if (state.category) {
      return state.blogs.filter((blog) => {
        return blog.category.toLowerCase() === state.category.toLowerCase()
      })
    } else {
      return state.blogs.filter((blog) => {
        return blog.title.match(state.search)
      })
    }
  }
}
