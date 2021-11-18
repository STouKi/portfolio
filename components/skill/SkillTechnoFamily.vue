<template>
  <div :class="[active ? 'skill-open' : 'skill-close']">
		<header class="flex justify-between cursor-pointer" @click='toggleSkill'>
			<div class="flex">
				<div :class="technoFamily.icon" class="w-10 h-10 bg-primary dark:bg-tint-2 mr-3" />
				<h4 class="amatic text-3xl mb-5 dark:text-tint-2">{{ technoFamily.name }}</h4>
			</div>

			<div class="svg-angle-down bg-primary dark:bg-tint-2 w-10 h-10" />
		</header>

		<div>
			<div v-for="(techno, index) in technoFamily.technos" :key="index">
				<div class="flex mb-2 items-center justify-between" >
					<div>
						<span class="rounded-full" :style="{ color: techno.color }">
							{{ techno.name }}
						</span>
					</div>
					<div>
						<span class="text-xs" :style="{ color: techno.color }">
							{{ techno.progression }}%
						</span>
					</div>
				</div>

				<div class="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
					<div :style="{ backgroundColor: techno.color, width: techno.progression + '%' }" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center"></div>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
	export default {
		props: {
			technoFamily: {
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
			toggleSkill() {
				this.active = (this.active === false) ? true : false;
			}
		}
	}
</script>

<style lang="scss">
	.svg-angle-down {
		transition-duration: 0.5s;
	}

	.skill-open {
		> div {
			height: max-content;
		}

		.svg-angle-down {
			transform: rotate(-180deg);
		}
	}

	.skill-close {
		> div {
			height: 0;
			overflow: hidden;
		}

		.svg-angle-down {
			transform: rotate(0deg);
		}
	}
</style>
