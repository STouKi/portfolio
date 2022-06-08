<template>
  <header class="w-full z-20" :class="{ fixed : headerFixed }" :style="{ background : headerBackground }">
    <div class="container p-4">
			<div class="flex justify-between items-center">
      <div id="logo-container">
        <a class="anchor-links cursor-pointer flex" href="#home" @click.prevent="activeLink('home', $event)">
          <img data-src="~/assets/images/icons/qs.svg" alt="Logo de Quentin Sastourné" class="h-10 lg:h-20 lazyload" />
					<img data-src="~/assets/images/logos/quentin-sastourne/logo-text.svg" alt="Dev web - Graphisme" id='logo-text' class="h-10 lg:h-20 text-white lazyload" />
        </a>
      </div>

      <nav class="p-10 lg:p-0 lg:bg-transparent">
        <ul class="text-3xl">
          <li class="mr-0 lg:mr-4"><a class="anchor-links cursor-pointer" href="#home" @click.prevent="activeLink('home', $event)">Accueil</a></li>
          <li class="mr-0 lg:mr-4"><a class="anchor-links cursor-pointer" href="#portfolio" @click.prevent="activeLink('portfolio', $event, $event)">Portfolio</a></li>
					<li class="mr-0 lg:mr-4"><a class="anchor-links cursor-pointer" href="#services" @click.prevent="activeLink('services', $event, $event)">Services</a></li>
					<li class="mr-0 lg:mr-4"><a class="anchor-links cursor-pointer" href="#skills" @click.prevent="activeLink('skills', $event)">Compétences</a></li>
					<li class="mr-0 lg:mr-4"><a class="anchor-links cursor-pointer" href="#qualifications" @click.prevent="activeLink('qualifications', $event)">Qualifications</a></li>
          <li class="mr-0 lg:mr-4"><a class="anchor-links cursor-pointer" href="#testimonials" @click.prevent="activeLink('testimonials', $event)">Témoignages</a></li>
          <li class="mr-0 lg:mr-4"><a class="anchor-links cursor-pointer whitespace-nowrap" href="#about" @click.prevent="activeLink('about', $event)">A propos</a></li>
          <li class="mr-0 lg:mr-4"><a class="anchor-links cursor-pointer" href="#contact" @click.prevent="activeLink('contact', $event)">Contact</a></li>
					<li>
						<a class="anchor-links cursor-pointer">
							<div id="btn-dark-mode" :class="[darkMode ? 'sun' : 'moon']" @click="toggleDarkMode" />
						</a>
					</li>
        </ul>
      </nav>

      <div class="block lg:hidden">
        <div id="menu-button">
          <input type="checkbox" id="menu-checkbox" @click="toggleSideMenu">
          <label for="menu-checkbox" id="menu-label">
            <div id="menu-text-bar"></div>
          </label>
        </div>
      </div>
    </div>
		</div>
  </header>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data () {
    return {
      activeBurger: false,
      headerBackground: null,
			darkMode: false
    }
  },
  computed: {
		...mapGetters({ theme: "getTheme" }),
    headerFixed() {
      return (this.$nuxt.$route.path === '/') ? true : false
    }
  },
  methods: {
    activeLink (anchorId, e) {
      let width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

      if (width < 1024) {
        document.getElementById('menu-checkbox').click()
      }

      if (this.$nuxt.$route.path === '/') {
        const links = document.getElementsByClassName('anchor-links')
        let clickedLink = e.target

        let headerHeight = document.getElementsByTagName('header')[0].offsetHeight
        let anchor = document.getElementById(anchorId)

        anchor.style.scrollMarginTop = headerHeight + 'px'
        anchor.scrollIntoView({
          behavior: 'smooth'
        });
      } else {
        this.$router.push({ path: '/' });
      }
    },
    toggleSideMenu () {
      let sideMenu = document.getElementsByTagName('nav')[0];

      this.activeBurger = !this.activeBurger

      sideMenu.style.left = (this.activeBurger === true) ? 0 : "-100%";
    },
    handleScroll () {
      if (this.$nuxt.$route.path === '/') {
        const header = document.getElementsByTagName("header")[0]
				const sections = document.querySelectorAll('section[id]')
				const scrollY = window.scrollY;

        if (scrollY == 0) {
          header.style.background = 'transparent'
        } else {
          header.style.background = 'hsl(75, 100%, 5%)'
        }

				sections.forEach(section => {
					let headerHeight = document.getElementsByTagName('header')[0].offsetHeight
					const sectionHeight = section.offsetHeight;
					const sectionTop = section.offsetTop - headerHeight - 1;
					const sectionId = section.getAttribute('id');
					const sectionLink = document.querySelector('nav a[href*=' + sectionId + ']');

					if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
						sectionLink.classList.add('active-link')
					} else {
						sectionLink.classList.remove('active-link')
					}
				})
      }
    },
		toggleDarkMode () {
			this.$store.dispatch("toggleTheme");

			if (this.darkMode === false) {
				this.darkMode = true;
				localStorage.theme = 'dark';
			} else {
				this.darkMode = false;
				localStorage.theme = 'light';
			}
		}
  },
  beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
  },
  mounted () {
    this.headerBackground = (this.$nuxt.$route.path === '/') ? 'transparent' : 'hsl(75, 100%, 5%)'
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.handleScroll);
  },
	watch: {
    theme(newTheme, oldTheme) {
      newTheme === "light"
        ? document.querySelector("html").classList.remove("dark")
        : document.querySelector("html").classList.add("dark");
    },
  },
}
</script>

