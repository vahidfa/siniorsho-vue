import axios from 'axios'
export default {
  getBlogPost ({ commit }) {
    commit('loadingOn', true)
    axios.get('https://sinior-419e5.firebaseio.com/posts.json')
      .then((response) => {
        return response.data
      })
      .then((response) => {
        const getBlog = []
        for (const key in response) {
          response[key].id = key
          getBlog.push(response[key])
          commit('getBlog', getBlog)
          commit('loadingOn', false)
        }
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
