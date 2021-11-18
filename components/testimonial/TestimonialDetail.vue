<template>
  <div class="bg-white dark:bg-shade-1 p-5 rounded">
		<div class="flex items-center mb-4">
			<img :data-src="require(`~/assets/images/pictures/${testimonial.src}.jpeg`)" :alt="'Photo de ' + testimonial.title" width="50" height="50" class="rounded-full mr-3 lazyload" />
    	<p class="text-2xl dark:text-tint-2">{{ testimonial.title }}</p>
		</div>

    <p class="text-gray-700 dark:text-tint-2" v-html="testimonial.text" />
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
