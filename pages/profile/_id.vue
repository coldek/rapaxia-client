<template>
  <Grid>
    <Card class="col-span-full flex flex-row items-center border-r-0 pb-4">
      <UserImage
        :img="user.avatar.cache"
        :show-online="user.isOnline"
        headshot
        size="16"
        rounded
      />
      <div class="text-2xl ml-3 mt-1">{{ user.username }}</div>
      <div class="text-2xl">test</div>
    </Card>
    <div class="lg:col-span-2 flex flex-col">
      <Card class="mb-2"
        ><UserImage :img="user.avatar.cache" title="Avatar"
      /></Card>
    </div>
    <div class="md:col-span-2 xl:col-span-4 grid grid-cols-1 gap-1">
      <Card>
        <Tabs :tabs="['Test', 'Test2']">
          <template slot="Test"> Test </template>
          <template slot="Test2"> Test2 </template>
        </Tabs>
      </Card>
    </div>
  </Grid>
</template>

<script>
export default {
  validate() {
    return true
  },
  async asyncData({ params, $axios, error }) {
    try {
      const { data: user } = await $axios.get(`/users/${params.id}`)

      console.log(user.username[user.username.length - 1])

      return {
        user,
      }
    } catch (e) {
      error({ statusCode: 404, message: 'User not found' })
    }
  },
}
</script>

<style></style>
