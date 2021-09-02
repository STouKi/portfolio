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
    title: "Quentin Sastourné - Portfolio - Crédit Agricole",
  },
  data() {
    return {
      title: "Crédit Agricole",
      job: "Développeur PHP",
      duration: "6 mois",
      activity: "Développement des applications intranet avec le framework PHP de l'entreprise",
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
          name: 'bootstrap.svg',
          alt:'Logo de Bootstrap'
        },
        {
          name: 'materialize.svg',
          alt: 'Logo de Materialize'
        },
        {
          name: 'php.svg',
          alt: 'Logo de PHP'
        },
        {
          name: 'sql-server.svg',
          alt: 'Logo de SQLServer'
        },
        {
          name: 'atom.svg',
          alt: 'Logo de Atom'
        }
      ],
      companyLogo: {
        name: 'credit-agricole.svg',
        alt: "Logo du Crédit Agricole"
      }
    }
  }
}
</script>

