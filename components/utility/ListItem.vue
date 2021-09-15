<template>
  <a
    v-if="to === '#'"
    href="#"
    :class="`button ${right ? 'border-r-2' : 'border-l-2 pl-2'}`"
    @click="$emit('click')"
  >
    <slot />
  </a>
  <NuxtLink
    :to="to"
    :class="`button ${right ? 'border-r-2' : 'border-l-2 pl-2'}`"
    v-else
  >
    <slot />
  </NuxtLink>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '#',
    },
    right: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
.button {
  @apply my-0.5 text-main-font w-full border-main-accent2 border-opacity-0 hover:bg-main-background hover:border-opacity-100 py-2 transition-colors;
}
</style>
