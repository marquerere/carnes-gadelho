<template>
  <header class="flex flex-wrap items-center px-6 py-2 xl:px-64 bg-black">
    <div class="flex items-center justify-between flex-1">
      <NuxtLink
        to="/"
        class="p-4 transition-colors text-white flex flex-col justify-center logo font-bold"
      >
        <span class="text-xs text-white">CARNES</span>
        <span class="text-lg text-red-600">GADELHO</span>
      </NuxtLink>
    </div>

    <label for="menu-toggle" class="block p-4 cursor-pointer xl:hidden">
      <svg
        class="text-white fill-current"
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 20 20"
      >
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </label>
    <input id="menu-toggle" class="hidden" type="checkbox" />

    <div
      id="menu"
      class="hidden w-full xl:flex xl:items-center bg-black xl:w-auto xl:bg-transparent"
    >
      <nav>
        <ul class="items-center justify-between text-base xl:flex xl:pt-0">
          <nav-link url="/sobre-nos" text="Sobre Nós" />
          <nav-link url="/produtos" text="Produtos" />
          <nav-link url="/promocoes" text="Promoções" />
          <nav-link url="/encomendar" text="Encomendar" />
          <nav-link url="/contactos" text="Contactos" />
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import NavLink from './NavLink.vue'
export default {
  name: 'NavBar',
  components: { NavLink },
}
</script>

<style>
#menu-toggle:checked + #menu {
  @apply px-6;
  @apply pb-2;
  display: block;
  position: absolute;
  margin-top: 72px;
  right: 0;
  top: 0;
}

@media (min-width: 1280px) {
  #menu-toggle:checked + #menu {
    @apply mt-0;
    @apply px-0;
    @apply pb-0;
    display: flex;
    position: static;
  }
}

.nuxt-link-exact-active {
  @apply text-red-600;
}

.logo {
  line-height: 1.05;
}
</style>
