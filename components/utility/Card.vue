<template>
  <div
    class="
      bg-main-background2
      border-main-accent border
      inline-block
      radius-2
      p-10
      shadow-2xl
      rounded-lg
      overflow-hidden
      col-span-1
    "
  >
    <div
      class="table mx-auto text-3xl border-main-background px-5 border-b pb-3"
      v-if="heading !== ''"
    >
      {{ heading }}
    </div>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    heading: {
      type: String,
      default: '',
    },
  },
}
</script>

<style scoped></style>
