<template>
  <div>
    <div class="flex mb-2">
      <div
        :class="`flex-1 text-center text-xl border-main-accent2 border-opacity-0  hover:border-opacity-100 border-b-2 cursor-pointer ${
          slot.isActive ? 'text-main-accent2' : ''
        }`"
        v-for="slot in slots"
        :key="slot.title"
        @click="changeTab(slot.title)"
      >
        {{ slot.title }}
      </div>
    </div>

    <template v-for="slot in slots">
      <div :key="slot.title" v-if="slot.isActive">
        <slot :name="slot.title" />
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
    },
  },
  data() {
    const slots = this.$props.tabs.map((tab) => {
      return {
        title: tab,
        isActive: false,
      }
    })

    slots[0].isActive = true

    return {
      slots,
    }
  },
  methods: {
    changeTab(tab) {
      this.slots = this.slots.map(({ title }) => {
        return {
          title,
          isActive: tab === title,
        }
      })
    },
  },
}
</script>

<style></style>
