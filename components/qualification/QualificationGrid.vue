<template>
	<section id="qualifications" class="anchor p-4 md:p-10 dark:bg-shade-2">
		<div class="title-section">
			<h2>Qualifications</h2>
			<h3>Mon parcours</h3>
		</div>

		<div class="tab-container">
      <div class="tab" @click="activateTab('education')" :class="{ 'tab-active': activeTab === 'education' }">
        <div class="svg-graduation-cap" />
        <span>Scolarité</span>
      </div>

      <div class="tab" @click="activateTab('work')" :class="{ 'tab-active': activeTab === 'work' }">
        <div class="svg-suitcase" />
        <span>Emplois</span>
      </div>
		</div>

		<QualificationItem
		v-show="activeTab === 'education'"
		v-for="(qualification, index) in qualifications.education" :key="index"
		:qualification="qualification"
		:index= index
		:qualificationsLength= qualifications.education.length />

		<QualificationItem
		v-show="activeTab === 'work'"
		v-for="(qualification, index) in qualifications.work" :key="index"
		:qualification="qualification"
		:index= index
		:qualificationsLength= qualifications.work.length />
	</section>
</template>

<script>
	export default {
		data() {
			return {
				activeTab: 'education',
				qualifications: {
					education: [
						{
							name: 'Licence Dev Front-End',
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
					],
					work: [
						{
							name: 'Développeur WordPress',
							location: 'Réassurez-moi, Paris',
							duration: '07-08/2021'
						},
						{
							name: 'Refonte WordPress',
							location: 'Allegro Amabile, Cannes',
							duration: '05-06/2021'
						},
						{
							name: 'Développeur Vue.js / Node.js',
							location: 'Assistel, Paris',
							duration: '10/2020 - 03/2021'
						},
						{
							name: 'Développeur WordPress',
							location: 'PMS Expertise, Besançon',
							duration: '08/2020'
						},
						{
							name: 'Développeur WordPress',
							location: 'PMS Showroom, Besançon',
							duration: '06/2020'
						},
						{
							name: 'Graphiste',
							location: 'TOUYA Environnement',
							duration: '10/12/2019'
						},
						{
							name: 'Refonte WordPress',
							location: 'By Mathilda',
							duration: '09/2019'
						},
						{
							name: 'Développeur PHP',
							location: 'CRCA, Serres-Castet',
							duration: '03-07/2019'
						},
						{
							name: 'Développeur WordPress / Graphiste',
							location: 'Quad In Paris, Paris',
							duration: '11/2018'
						},
						{
							name: 'Développeur web',
							location: 'Pain Bayard, Paris',
							duration: '09/2018'
						},
						{
							name: 'Refonte WordPress',
							location: 'Achat Groupé',
							duration: '06/2018'
						},
						{
							name: 'Développeur web',
							location: "Communauté d'Agglomération Tarbes Lourdes Pyrénées, Tarbes",
							duration: '01-02/2018'
						},
						{
							name: 'Technicien de maintenance informatique et réseau',
							location: 'E.P.I, Campan',
							duration: '02-05/2014'
						},
						{
							name: 'Technicien de maintenance informatique et réseau',
							location: 'Centre Hospitalier, Bagnères-de-Bigorre',
							duration: '05-06/2013'
						},
						{
							name: 'Technicien de maintenance informatique',
							location: '2iRS, Tarbes',
							duration: '12/2011'
						}
					],
				}
			}
		},
		methods: {
			activateTab(tab) {
				this.activeTab = tab;
			}
		}
	}
</script>

<style lang="scss" scoped>
	.tab:hover, .tab-active {
		div {
			background-color: $primary;
		}

		span {
			color: $primary;
		}
	}
</style>
