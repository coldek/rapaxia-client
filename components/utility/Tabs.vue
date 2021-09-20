<template>
  <div>
    <div class="flex">
      <div v-for="slot in $props.tabs" :key="slot" @click="changeTab(slot)">
        {{ slot }}
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
