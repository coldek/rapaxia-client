<template>
  <div
    class="block relative"
    :style="{ height: size + 'px', width: size + 'px' }"
  >
    <img
      :src="`${$config.imageServer}avatars/${
        headshot ? 'headshots' : 'body'
      }/${img}.png`"
      :class="`${rounded ? 'rounded-full' : ''}`"
      :style="{ height: size + 'px', width: size + 'px' }"
      title="Avatar"
    />
    <div
      class="h-3 w-3 absolute right-0 bottom-0 bg-green-600 rounded-full"
      title="Online"
      v-if="showOnline"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    headshot: {
      default: false,
      type: Boolean,
    },
    showOnline: {
      default: false,
      type: Boolean,
    },
    img: {
      type: String,
    },
    rounded: {
      default: false,
      type: Boolean,
    },
    size: {
      default: 'auto',
      type: String,
    },
  },
}
</script>

<style></style>
