<template>
  <div class="">
    <template v-if="!$auth.loggedIn">
      <FormLoginModal />
    </template>
    <Nav />
    <div class="pt-20 mx-4 lg:ml-64 text-main-font overflow-hidden">
      <div class="lg:mx-auto lg:max-w-screen-xl">
        <Nuxt />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
body {
  @apply bg-main-background font-sans;
}
</style>
