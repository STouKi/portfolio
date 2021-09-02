<template>
  <div>
    <div class="experience-elements rounded p-10 h-80">
      <NuxtLink :to="experience.page" @click.native="deactivateLinks">
        <img :src="require(`~/assets/images/logos/${experience.logo.src}`)" :alt="experience.logo.alt" />
      </NuxtLink>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    experience: {
      type: Object,
      required: true
    }
  },
  methods: {
    deactivateLinks() {
      const links = document.getElementsByClassName('anchor-links')

      links.forEach(link => {
        link.classList.remove("font-bold")
      });
    }
  }
}
</script>

<style lang="scss">
  .experience-elements
  {
    background: white;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition-duration: 0.2s;

    &:hover
    {
      box-shadow: 0px 0px 10px black;
    }
  }
</style>
