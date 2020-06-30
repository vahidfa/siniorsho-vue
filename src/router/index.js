import Vue from 'vue'
import VueRouter from 'vue-router'
import PostGrid from '../views/PostGrid.vue'
import CreatePost from '../views/CreatePost.vue'
import PostDetails from '../views/PostDetails.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', component: PostGrid },
  { path: '/createPost', component: CreatePost },
  { path: '/posts/:id', component: PostDetails }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
