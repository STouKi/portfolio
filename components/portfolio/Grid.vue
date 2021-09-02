<template>
  <section id="portfolio" class="anchor bg-black p-4 md:p-10">
		<div class="flex justify-center mb-5">
      <div class="flex mr-5 portfolio-tab" @click="activateTab('webDev')" :class="{ active: activeTab === 'webDev' }">
        <div id="brackets-svg" class="mr-3" />
        <span class="amatic text-4xl">Développement web</span>
      </div>

      <div class="flex portfolio-tab" @click="activateTab('graphism')" :class="{ active: activeTab === 'graphism' }">
        <div id="color-palette-svg" class="mr-3"  />
        <span class="amatic text-4xl">Graphisme</span>
      </div>
		</div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
			<PortfolioProject
			v-show="activeTab === 'webDev'"
			v-for="(project, index) in projects.webDev" :key="index"
			:project="project"
			:type="'webDev'"
			/>

			<PortfolioProject
			v-show="activeTab === 'graphism'"
			v-for="(project, index) in projects.graphism" :key="index"
			:project="project"
			:type="'graphism'"
			/>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
			activeTab: 'webDev',
      projects: {
        webDev: [
          {
            name: 'Assistel',
            background: {
              color: 'rgba(255, 255, 255, 1)',
              image: "assistel"
            },
            img: 'assistel-logo.png',
            href: 'https://domiciliation.assistel.paris'
          },
          {
            name: 'PMS Expertise',
            background: {
              color: 'rgba(255, 255, 255, 1)',
              image: "pms-expertise"
            },
            img: 'pms/pms-expertise-logo.svg',
            href: 'https://pmsexpertise.com'
          },
          {
            name: 'PMS Showroom',
            background: {
              color: 'rgba(255, 255, 255, 1)',
              image: "pms-showroom"
            },
            img: 'pms/pms-showroom-logo.png',
            href: 'https://pms-showroom.com'
          },
          {
            name: 'the FOOD place to be',
            background: {
              color: 'rgba(255, 255, 255, 1)',
              image: "thefoodplacetobe"
            },
            img: 'thefoodplacetobe.svg',
            href: 'https://thefoodplacetobe.quentin-sastourne.com'
          },
          {
            name: 'By Mathilda',
            background: {
              color: 'rgba(255, 255, 255, 1)',
              image: "by-mathilda"
            },
            img: 'by-mathilda-logo.png',
            href: 'https://bymathilda.com'
          },
          {
            name: 'JFighterS',
            background: {
              color: 'white',
              image: 'url("../../images/textures/pow-star.png")'
            },
            img: 'jfighters.svg',
            href: 'https://jfighters.quentin-sastourne.com'
          },
          {
            name: 'Les Films de Plein Air',
            background: {
              color: 'rgba(36, 54, 87, 1)',
              image: "lesfilmsdepleinair"
            },
            img: 'lesfilmsdepleinair.svg',
            href: 'https://lesfilmsdepleinair.quentin-sastourne.com'
          },
          {
            name: 'Chalets & Caviar',
            background: {
              color: 'rgba(25, 25, 25, 1)',
              image: "chalets-caviar"
            },
            img: 'chalets-caviar-logo.png',
            href: 'https://chalets-caviar.quentin-sastourne.com'
          },
          {
            name: 'Pain Bayard',
            background: {
              color: 'rgba(32, 203, 203, 1)',
              image: "pain-bayard"
            },
            img: 'pain-bayard-logo.png',
            href: 'https://painbayard.fr'
          },
          {
            name: 'Quad In Paris',
            background: {
              color: 'rgba(255, 255, 255, 1)',
              image: "quad-in-paris"
            },
            img: 'quad-in-paris.svg',
            href: 'https://quadinparis.com'
          },
          {
            name: 'Achat Groupé',
            background: {
              color: 'rgba(255, 255, 255, 1)',
              image: "achat-groupe"
            },
            img: 'achat-groupe-logo.png',
            href: 'https://achat-groupe.com'
          }
        ],
        graphism: [
          {
            name: 'Touya Environnement',
            background: {
              color: 'white',
              image: ''
            },
            img: 'touya/touya-transparent.png',
            href: 'https://touya-environnement.com'
          },
					{
            name: 'the FOOD place to be',
            background: {
              color: 'rgba(255, 255, 255, 1)',
              image: ""
            },
            img: 'thefoodplacetobe.svg',
            href: 'https://thefoodplacetobe.quentin-sastourne.com'
          },
					{
            name: 'JFighterS',
            background: {
              color: 'white',
              image: 'url("../../images/textures/pow-star.png")'
            },
            img: 'jfighters.svg',
            href: 'https://jfighters.quentin-sastourne.com'
          },
          {
            name: 'Les Films de Plein Air',
            background: {
              color: 'rgba(36, 54, 87, 1)',
              image: ""
            },
            img: 'lesfilmsdepleinair.svg',
            href: 'https://lesfilmsdepleinair.quentin-sastourne.com'
          },
          {
            name: 'Chalets & Caviar',
            background: {
              color: 'rgba(25, 25, 25, 1)',
              image: ""
            },
            img: 'chalets-caviar-logo.png',
            href: 'https://chalets-caviar.quentin-sastourne.com'
          },
          {
            name: 'Pain Bayard',
            background: {
              color: 'rgba(32, 203, 203, 1)',
              image: ""
            },
            img: 'pain-bayard-logo.png',
            href: 'https://painbayard.fr'
          },
					{
            name: 'Quad In Paris',
            background: {
              color: 'white',
              image: ''
            },
            img: 'quad-in-paris.svg',
            href: 'https://quadinparis.com'
          },
        ]
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
	#color-palette-svg {
		mask: url('@/assets/images/icons/color-palette.svg') no-repeat center / contain;
		-webkit-mask: url('@/assets/images/icons/color-palette.svg') no-repeat center / contain;
	}

	#brackets-svg {
		mask: url('@/assets/images/icons/brackets.svg') no-repeat center / contain;
		-webkit-mask: url('@/assets/images/icons/brackets.svg') no-repeat center / contain;
	}

  .portfolio-tab {
    cursor: pointer;

		div, span {
			transition-duration: 0.1s;
		}

		div {
			background-color: gray;
			width: 40px;
			height: 40px;
		}

    span {
      color: gray;
    }

    &:hover {
			div {
				background-color: white;
			}
      span {
        color: white;
      }
    }
  }

  .active {
		div {
			background-color: white;
		}

		span {
			color: white;
		}
  }
</style>
