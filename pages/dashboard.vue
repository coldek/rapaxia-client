<template>
  <div>
    <Heading>Welcome, {{ $auth.user.username }}</Heading>
    <Grid>
      <div class="lg:col-span-2 flex flex-col">
        <Card class="mb-2"><UserImage :img="$auth.user.avatar.cache" /></Card>
        <Card heading="Announcements"></Card>
      </div>

      <!-- Right side -->
      <div class="md:col-span-2 xl:col-span-4 grid grid-cols-1 gap-1">
        <Card heading="Friends">
          <div class="flex flex-row flex-nowrap overflow-x-auto mt-4">
            <FriendMany :user="$auth.user" />
          </div>
        </Card>
        <Card heading="Friend Activity">test</Card>
      </div>
    </Grid>
  </div>
</template>

<script>
export default {}
</script>
