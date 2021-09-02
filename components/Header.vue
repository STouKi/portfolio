<template>
  <header class="px-4 md:px-10 py-5 w-full z-10" :class="{ fixed : headerFixed }" :style="{ background : headerBackground }">
    <div class="flex justify-between items-center">
      <div id="logo-container" class="flex">
        <NuxtLink to="/">
          <img src="~/assets/images/icons/qs.svg" alt="Logo de Quentin Sastourné" class="h-10 lg:h-20" />
        </NuxtLink>

        <img id='logo-text' class="h-10 lg:h-20 text-white" src="~/assets/images/logos/quentin-sastourne/logo-text.svg" alt="Dev web - Graphisme" />
      </div>

      <nav class="p-10 lg:p-0 lg:bg-transparent">
        <ul class="text-3xl">
          <li class="mr-0 lg:mr-4"><a class="anchor-links cursor-pointer font-bold" @click="activeLink('home', $event)">Accueil</a></li>
          <li class="mr-0 lg:mr-4"><a class="anchor-links cursor-pointer" @click="activeLink('portfolio', $event, $event)">Réalisations</a></li>
          <li class="mr-0 lg:mr-4"><a class="anchor-links cursor-pointer" @click="activeLink('experiences', $event)">Expériences</a></li>
					<li class="mr-0 lg:mr-4"><a class="anchor-links cursor-pointer" @click="activeLink('qualifications', $event)">Formations</a></li>
          <li class="mr-0 lg:mr-4"><a class="anchor-links cursor-pointer" @click="activeLink('skills', $event)">Compétences</a></li>
          <li class="mr-0 lg:mr-4"><a class="anchor-links cursor-pointer" @click="activeLink('testimonials', $event)">Recommandations</a></li>
          <li class="mr-0 lg:mr-4"><a class="anchor-links cursor-pointer whitespace-nowrap" @click="activeLink('about', $event)">A propos</a></li>
          <li><a class="anchor-links cursor-pointer" @click="activeLink('contact', $event)">Contact</a></li>
        </ul>
      </nav>

      <div id="webapp-cover" class="block lg:hidden">
        <div id="menu-button">
          <input type="checkbox" id="menu-checkbox" @click="toggleSideMenu">
          <label for="menu-checkbox" id="menu-label">
            <div id="menu-text-bar"></div>
          </label>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      activeBurger: false,
      headerBackground: null
    }
  },
  computed: {
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

        links.forEach(link => {
          link.classList.remove("font-bold")
        });

        clickedLink.classList.add('font-bold')

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

        if (window.scrollY == 0) {
          header.style.background = 'transparent'
        } else {
          header.style.background = 'hsl(75, 100%, 5%)'
        }
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
  }
}
</script>

<style lang="scss">
	nav {
		background-color: $shade-2;
	}

  header
  {
    transition-duration: 0.3s;
  }

  #logo-container:hover #logo-text
  {
    margin-left : 10px;
    opacity     : 1;
  }

  #logo-text
  {
    margin-left         : -50px;
    opacity             : 0;
    transition-duration : 1s;
  }

  #active-link
  {
    font-weight: bold;
  }

  #menu-button
  {
    width: 39px;
    overflow: hidden;
  }

  #menu-checkbox
  {
    display: none;
  }

  #menu-label
  {
    position: relative;
    display: block;
    height: 29px;
    cursor: pointer;
  }

  #menu-label:before, #menu-label:after, #menu-text-bar
  {
    position: absolute;
    left: 0;
    width: 100%;
    height: 5px;
    background-color: #fff;
  }

  #menu-label:before, #menu-label:after
  {
    content: '';
    transition: 0.4s cubic-bezier(0.68, -0.55, 0.27, 1.55) left;
  }

  #menu-label:before
  {
    top: 0;
  }

  #menu-label:after
  {
    top: 12px;
  }

  #menu-text-bar
  {
    top: 24px;
  }

  #menu-text-bar:before
  {
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

  #menu-checkbox:checked + #menu-label:before
  {
    left: -39px;
  }

  #menu-checkbox:checked + #menu-label:after
  {
    left: 39px;
  }

  #menu-checkbox:checked + #menu-label #menu-text-bar:before
  {
    animation: moveUpThenDown 0.8s ease 0.2s forwards, shakeWhileMovingUp 0.8s ease 0.2s forwards, shakeWhileMovingDown 0.2s ease 0.8s forwards;
  }

  @keyframes moveUpThenDown
  {
    0%{ top:0; }
    50%{ top:-27px;}
    100%{ top:-14px; }
  }

  @keyframes shakeWhileMovingUp
  {
    0%{ transform: rotateZ(0); }
    25%{ transform:rotateZ(-10deg); }
    50%{ transform:rotateZ(0deg); }
    75%{ transform:rotateZ(10deg); }
    100%{ transform:rotateZ(0); }
  }

  @keyframes shakeWhileMovingDown
  {
    0%{ transform:rotateZ(0); }
    80%{ transform:rotateZ(3deg); }
    90%{ transform:rotateZ(-3deg); }
    100%{ transform:rotateZ(0); }
  }

  nav
  {
    ul
    {
      display: flex;
    }

    a
    {
      font-family: 'Amatic', 'Inter', 'Arial';
      text-decoration: none;
      color: white;
      white-space: nowrap;

      &:after
      {
        content            : '';
        display            : block;
        background         : transparent;
        height             : 1px;
        width              : 0;
        transition-duration: 0.3s;
      }

      &:hover
      {
        color          : white;
        text-decoration: none;

        &:after
        {
          width     : 100%;
          background: white;
        }
      }
    }
  }

  @media (max-width: 1023px) {
    nav
    {
      position: fixed;
      top: 80px;
      left: -100%;
      bottom: 0;
      transition-duration: 0.5s;
      z-index: 2;

      ul
      {
        height: 100%;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    }
  }
</style>
