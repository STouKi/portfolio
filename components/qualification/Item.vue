<template>
	<div class="qualification-data">
		<div v-if="index % 2 != 0" />
		<div v-if="index % 2 != 0">
			<span class="qualification-rounder" />
			<span v-if="index < qualificationsLength - 1" class="qualification-line" />
		</div>

		<div class="flex flex-col" :class="flexEnd">
			<span>{{ qualification.name }}</span>
			<span class="text-sm text-gray-700">{{ qualification.location }}</span>

			<div class="flex">
				<div id="calendar-svg" class="mr-1" />
				<span class="text-xs text-gray-500">{{ qualification.duration }}</span>
			</div>
		</div>

		<div v-if="index % 2 == 0">
			<span class="qualification-rounder" />
			<span v-if="index < qualificationsLength - 1" class="qualification-line" />
		</div>
		<div v-if="index % 2 == 0" />
	</div>
</template>

<script>
	export default {
		props: {
			qualification: {
				type: Object,
				required: true
			},
			index: {
				type: Number,
				required: true
			},
			qualificationsLength: {
				type: Number,
				required: true
			}
		},
		computed: {
			flexEnd() {
				if (this.index % 2 == 0) {
					return "items-end"
				}
			}
		}
	}
</script>

<style lang="scss">
	#calendar-svg {
		mask: url('@/assets/images/icons/calendar.svg') no-repeat center / contain;
		-webkit-mask: url('@/assets/images/icons/calendar.svg') no-repeat center / contain;
		background-color: gray;
		width: 15px;
		height: 15px;
	}

	.qualification-data {
		display: grid;
		grid-template-columns: 1fr max-content 1fr;
		column-gap: 1.5rem;
	}

	.qualification-rounder {
		display: inline-block;
		width: 13px;
		height: 13px;
		background-color: black;
		border-radius: 50%;
	}

	.qualification-line {
		display: block;
		width: 1px;
		height: 100%;
		background-color: black;
		transform: translate(6px, -7px);
	}
</style>

