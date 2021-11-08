<template>
  <Grid>
    <div class="col-span-full lg:col-span-1">
      <ListItem
        :to="`/community/${community.slug}/info`"
        class="block text-center"
      >
        Info
      </ListItem>
      <ListItem
        :to="`/community/${community.slug}/posts`"
        class="block text-center"
      >
        Posts
      </ListItem>
    </div>
    <div class="col-span-full lg:col-span-3 xl:col-span-5">
      <NuxtChild :community="community" />
    </div>
  </Grid>
</template>

<script>
export default {
  async asyncData({ params, $axios, error }) {
    try {
      let { data } = await $axios.get(`/community/${params.slug}/info`)

      return {
        community: data,
      }
    } catch (e) {
      error({ statusCode: 404, message: 'Community was not found.' })
    }
  },
}
</script>

<style></style>
