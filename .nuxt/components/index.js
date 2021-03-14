export { default as NavBar } from '../..\\components\\NavBar.vue'
export { default as NavLink } from '../..\\components\\NavLink.vue'

export const LazyNavBar = import('../..\\components\\NavBar.vue' /* webpackChunkName: "components/nav-bar" */).then(c => c.default || c)
export const LazyNavLink = import('../..\\components\\NavLink.vue' /* webpackChunkName: "components/nav-link" */).then(c => c.default || c)
