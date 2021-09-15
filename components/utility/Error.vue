<template>
  <div>
    <div
      class="text-white text-center p-2 bg-red-700 rounded-lg mx-auto mb-5"
      v-for="(error, index) in errors"
      :key="error"
    >
      {{ error }}
      <span class="float-right" @click="errors.splice(index, 1)"
        ><i class="fas fa-times cursor-pointer"></i
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['errors'],
}
</script>

<style></style>
