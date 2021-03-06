import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage'),
    beforeEnter: authGuard
  },
  {
    path: '/project/:id',
    name: 'Project',
    component: loadPage('ProjectPage'),
    children: [{
      path: 'backlogs',
      name: 'Backlog',
      component: loadPage('BacklogPage'),
      beforeEnter: authGuard // need to make a backlog page
    }, {
      path: 'sprints/:sprintId',
      name: 'Sprint',
      component: loadPage('SprintPage'),
      beforeEnter: authGuard
    }]
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
