<template>
  <div>
    {{ curPage }}
    <a href="" @click.prevent="changePage(curPage + 1)" v-if="curPage < pages"
      >Next</a
    >
  </div>
</template>

<script>
export default {
  props: ['total', 'take', 'page'],
  data() {
    return {
      curPage: parseInt(this.page),
      pages: Math.ceil(parseInt(this.total) / parseInt(this.take)),
    }
  },
  methods: {
    changePage(newPage) {
      let total = parseInt(this.total)
      let take = parseInt(this.take)
      let page = parseInt(this.curPage)

      let pages = Math.ceil(total / take)
      this.pages = pages

      this.$emit('changed', parseInt(newPage))
    },
  },
}
</script>

<style></style>
