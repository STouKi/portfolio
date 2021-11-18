<template>
  <section id="home" class="flex flex-col justify-center items-center min-h-screen">
    <img data-src="~/assets/images/logos/quentin-sastourne/quentin-sastourne.svg" alt="Quentin Sastourné : Dev web - Graphiste" class="w-3/5 lg:w-2/5 lazyload" />

    <img data-src="~/assets/images/shape-divider.png" alt="Divider" class="absolute bottom-0 left-auto lazyload" />

    <a @click="scrollToPortfolio" class="cursor-pointer flex flex-col items-center text-white absolute bottom-0 pb-1 md:pb-5 xl:pb-10">
      <h2 class="mb-1 md:mb-5 xl:mb-10 sm:text-5xl text-2xl"> Portfolio </h2>
			<div class="svg-angle-down bg-white w-10 h-10" />
    </a>
  </section>
</template>

<script>
export default {
  methods: {
    scrollToPortfolio() {
      let headerHeight = document.getElementsByTagName('header')[0].offsetHeight
      let portfolio = document.getElementById('portfolio')

      portfolio.style.scrollMarginTop = headerHeight + 'px'

      portfolio.scrollIntoView({
        behavior: 'smooth'
      });
    }
  }
}
</script>

<style lang="scss" scoped>
  #home
  {
    font-family: 'Amatic', 'Inter', 'Arial';

    background-image: $gradient, url('~assets/images/pictures/home-background.jpg');
    background-size: cover;

    a
    {
      transition-duration: 0.1s;

      h2
      {
        transition-duration: 0.1s;
      }

      &:hover
      {
        padding: 50px 30px 10px 30px;
      }
    }
  }

  @media (max-width: 767.98px)
  {
    #home a:hover
    {
      padding: 15px 10px 5px 10px;
    }
  }
</style>
