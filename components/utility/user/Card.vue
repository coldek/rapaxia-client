<template>
  <!-- -->
  <NuxtLink :to="`/profile/${user.id}`" class="text-center flex-none w-24">
    <UserImage :img="user.avatar.cache" rounded headshot show-online />
    <p :title="user.username" class="truncate">
      {{ user.username }}
    </p>
  </NuxtLink>
</template>

<script>
export default {
  props: ['user'],
}
</script>

<style></style>
