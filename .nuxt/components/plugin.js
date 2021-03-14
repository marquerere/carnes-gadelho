import Vue from 'vue'

const components = {
  NavBar: () => import('../..\\components\\NavBar.vue' /* webpackChunkName: "components/nav-bar" */).then(c => c.default || c),
  NavLink: () => import('../..\\components\\NavLink.vue' /* webpackChunkName: "components/nav-link" */).then(c => c.default || c)
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
