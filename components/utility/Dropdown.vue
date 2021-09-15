<template>
  <div class="inline-block relative">
    <button @click="show = !show">
      <slot name="main" />
    </button>
    <div
      :class="`dropdown-content absolute shadow-2xl bg-main-background2 w-32 radius rounded-lg${
        show ? `` : ` hidden`
      }${right ? ` left-auto right-0 text-center` : ``}`"
    >
      <slot name="dropdown" />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    right: Boolean,
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
