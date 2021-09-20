<template>
  <div>
    <Centered>
      <Card class="text-center">
        <span class="text-5xl text-red-600">
          <i class="fas fa-exclamation-triangle"></i>
        </span>
        &nbsp;
        <span class="text-5xl">
          {{ error.statusCode }}
        </span>
        <span class="text-5xl text-red-600">
          <i class="fas fa-exclamation-triangle"></i>
        </span>
        <hr class="divider" />
        <span class="text-center text-3xl">
          {{ error.message }}
        </span>
      </Card>
    </Centered>
  </div>
</template>

<script>
export default {
  props: ['error'],
}
</script>

<style></style>
