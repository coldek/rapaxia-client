<template>
  <modal name="login" height="auto" classes="text-white" adaptive>
    <Centered>
      <Card heading="Login">
        <Form :submit="submit">
          <Input placeholder="Username" @input="(val) => (username = val)" />
          <Input
            placeholder="Password"
            type="password"
            @input="(val) => (password = val)"
          />
          <Input type="submit" :loading="loading" />
        </Form>
      </Card>
    </Centered>
  </modal>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      loading: false,
    }
  },
  methods: {
    async submit() {
      if (this.username.length === 0 || this.password.length === 0) {
        this.$notify('All fields are required.')
        return
      }

      if (this.loading) return

      this.loading = true

      let { username, password } = this
      try {
        const protectedRoutes = ['/']
        if (!protectedRoutes.includes(this.$nuxt.$route.path)) {
          const oldRedirect = this.$auth.options.redirect
          this.$auth.options.redirect = false
          this.$auth.options.rewriteRedirects = oldRedirect
        }
        let data = await this.$auth.loginWith('local', {
          data: {
            username,
            password,
          },
        })
      } catch ({ response }) {
        response.data.message.forEach((error) => this.$notify(error))
      }

      this.loading = false
    },
  },
}
</script>

<style></style>
