<template>
  <div></div>
</template>

<script>
export default {
  mounted() {
    console.log('test')
    setTimeout(() => this.$notify('Invalid input.'), 2000)
  },
}
</script>

<style></style>
