<template>
  <li>
    <NuxtLink
      :to="url"
      class="block p-4 text-sm font-bold uppercase text-gray-400 transition hover:text-red-600"
    >
      {{ text }}
    </NuxtLink>
  </li>
</template>
<script>
export default {
  props: {
    url: { type: String, default: '' },
    text: { type: String, default: '' },
  },
}
</script>

<style></style>
