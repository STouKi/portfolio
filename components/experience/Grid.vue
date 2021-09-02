<template>
  <section id="experiences" class="anchor p-4 md:p-10 bg-gray-400">
    <h2 class="text-center text-white amatic text-5xl mb-4 md:mb-10">Experiences</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
      <ExperienceLink
      v-for="(experience, index) in experiences" :key="index"
      :experience="experience" />
    </div>
  </section>
</template>

<script>
	export default {
		data() {
			return {
				experiences: [
					{
						page: '/credit-agricole',
						logo: {
							src: 'credit-agricole.svg',
							alt: 'Logo du Crédit Agricole'
						}
					},
					{
						page: '/commu-agglo-tlp',
						logo: {
							src: 'communaute-agglo-tlp.png',
							alt: "Logo de la Communauté d'Agglomération Tarbes Lourdes Pyrénées"
						}
					}
				]
			}
		}
	}
</script>
