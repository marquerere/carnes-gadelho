import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7fc03733 = () => interopDefault(import('..\\pages\\contactos.vue' /* webpackChunkName: "pages/contactos" */))
const _a0d5de4c = () => interopDefault(import('..\\pages\\dados.vue' /* webpackChunkName: "pages/dados" */))
const _47caf816 = () => interopDefault(import('..\\pages\\encomendar.vue' /* webpackChunkName: "pages/encomendar" */))
const _4e3ffabb = () => interopDefault(import('..\\pages\\produtos.vue' /* webpackChunkName: "pages/produtos" */))
const _c6e4eb50 = () => interopDefault(import('..\\pages\\promocoes.vue' /* webpackChunkName: "pages/promocoes" */))
const _a25b8526 = () => interopDefault(import('..\\pages\\sobre-nos.vue' /* webpackChunkName: "pages/sobre-nos" */))
const _6adefafe = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/contactos",
    component: _7fc03733,
    name: "contactos"
  }, {
    path: "/dados",
    component: _a0d5de4c,
    name: "dados"
  }, {
    path: "/encomendar",
    component: _47caf816,
    name: "encomendar"
  }, {
    path: "/produtos",
    component: _4e3ffabb,
    name: "produtos"
  }, {
    path: "/promocoes",
    component: _c6e4eb50,
    name: "promocoes"
  }, {
    path: "/sobre-nos",
    component: _a25b8526,
    name: "sobre-nos"
  }, {
    path: "/",
    component: _6adefafe,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
