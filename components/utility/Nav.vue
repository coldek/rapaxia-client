<template>
  <div>
    <div class="nav">
      <!-- Left side (Mobile) -->
      <a @click.prevent="show = !show" class="item hide flex-none" href="#"
        ><i class="fas fa-bars"></i
      ></a>
      <a href="#" class="mt-2">
        <img src="/logo_long.png" class="hidden ml-3 lg:block h-10" alt=""
      /></a>

      <!-- Right side -->
      <div class="inline-flex flex-row-reverse flex-grow pr-5">
        <template v-if="!$auth.loggedIn">
          <!-- USER IS NOT AUTHENTICATED -->
          <NuxtLink
            to="/account/register"
            class="
              text-white
              bg-green-500
              hover:bg-green-600
              h-10
              mt-2
              pt-1
              px-4
              text-lg
              rounded-lg
              truncate
            "
            v-if="$nuxt.$route.path !== '/account/register'"
            ><span class="align-top"
              ><i class="fas fa-user-plus"></i>&nbsp;&nbsp;Sign Up</span
            ></NuxtLink
          >
          <a
            href=""
            @click.prevent="$modal.show('login')"
            class="item"
            v-if="$nuxt.$route.path !== '/account/login'"
            >Login</a
          >
        </template>
        <template v-else>
          <!-- USER IS AUTHENTICATED -->
          <Dropdown right class="mt-1 mr-4">
            <template #main>
              <img
                :src="`http://localhost:8000/images/headshots/${$auth.user.avatar.cache}.png`"
                alt=""
                class="h-12 rounded-lg"
              />
            </template>
            <template #dropdown>
              <ListItem right>Profile</ListItem>
              <ListItem right>Settings</ListItem>
              <hr class="divider" />
              <ListItem right @click="$auth.logout()">Logout</ListItem>
            </template>
          </Dropdown>

          <NuxtLink :to="`/profile/${$auth.user.id}`" class="item">{{
            $auth.user.username
          }}</NuxtLink>
        </template>
      </div>
    </div>

    <!-- Side bar -->
    <transition name="slide-fade">
      <div class="nav-side flex-auto" v-if="show || windowWidth >= 1024">
        <img src="/logo_long.png" class="hide ml-3 lg:block h-10 w-40" alt="" />
        <template v-if="!$auth.loggedIn">
          <!-- USER IS NOT AUTHENTICATED -->
          <ListItem to="/" class="ml-3"
            ><i class="fas fa-home"></i>&nbsp;&nbsp;Landing</ListItem
          >
        </template>
        <template v-else>
          <!-- USER IS AUTHENTICATED -->
          <ListItem to="/dashboard" class="ml-3"
            ><i class="fas fa-home"></i>&nbsp;&nbsp;Dashboard</ListItem
          >
        </template>
        <hr class="divider" />
        <ListItem to="/" class="ml-3"
          ><i class="fas fa-comment-alt"></i>&nbsp;&nbsp;Forum</ListItem
        >
        <ListItem to="/" class="ml-3"
          ><i class="fas fa-store"></i>&nbsp;&nbsp;Store</ListItem
        >
        <ListItem to="/" class="ml-3"
          ><i class="fas fa-street-view"></i>&nbsp;&nbsp;Communities</ListItem
        >
        <ListItem to="/" class="ml-3"
          ><i class="fas fa-users"></i>&nbsp;&nbsp;Users</ListItem
        >
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      windowWidth: process.client ? window.innerWidth : 0,
      txt: '',
    }
  },

  watch: {
    $route() {
      this.show = false
    },
  },

  mounted() {
    // This is to let the server and client sync. THIS IS IMPORTANT!
    this.show = false

    if (process.client) {
      this.$nextTick(() => {
        window.addEventListener('resize', this.onResize)
      })
    }
  },

  beforeDestroy() {
    if (process.client) {
      window.removeEventListener('resize', this.onResize)
    }
  },

  methods: {
    onResize() {
      this.windowWidth = window.innerWidth
    },
  },
}
</script>

<style>
.slide-fade-enter-active {
  transition: all 0.3s;
}
.slide-fade-leave-active {
  transition: all 0.8s;
}
.slide-fade-enter,
.slide-fade-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
