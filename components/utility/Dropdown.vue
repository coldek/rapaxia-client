<template>
  <div class="inline-block relative">
    <button @click="show = !show">
      <slot name="main" />
    </button>
    <div
      :class="`dropdown-content absolute shadow-2xl bg-main-background2 radius rounded-lg${
        show ? `` : ` hidden`
      }${right ? ` left-auto right-0 text-center` : ``}`"
      :style="{ width: width + 'px' }"
    >
      <slot name="dropdown" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    right: Boolean,
    width: {
      type: String,
      default: '150',
    },
  },
  data() {
    return {
      show: false,
    }
  },
}
</script>

<style>
.dropdown-content a {
  @apply block px-2 py-4 text-main-font;
}
</style>
