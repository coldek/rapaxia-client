<template>
  <Grid>
    <Card class="col-span-full flex flex-row items-center border-r-0 pb-4">
      <UserImage
        :img="user.avatar.cache"
        :show-online="user.isOnline"
        headshot
        size="50"
        rounded
      />
      <div class="text-2xl ml-3 flex-grow">
        {{ user.username }}
        <hr class="divider" />
        <span class="text-base"
          ><i class="fas fa-quote-left text-xs text-main-background mr-2"></i
          ><i>Among us</i
          ><i class="fas fa-quote-right text-xs text-main-background ml-2"></i
        ></span>
      </div>
    </Card>
    <div class="lg:col-span-2 flex flex-col">
      <Card class="mb-2 text-center">
        <UserImage :img="user.avatar.cache" title="Avatar"
      /></Card>
      <Card heading="Currently wearing"> Under construction </Card>
    </div>
    <div class="md:col-span-2 xl:col-span-4 grid grid-cols-1 gap-1">
      <Card>
        <Tabs :tabs="['Info', 'Friends', 'Communities']">
          <template slot="Info"> Test </template>
          <template slot="Friends"> Test3 </template>
          <template slot="Communities"> Test2 </template>
        </Tabs>
      </Card>
    </div>
    <Card heading="Inventory" class="col-span-full"></Card>
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
