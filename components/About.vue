<template>
	<section id='about' class="anchors">
		<div class="container">
			<div class="text-center">
				<h2 class="amatic text-5xl pt-4 md:pt-10 mb-3">A propos</h2>
				<h3 class="text-xl text-gray-500"> Ma présentation</h3>
			</div>

			<div class="grid grid-cols-1 lg:grid-cols-2">
				<div id="bubble" class="bg-white z-10 relative rounded-lg p-4 m-4 md:p-10 md:m-10">
					<div class="flex justify-between items-center mb-10">
						<h3 class="text-3xl">Salut ! 👋</h3>
						<img data-src="~/assets/images/pictures/quentin-sastourne.png" alt="Photo de Quentin Sastourné"
							width="100px" height="auto" class="rounded-full block lg:hidden lazyload">
					</div>

					<p>
						Jeune entrepreneur 🧔 français 🇨🇵 passionné par le web 💻 et le graphisme 🖌️
						<br /> <br />
						J'ai suivis une formation dans le développement web jusqu'à obtenir une licence dans ce domaine chez
						OpenClassrooms 🎓
						<br /> <br />
						Freelance depuis 3 ans, j'ai réalisé de nombreux projets 💼 en utilisant des technologies variées et en
						cherchant toujours à livrer un produit de qualité, moderne et professionnel.
						<br /> <br />
						Au plaisir de vous rencontrer.
						<br /> <br />
						A bientôt ! 😉
					</p>

					<div class="flex justify-end">
						<a download="" href="~/assets/images/cv.pdf">
							<button class="btn-main p-3 rounded text-xl flex justify-between">
								CV
								<div id="download-svg" class="btn-main-icon ml-3" />
							</button>
						</a>
					</div>
				</div>

				<div class="hidden lg:block relative">
					<img data-src="~/assets/images/pictures/quentin-sastourne.png" alt="Photo de Quentin Sastourné"
						class="absolute bottom-0 right-20 lazyload">
				</div>
			</div>
		</div>
	</section>
</template>

<style lang="scss">
  #about
  {
    background: #d6d8d3;
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

	#download-svg {
		mask: url('@/assets/images/icons/download.svg') no-repeat center / contain;
		-webkit-mask: url('@/assets/images/icons/download.svg') no-repeat center / contain;
	}
</style>
