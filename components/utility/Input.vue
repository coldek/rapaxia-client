<template>
  <div>
    <template v-if="type === 'submit'">
      <button
        type="submit"
        class="h-10 w-20 overflow-hidden"
        @click="$emit('click')"
      >
        <template v-if="!loading"> Submit </template>
        <template v-else>
          <img src="/loading.svg" class="h-12 -mt-3 pl-2" />
        </template>
      </button>
    </template>
    <template v-else>
      <label>
        {{ placeholder }}
        <template v-if="type === 'textarea'">
          <textarea @input="$emit('input', $event.target.value)"></textarea>
        </template>
        <template v-else>
          <input :type="type" @input="$emit('input', $event.target.value)" />
        </template>
      </label>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'text',
    },
    placeholder: {
      type: String,
      default: 'Input',
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
}
</script>

<style scoped>
input[type='text'],
input[type='password'],
textarea {
  @apply w-full bg-main-background p-2 my-2 rounded-md;
}
textarea {
  resize: none;
}
button {
  @apply bg-green-800 hover:bg-green-900 cursor-pointer p-2 rounded-lg;
}
</style>
