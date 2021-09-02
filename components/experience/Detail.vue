<template>
  <div class="experience p-10">
    <h1 class="text-center amatic text-5xl mb-10">{{ title }}</h1>

    <div class="grid grid-cols-1 lg:grid-cols-2">
      <div class="p-3 bg-white rounded">
        <div class="mb-10">
          <h2 class="amatic text-3xl mb-5">💼 Poste</h2>

          <p>{{ job }}</p>
        </div>

        <div class="mb-10">
          <h2 class="amatic text-3xl mb-5">⏳ Durée</h2>

          <p>{{ duration }}</p>
        </div>

        <div class="mb-10">
          <h2 class="amatic text-3xl mb-5">❔ Infos</h2>

          <p>{{ activity }}</p>
        </div>

        <div>
          <h2 class="amatic text-3xl mb-5">🛠 Technologies et outils utilisés</h2>

          <div class="flex items-center flex-wrap">
            <img
            v-for="(technologyTool, index) in technologiesTools" :key="index"
            :src="require(`~/assets/images/icons/${technologyTool.name}`)"
            :alt="technologyTool.alt"
            width="50"
            class="mr-1 mb-1"/>
          </div>
        </div>
      </div>

      <div class="hidden lg:flex items-center justify-center">
        <img :src="require(`~/assets/images/logos/${companyLogo.name}`)" :alt="companyLogo.alt" width="500" />
      </div>
    </div>

  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    job: {
      type: String,
      required: true
    },
    duration: {
      type: String,
      required: true
    },
    activity: {
      type: String,
      required: true
    },
    technologiesTools: {
      type: Array,
      required: true
    },
    companyLogo: {
      type: Object,
      required: true
    }
  }
}
</script>
