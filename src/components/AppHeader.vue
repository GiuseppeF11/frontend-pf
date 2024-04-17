<script>
import Cart from './Cart.vue';

export default {
  data() {
    return {
      isSmallScreen: false
    };
  },
  components: {
    Cart,
  },
  mounted() {
    this.checkScreenSize();

    window.addEventListener('resize', this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      this.isSmallScreen = window.innerWidth <= 992; 
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkScreenSize);
  }
};
</script>

<template>
	<header>
	  <nav class="navba-lg mt-5 mb-3 flex-nowrap">
		<div class="container d-flex justify-content-between align-items-center">
		  <div class="logo">
			<router-link class="navbar-brand" to="/">
			  <img src="/public/img/logoscritta.png" alt="logo" />
			</router-link>
		  </div>
	
		  <div class="d-flex">
			<!-- Visualizza in modo condizionale i collegamenti in base alle dimensioni dello schermo -->
			<a v-if="!isSmallScreen" class="nav-link button-style-3" :href="`http://127.0.0.1:8000/login`">Sei gia un nostro partner?</a>
			<a v-if="!isSmallScreen" class="nav-link button-style-3" :href="`http://127.0.0.1:8000/register`">Diventa un nostro partner!</a>
			<Cart/>
        
			<!-- Visualizza in modo condizionale l'hamburger menu -->
			<button
			  v-if="isSmallScreen"
			  class="navbar-toggler"
			  type="button"
			  data-bs-toggle="offcanvas"
			  data-bs-target="#offcanvas"
			  aria-controls="offcanvas"
			>
			  <span class="navbar-toggler-icon"></span>
			</button>
	
			<!-- Offcanvas menu -->
			<div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
			  <div class="offcanvas-header m-2">
				<button type="button" class="btn-close button-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
			  </div>
			  <div class="offcanvas-body m-4">
				<ul class="navbar-nav">
				  <!-- Collegamenti sempre visibili su schermi più grandi -->
                  <h5 id="offcanvasLabel">Menu</h5>

				  <li class="nav-item">
					<a class="nav-link mb-5" :href="`http://127.0.0.1:8000/login`">Ordina ora!</a>
				  </li>
                </ul>

                <h5 id="offcanvasLabel">Area riservata</h5>
				<ul class="navbar-nav">
				  <!-- Collegamenti sempre visibili su schermi più grandi -->
				  <li class="nav-item">
					<a class="nav-link" :href="`http://127.0.0.1:8000/login`">Login</a>
				  </li>
				  <li class="nav-item">
					<a class="nav-link" :href="`http://127.0.0.1:8000/register`">Registrati</a>
				  </li>
				</ul>

			  </div>
			</div>
		  </div>
		</div>
	  </nav>
	</header>
  </template>
  
  

<style lang="scss" scoped>

.logo {
  width: 200px;

  img {
    width: 100%;
  }
}

@media (max-width: 576px) {
  .logo img {
    width: 146.82px;
  }
}

.link-text {
  font-family: 'Open Sans', 'sans-serif';
}

.button-style-3 {
//   box-shadow: 0px 0px 5px black;
  display: inline-block;
  text-decoration: none;
  color: rgb(0, 0, 0);
  border: 1px solid transparent;
  padding: 8px 20px;
  margin: 4px 10px;
  cursor: pointer;
  border-radius: 24px;
  background-color: white;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease;
}

.button-style-3:hover {
  color: white;
  background-color: transparent;
  border: 1px solid white;
}

.button-style-3 a {
  text-decoration: none;
}

.navbar-toggler {
  background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-miterlimit='10' stroke-width='1' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  background-repeat: no-repeat;
  background-size: cover;
  border: none;
  padding: 0.5rem 0.5rem;
  font-size: 1.25rem;
  line-height: 1;
  background-color: transparent;
  color: #ffffff;

}

.navbar-toggler:focus,
.navbar-toggler:active,
.navbar-toggler-icon:focus {
    outline: none;
    box-shadow: none;
}

.navbar-toggler-icon {
  display: inline-block;
  width: 1.5em;
  height: 1.5em;
  vertical-align: middle;
  content: "";
  background: no-repeat center center;
  background-size: contain;
}

.offcanvas-header {
  padding: 0.5rem;
}

.subtitle {
	font-family: 'Paytone One', sans-serif;
	color: #BC3431;
	margin-bottom: 0;
	line-height: 1.5;
	}

#offcanvasLabel {
    font-family: 'Paytone One', sans-serif;
    color: #BC3431;
  margin-bottom: 0;
  line-height: 1.5;
}

.offcanvas-body {
  padding: 0.5rem;
}

.offcanvas-header,
    button:focus,
    button:active {
    outline: none;
    box-shadow: none;
}

.button-close {
  width: 20px;
}

button {
  margin: 0 15px;
  border-radius: 50%;
  background-color: rgba(246, 144, 30, 1);
  color: white;
  border: none;
  padding: 15px;
  width: 50px;
  margin-bottom: 5px;
}


</style>
