<template>
  <div class="p-5 rounded">
    <p class="text-2xl mb-4">{{ testimonial.title }}</p>

    <p class="text-gray-700" v-html="testimonial.text" />
  </div>
</template>

<script>
export default {
  props: {
    testimonial: {
      type: Object,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
  div
  {
    background: white;
  }
</style>
