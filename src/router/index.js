import Vue from 'vue'
import Router from 'vue-router'

// Routes
import Login from './routes/Login'
import Logout from './routes/Logout'
import NewService from './routes/NewService'
import MyProjects from './routes/MyProjects'
import MyProjectsDetails from './routes/MyProjectDetails'
import Otherwise from './routes/Otherwise'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    { ...Login },
    { ...Logout },
    { ...NewService },
    { ...MyProjects },
    { ...MyProjectsDetails },
    { ...Otherwise }
  ]
})
