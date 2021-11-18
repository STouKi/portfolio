<template>
	<div class="bg-white dark:bg-shade-1 rounded p-10 h-80 flex flex-col justify-between">
		<div :class='service.icon' class='w-10 h-10 bg-primary dark:bg-tint-2' />

		<h4 class="text-4xl dark:text-white">{{ service.name }}</h4>

		<button class="cursor-pointer dark:text-tint-2 primary flex items-center duration-150 hover:pl-1 w-max" @click='openModal'>
			En savoir plus
			<div class="svg-angle-double-right w-10 h-10 bg-primary dark:bg-tint-2"  />
		</button>

		<div class="modal-service" :class="[active ? 'modal-active' : '']" @click='closeModal'>
			<div>
				<h4 class="text-3xl">{{ service.name }}</h4>
				<button @click='closeModal'>
					<div class="svg-times w-5 h-5" />
				</button>

				<ul>
					<li v-for="(description, index) in service.description" :key="index" class="flex items-center">
						<div class="svg-check-circle bg-primary w-5 h-5 mr-3" />
						{{ description }}
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  props: {
    service: {
      type: Object,
      required: true
    }
  },
	data() {
		return {
			active: false
		}
	},
	methods: {
		openModal() {
			this.active = (this.active === false) ? true : false;
		},
		closeModal() {
			this.active = false;
		}
	}
}
</script>

<style lang="scss">
	.svg-times {
		background-color: gray;

		&:hover {
			background-color: black;
		}
	}
</style>
