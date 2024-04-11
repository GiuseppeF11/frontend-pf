<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <footer class="footer mt-5">
    <div class="container">
      <div class="row d-flex" style="">
        <strong>© FastBites • <a href="#" class="text-dark"> Cookie & Privacy Policy</a> • Developed by Team 4</strong>
      </div>
      <div class="icons">
          <i class="fa-brands fa-twitter"></i> <i class="fa-brands fa-linkedin"></i> <i class="fa-brands fa-youtube"></i> <i class="fa-brands fa-instagram"></i> <i class="fa-brands fa-pinterest"></i>
        </div>
          <div class="final-logo">
          <img class="last-logo" src="/public/img/logo.svg" alt="logo">
        </div>
    </div>
  </footer>
</template>


<style lang="scss" scoped>
  .footer {
	background-color: #F6901E;
	padding: 50px 0;
	width: 100%;
  height: 100px;
  }
  
  .final-logo {
    padding-left: 170px;
  }

  .last-logo {
    width: 100px;
    border-bottom: 100px;
  }

  .icons {
    width: 200px;
  }

  i:hover {
    background-color: #F6901E;
    color: white;
    transition-duration: 0.5s;
  }

  i {
    border-radius: 100%;
    background-color: white;
    width: 30px;
    height: 30px;
    padding: 7px;
    border: 1px solid white;
    color: #F6901E;
  }

  .footer h5 {
	font-size: 18px;
	font-weight: 700;
	margin-bottom: 20px;
  }
  
  .footer ul li {
	margin-bottom: 10px;
  }
  
  .footer ul li a {
	color: #333;
	text-decoration: none;
  }
  
  .footer ul li a:hover {
	color: white;
	text-decoration: none;
  }
  
  .footer-logo {
	max-width: 100%;
	height: auto;
  }
  
  img {
	width: 150px;
  }

  .container {
    display: flex;
  }

  .row {
    width: 60%;
  }
</style>