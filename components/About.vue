<template>
  <section id='about' class="anchors">
    <h2 class="text-center amatic text-5xl pt-4 md:pt-10">A propos</h2>

    <div class="grid grid-cols-1 lg:grid-cols-2">
      <div id="bubble" class="rounded-lg p-4 m-4 md:p-10 md:m-10">
        <div class="mb-10">
          <h3 class="text-3xl">Salut ! 👋</h3>
          <img src="~/assets/images/pictures/quentin-sastourne.png" alt="Photo de Quentin Sastourné" width="100px" class="rounded-full block lg:hidden">
        </div>

        <p>
					Jeune entrepreneur 🧔 français 🇨🇵 passionné par le web 💻 et le graphisme 🖌️
					<br /> <br />
					J'ai suivis une formation dans le développement web jusqu'à obtenir une licence dans ce domaine chez OpenClassrooms 🎓
					<br /> <br />
					Freelance depuis 3 ans, j'ai réalisé de nombreux projets 💼 en utilisant des technologies variées et en cherchant toujours à livrer un produit de qualité, moderne et professionnel.
					<br /> <br />
					Au plaisir de vous rencontrer.
					<br /> <br />
					A bientôt ! 😉
        </p>
      </div>

      <div class="hidden lg:block relative">
        <img src="~/assets/images/pictures/quentin-sastourne.png" alt="Photo de Quentin Sastourné" class="absolute bottom-0 right-20">
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  #about
  {
    background: #d6d8d3;
  }

  #bubble
  {
    background-color: white;
    z-index: 9;
    position: relative;

    div
    {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }

  @media (min-width: 1024px)
  {
    #bubble::after
    {
      content: url('~assets/images/bubble.svg');
      width: 200px;
      position: absolute;
      top: 100px;
      right: -200px;
    }
  }
</style>