<style lang="scss">
	#btn-dark-mode {
		background-color: white;
		width: 40px;
		height: 40px;
	}

	.moon {
		mask: url('@/assets/images/icons/moon.svg') no-repeat center / contain;
		-webkit-mask: url('@/assets/images/icons/moon.svg') no-repeat center / contain;
	}

	.sun {
		mask: url('@/assets/images/icons/sun.svg') no-repeat center / contain;
		-webkit-mask: url('@/assets/images/icons/sun.svg') no-repeat center / contain;
	}

	nav {
		background-color: $shade-2;
	}

  header {
    transition-duration: 0.3s;
  }

  #logo-container:hover #logo-text {
    margin-left : 10px;
    opacity     : 1;
  }

  #logo-text {
    margin-left         : -50px;
    opacity             : 0;
    transition-duration : 1s;
  }

  .active-link {
    font-weight: bold;
  }

  #menu-button {
    width: 39px;
    overflow: hidden;
  }

  #menu-checkbox {
    display: none;
  }

  #menu-label {
    position: relative;
    display: block;
    height: 29px;
    cursor: pointer;
  }

  #menu-label:before, #menu-label:after, #menu-text-bar {
    position: absolute;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: #fff;
  }

  #menu-label:before, #menu-label:after {
    content: '';
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55) left;
  }

  #menu-label:before {
    top: 0;
  }

  #menu-label:after {
    top: 12px;
  }

  #menu-text-bar {
    top: 24px;
  }

  #menu-text-bar:before {
    content: 'MENU';
    position: absolute;
    top: 5px;
    right: 0;
    left: 0;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    text-align: center;
  }

  #menu-checkbox:checked + #menu-label:before {
    left: -39px;
  }

  #menu-checkbox:checked + #menu-label:after {
    left: 39px;
  }

  #menu-checkbox:checked + #menu-label #menu-text-bar:before {
    animation: moveUpThenDown 0.8s ease 0.2s forwards, shakeWhileMovingUp 0.8s ease 0.2s forwards, shakeWhileMovingDown 0.2s ease 0.8s forwards;
  }

  @keyframes moveUpThenDown {
    0%{ top:0; }
    50%{ top:-27px;}
    100%{ top:-14px; }
  }

  @keyframes shakeWhileMovingUp {
    0%{ transform: rotateZ(0); }
    25%{ transform:rotateZ(-10deg); }
    50%{ transform:rotateZ(0deg); }
    75%{ transform:rotateZ(10deg); }
    100%{ transform:rotateZ(0); }
  }

  @keyframes shakeWhileMovingDown {
    0%{ transform:rotateZ(0); }
    80%{ transform:rotateZ(3deg); }
    90%{ transform:rotateZ(-3deg); }
    100%{ transform:rotateZ(0); }
  }

  nav {
    ul {
      display: flex;
    }

		li:not(:last-child) a {
			font-family: 'Amatic', 'Inter', 'Arial';
      text-decoration: none;
      color: white;
      white-space: nowrap;

      &:after {
        content            : '';
        display            : block;
        background         : transparent;
        height             : 1px;
        width              : 0;
        transition-duration: 0.3s;
      }

      &:hover {
        color          : white;
        text-decoration: none;

        &:after {
          width     : 100%;
          background: white;
        }
      }
		}
  }

  @media (max-width: 1023px) {
    nav {
      position: fixed;
      top: 88px;
      left: -100%;
      bottom: 0;
      transition-duration: 0.5s;
      z-index: 2;

      ul {
        height: 100%;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    }
  }
</style>
