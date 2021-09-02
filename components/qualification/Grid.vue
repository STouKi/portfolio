<template>
	<section id="qualifications" class="anchor p-4 md:p-10 bg-gray-200">
		<h2 class="text-center amatic text-5xl mb-4 md:mb-10">Formations</h2>

		<QualificationItem
		v-for="(qualification, index) in qualifications" :key="index"
		:qualification="qualification"
		:index= index
		:qualificationsLength= qualifications.length />
	</section>
</template>

<script>
	export default {
		data() {
			return {
				qualifications: [
					{
						name: 'Licence Développement Front-End',
						location: 'OpenClassroom',
						duration: '2020'
					},
					{
						name: 'BTS SIO',
						location: 'Lycée Victor Duruy, Tarbes',
						duration: '2018'
					},
					{
						name: 'Bac Pro SEN',
						location: 'Lycée Saint Pierre - Tarbes',
						duration: '2014'
					}
				]
			}
		}
	}
</script>
