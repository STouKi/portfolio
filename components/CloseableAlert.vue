<template>
  <div class="p-5 rounded mt-5" :class="alertStyle">
    <button type="button" @click="$emit('close-alert')">
      <p>X</p>
    </button>
    <p>{{ alert }}</p>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      required: true
    },
    alert: {
      type: String,
      required: true
    }
  },
  computed: {
    alertStyle() {
      if (this.type === 'warning') {
        return "bg-yellow-500"
      } else if (this.type === 'success') {
        return "bg-green-500"
      } else {
        return "bg-red-500"
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  div
  {
    position: relative;
  }

  button
  {
    position: absolute;
    right: 30px;
  }
</style>
