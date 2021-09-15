<template>
  <FormLogin />
</template>

<script>
export default {
  middleware: ['auth'],
  auth: 'guest',
}
</script>

<style></style>
