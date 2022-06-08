<template>
  <section id="services" class="container anchor p-4">
    <div class="title-section">
			<h2>Services</h2>
			<h3>Ce que je propose</h3>
		</div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
      <ServiceLink
      v-for="(service, index) in services" :key="index"
      :service="service" />
    </div>
  </section>
</template>

<script>
	export default {
		data() {
			return {
				services: [
					{
						name: 'Front-End Dev',
						description: [
							'Intégration de maquette',
							'Conception de l\'interface utilisateur',
							'Responsive Design',
						],
						icon: 'svg-brackets'
					},
					{
						name: 'Back-End Dev',
						description: [
							'Communication avec une base de données',
							'Mise en place d\'une API REST',
						],
						icon: 'svg-backend'
					},
					{
						name: 'Graphisme',
						description: [
							'Création de logos',
							'Conception de flyers',
							'Élaboration de cartes de visite'
						],
						icon: 'svg-color-palette'
					},
				]
			}
		}
	}
</script>
