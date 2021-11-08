<template>
  <div class="grid grid-cols-3 md:grid-cols-5 gap-1">
    <div class="col-span-1 flex flex-col text-center">
      <Card>
        <img
          :src="`${$config.imageServer}/image/${community.image.src}.png`"
          alt=""
        />
        <hr class="divider" />
        <b>Owner:</b><br />
        <UserCard :user="community.creator" />
      </Card>
      <Card class="mt-1 text-left">
        <span class="block"><b>Statistics</b></span>
        <hr class="divider" />
        <b>Created:</b> {{ $moment(community.created).format('MMM YYYY') }}
        <b>Members:</b> {{ community.members }}
      </Card>
    </div>
    <div class="col-span-2 md:col-span-4 flex flex-col gap-1">
      <Card class="h-80">
        <span class="text-2xl"
          ><b>{{ community.title }}</b></span
        >
        <hr class="divider" />
        <p>{{ community.description }}</p>
      </Card>
      <Card heading="Members">
        <CommunityMembers :community="community" />
      </Card>
    </div>
  </div>
</template>

<script>
export default {
  props: ['community'],
  data() {
    return {
      trigger: false,
    }
  },
}
</script>

<style></style>
