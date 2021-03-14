<template>
  <div class="container bg-white"></div>
</template>

<script>
export default {
  transition: 'home',
}
</script>

<style>
.container {
  width: 100vw;
  max-width: 100vw;
  height: calc(100vh - 78px);
  max-height: calc(100vh - 78px);
  overflow-y: auto;
}

.home-enter-active,
.home-leave-active {
  transition: opacity 0.2s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}

/* width */
::-webkit-scrollbar {
  width: 8px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #999;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #555;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #333;
}
</style>
