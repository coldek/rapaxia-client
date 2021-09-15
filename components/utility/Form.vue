<template>
  <form method="POST" @submit.prevent="submit">
    <slot />
  </form>
</template>

<script>
export default {
  props: ['submit'],
}
</script>

<style></style>
