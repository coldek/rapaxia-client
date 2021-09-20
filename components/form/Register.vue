<template>
  <Centered>
    <Card heading="Register">
      <Error :errors="errors" />

      <Form :submit="submit">
        <Input placeholder="Username" @input="(val) => (username = val)" />
      </Form>
    </Card>
  </Centered>
</template>

<script>
export default {
  data() {
    return {
      username: '',
    }
  },
  methods: {
    async submit() {},
  },
}
</script>

<style></style>
