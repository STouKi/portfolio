<template>
  <section id='skills' class="anchor p-4 md:p-10">
    <h2 class="text-center amatic text-5xl mb-4 md:mb-10">Compétences</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
        <SkillTechnoFamily
        v-for="(technoFamily, index) in technoFamilies" :key="index"
        :technoFamily="technoFamily" />
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      technoFamilies: [
        {
          name: "FrontEnd",
          technos: [
            {
              name: "HTML",
              progression: 100,
              color: '#d65f39'
            },
            {
              name: "SCSS",
              progression: 100,
              color: '#bb7096'
            },
            {
              name: "Tailwind CSS",
              progression: 100,
              color: '#4eb3c1'
            },
            {
              name: "Nuxt.js",
              progression: 80,
              color: '#53b78a'
            }
          ]
        },
        {
          name: "BackEnd",
          technos: [
            {
              name: "Node.js",
              progression: 80,
              color: '#3C873A'
            },
            {
              name: "PHP",
              progression: 80,
              color: '#787CB5'
            },
            {
              name: "SQL",
              progression: 60,
              color: '#F29111'
            },
            {
              name: "Laravel",
              progression: 40,
              color: '#F05340'
            }
          ]
        },
        {
          name: "CMS",
          technos: [
            {
              name: "WordPress",
              progression: 80,
              color: "#00749C"
            }
          ]
        },
        {
          name: "Autre",
          technos: [
            {
              name: "JSON",
              progression: 100,
              color: "black"
            },
            {
              name: "GitHub",
              progression: 60,
              color: "black"
            }
          ]
        },
        {
          name: "Graphisme",
          technos: [
            {
              name: "Adobe Illustrator",
              progression: 60,
              color: "#FBBB4D"
            },
            {
              name: "Adobe InDesign",
              progression: 60,
              color: "#E749A0"
            },
            {
              name: "Adobe Photoshop",
              progression: 60,
              color: "#8BC3FC"
            }
          ]
        },
        {
          name: "Vidéo",
          technos: [
            {
              name: "Adobe Premiere Pro",
              progression: 40,
              color: "#DB76FA"
            },
            {
              name: "Adobe AfterEffects",
              progression: 40,
              color: "#CF96FD"
            }
          ]
        },
        {
          name: "MAO",
          technos: [
            {
              name: "Ableton Live",
              progression: 100,
              color: "black"
            }
          ]
        }
      ]
    }
  }
}
</script>
