<template>
  <div class="flex flex-col">
    <NuxtLink
      v-for="member in communities[0]"
      :key="member.id"
      :to="`/community/${member.community.slug}/info`"
      class="grid grid-cols-6 gap-1"
    >
      <img
        :src="`${$config.imageServer}image/${member.community.image.src}.png`"
        alt=""
        class="col-span-1"
      />
      <div class="col-span-3 leading-5">
        <span class="text-xl"
          ><b>{{ member.community.title }}</b></span
        >
        <span class="text-sm text-main-accent2"
          ><i>/{{ member.community.slug }}</i></span
        ><br />{{ member.community.description }}
      </div>
      <div class="col-span-2 text-center">
        Role: <b>{{ member.role.name }}</b> <br />
        Joined:
        <b>{{ $moment(member.joined).format('MMM YYYY') }}</b>
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['user'],
  data() {
    return {
      communities: [],
    }
  },
  methods: {
    async populate(page) {
      let { data } = await this.$axios.get(
        `/community/${this.user.id}/show?page=${page}&limit=5`
      )
      console.log(data)
      this.communities = data
    },
  },
  async created() {
    await this.populate(1)
  },
}
</script>

<style></style>
