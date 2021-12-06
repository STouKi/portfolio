<template>
  <div :style="{ background: `${project.background.color}` }" class="portfolio-elements rounded h-80">
    <img :data-src="require(`~/assets/images/logos/${project.img}`)" :alt="'Logo de ' + project.name" class="w-3/6 lazyload" />

    <a :href="project.href" target="blank">
      <div class="card ">
        <button>
					<div v-if="type === 'webDev'" id="link-svg" />
					<div v-else id="magnifying-glass-svg" />
        </button>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    },
		type: {
			type: String,
			required: true
		}
  }
}
</script>

<style lang="scss">

	#link-svg {
		mask: url('@/assets/images/icons/link.svg') no-repeat center / contain;
		-webkit-mask: url('@/assets/images/icons/link.svg') no-repeat center / contain;
	}

	#magnifying-glass-svg {
		mask: url('@/assets/images/icons/magnifying-glass.svg') no-repeat center / contain;
		-webkit-mask: url('@/assets/images/icons/magnifying-glass.svg') no-repeat center / contain;
	}

  .portfolio-elements {
    display: flex;
    justify-content: center;
    align-items: center;
    background-size: cover;
    position: relative;
  }

  .card {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    opacity: 0;
    background-color: $shade-2;
		border-radius: 0;
    @apply duration-100;

    button {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: $primary;
      border: none;
      border-radius: 100%;
      width: 50px;
      height: 50px;
      margin-right: 30px;
      @apply duration-100;

			div {
				background-color: white;
				width: 25px;
				height: 25px;
			}
    }

    &:hover {
      opacity: 0.8;

      button {
        margin-right: 0;
      }
    }
  }
</style>
