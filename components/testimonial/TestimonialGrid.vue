<template>
  <section id="testimonials" class="container anchor p-4">
    <div class="title-section">
			<h2>Témoignages</h2>
			<h3>Ce que disent mes clients</h3>
		</div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
      <TestimonialDetail
      v-for="(testimonial, index) in testimonials" :key="index"
      :testimonial="testimonial" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
				{
          title: 'Adrien Devillers',
          text: `
            Quentin a fait preuve d'efficacité et d'écoute et a su s'adapter à nos besoins au fil du projet.
						<br />
						Celui-ci a été livré dans les temps et le résultat a été très satisfaisant.
          `,
					gender: 'male',
					src: 'adrien-devillers'
        },
        {
          title: 'M. TOUYA',
          text: `
            Rapide et pro.
            <br />
            Merci.
          `,
					gender: 'male',
					src: 'touya'
        },
        {
          title: 'Laurent Touati',
          text: `
            Répond facilement à la demande.
            <br />
            Exécute les tâches demandées.
            <br />
            Le site qu'il nous a livré répond clairement aux attentes de l'entreprise qui fait essentiellement de la vente à emporter.
            <br />
            La présentation est parfaite et encore mieux que ce que l'on imaginait.
            <br />
            Il réussit à faire un site qui s'intègre parfaitement au thème et à la culture de la société.
            <br />
            Le prix de la livraison est très attractif.
          `,
					gender: 'male',
					src: 'laurent-touati'
        }
      ]
    }
  }
}
</script>
