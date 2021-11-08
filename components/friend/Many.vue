<template>
  <div class="flex flex-wrap">
    <UserCard v-for="friend in friends[0]" :key="friend.id" :user="friend" />
    <Paginate />
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  props: ['user'],
  data() {
    return {
      friends: [],
    }
  },
  methods: {
    async populate(page) {
      let { data } = await this.$axios.get(
        `friends/user/${this.user.id}?page=${page}&limit=10`
      )
      this.friends = data
    },
  },
  async created() {
    await this.populate(1)
  },
}
</script>

<style></style>
