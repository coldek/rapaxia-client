<template>
  <div
    class="
      bg-main-background2
      border-main-accent border
      inline-block
      radius-2
      p-3
      shadow-2xl
      rounded-lg
      overflow-hidden
      col-span-1
    "
  >
    <div class="block table text-2xl pr-1" v-if="heading !== ''">
      {{ heading }}
    </div>
    <hr class="divider my-2" v-if="heading !== ''" />
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
