<template>
  <modal name="login" height="auto" classes="text-white" adaptive>
    <Centered>
      <Card heading="Login">
        <Error :errors="errors" />

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
      errors: [],
      username: '',
      password: '',
      loading: false,
    }
  },
  methods: {
    async submit() {
      if (this.username.length === 0 || this.password.length === 0) {
        this.errors = ['All fields are required.']
        return
      }

      if (this.loading) return

      this.loading = true

      let { username, password } = this
      try {
        const oldRedirect = this.$auth.options.redirect
        this.$auth.options.redirect = false
        let data = await this.$auth.loginWith('local', {
          data: {
            username,
            password,
          },
        })
        this.$auth.options.rewriteRedirects = oldRedirect
      } catch ({ response }) {
        this.errors = response.data.message
      }

      this.loading = false
    },
  },
}
</script>

<style></style>
