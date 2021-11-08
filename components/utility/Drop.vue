<template>
  <select
    name=""
    id=""
    @change="onChange"
    class="bg-black p-2 rounded-lg"
    v-model="active"
  >
    <option
      v-for="option in options"
      :key="option"
      :value="options.indexOf(option)"
    >
      {{ option }}
    </option>
  </select>
</template>

<script>
export default {
  props: {
    options: Array,
    default: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      active: this.default,
    }
  },
  methods: {
    onChange() {
      this.$emit('changed', this.active)
    },
  },
}
</script>

<style></style>
