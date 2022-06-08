<script>
	export default {
		methods: {
			scrollTop() {
				let anchor = document.getElementById('home')

				anchor.scrollIntoView({
					behavior: 'smooth'
				});
			},
			handleScroll() {
				const scrollUp = document.getElementById('scroll-up');
				const scrollY = window.scrollY;

				if (scrollY >= 560) {
					scrollUp.classList.remove('hidden')
					scrollUp.classList.add('flex')
				} else {
					scrollUp.classList.add('hidden')
					scrollUp.classList.remove('flex')
				}
			}
		},
		beforeMount() {
			window.addEventListener('scroll', this.handleScroll);

			this.$store.dispatch("initTheme");
		},
		beforeDestroy() {
			window.removeEventListener('scroll', this.handleScroll);
		},
	}
</script>

<template>
  <div class="bg-gray-400 dark:bg-shade-2">
    <Header />
    <Nuxt />
    <LazyFooter />

		<a id="scroll-up" href="#" class="bg-primary fixed right-5 bottom-24 justify-center items-center rounded-full opacity-75 hidden z-30" @click.prevent="scrollTop">
			<button>
				<div class="svg-arrow-up bg-white w-10 h-10" />
			</button>
		</a>
  </div>
</template>
