<template>
  <ExperienceDetail
  :title="title"
  :job="job"
  :duration="duration"
  :activity="activity"
  :technologiesTools="technologiesTools"
  :companyLogo="companyLogo"
  />
</template>

<script>
export default {
  head: {
    title: "Quentin Sastourné - Portfolio - Communauté d'Agglomération Tarbes Lourdes Pyrénées"
  },
  data() {
    return {
      title: "Communauté d'Aggolmération Tarbes Lourdes Pyrénées",
      job: "Développeur web",
      duration: "3 mois",
      activity: "Développement d'un site de partage de fichiers et messagerie privée pour le Conservatoire Henri Duparc de Tarbes",
      technologiesTools: [
        {
          name: 'html.svg',
          alt: 'Logo de HTML'
        },
        {
          name: 'css.svg',
          alt: 'Logo de CSS'
        },
        {
          name: 'js.svg',
          alt: 'Logo de JavaScript'
        },
        {
          name: 'jquery.svg',
          alt: 'Logo de jQuery'
        },
        {
          name: 'php.svg',
          alt: 'Logo de PHP'
        },
        {
          name: 'mysql.svg',
          alt: 'Logo de MySQL'
        },
        {
          name: 'atom.svg',
          alt: 'Logo de Atom'
        }
      ],
      companyLogo: {
        name: 'communaute-agglo-tlp.png',
        alt: "Logo de la Communauté d'Agglomération Tarbes Lourdes Pyrénées"
      }
    }
  }
}
</script>
