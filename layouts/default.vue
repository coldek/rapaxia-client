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
    <notifications position="bottom right" :duration="5000">
      <template slot="body" slot-scope="{ item, close }">
        <div
          class="
            my-notification
            bg-red-600
            text-white text-xl
            p-2
            mb-2
            mr-2
            pl-4
            rounded-lg
          "
        >
          <p class="title">
            {{ item.title }}
          </p>
          <button class="close mr-2" @click="close">
            <i class="fas fa-times"></i>
          </button>
          {{ item.text }}
        </div>
      </template>
    </notifications>
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
