<template>
  <div>
    <div class="block mb-2">
      <Drop :options="roles" @changed="populate" />
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
      <UserCard v-for="member in members" :key="member.id" :user="member" />
    </div>
    <Paginate
      :total="total"
      take="1"
      page="1"
      @changed="(page) => populate(curRole, page)"
    />
  </div>
</template>

<script>
export default {
  props: ['community', 'page'],
  watchQuery: ['page'],
  data() {
    return {
      roles: this.community.roles.map((role) => role.name),
      members: [],
      total: 0,
      curRole: 0,
    }
  },
  methods: {
    async populate(roleArg, page = 1) {
      let role = this.community.roles[roleArg]

      this.curRole = roleArg

      let { data } = await this.$axios.get(
        `/community/role/${role.id}/members?page=${page}&limit=12`
      )

      this.members = data[0].map((member) => member.user)

      this.total = data[1]
    },
  },
  async created() {
    await this.populate(
      this.community.roles.findIndex(
        (role) => role.id == this.community.defaultRoleId
      )
    )
  },
}
</script>

<style></style>
