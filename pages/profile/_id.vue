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
        <span class="text-base block"
          ><i class="fas fa-quote-left text-xs text-main-accent2 mr-2"></i
          ><b>{{ user.status }}</b
          ><i class="fas fa-quote-right text-xs text-main-accent2 ml-2"></i
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
          <template slot="Info">
            <b>Biography</b><br />
            {{ user.bio }}
            <hr class="divider" />
            <div class="grid grid-cols-4">
              <div>
                <b>Joined</b><br />{{
                  $moment(user.created).format('MMM YYYY')
                }}
              </div>
              <div><b>User ID</b><br />{{ user.id }}</div>
              <div><b>Total Posts</b><br />0</div>
              <div><b>Last Seen</b><br />Just now</div>
            </div>
          </template>
          <template slot="Friends"> <FriendMany :user="user" /> </template>
          <template slot="Communities">
            <CommunityProfile :user="user" />
          </template>
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
