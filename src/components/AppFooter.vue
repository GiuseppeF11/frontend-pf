<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
    <footer class="p-2">
        <div class="container py-5">
			<div class="row d-flex align-items-center pb-4">
				<div class="col">
					<div class="logo-container">
						<img class="logo" src="/public/img/logo.png" alt="logo">
					</div>
				</div>
			</div>
			<div class="row pb-4">
				<div class="col">
					<div class="icons d-flex">
						<i class="fa-brands fa-twitter mx-2"></i> 
						<i class="fa-brands fa-linkedin mx-2"></i> 
						<i class="fa-brands fa-youtube mx-2"></i> 
						<i class="fa-brands fa-instagram mx-2"></i> 
						<i class="fa-brands fa-pinterest mx-2"></i>
					</div>
				</div>
			</div>
			<div class="row">
				<div class="col">
					<div class="text-footer mb-4">
						<strong>© FastBites • <a href="#" class="text-footer"> Cookie & Privacy Policy</a> • Developed by Team 4</strong>
					</div>
				</div>
			</div>
        </div>
    </footer>
</template>

<style lang="scss" scoped>

footer {
  background-color: #F6901E;
  width: 100%;
  padding: 60px 0;
  bottom: 0; 
}

.text-footer {
  font-family: 'Open Sans', sans-serif;
  color: white;
  font-size: 0.9rem;
}

.logo-container {
  width: 100px;
  height: 100px;
  display: flex; 
  align-items: center; 
}

.logo {
  width: 100%;
}

.icons {
  width: 60px;
  display: flex;
  align-items: center;
}

.icons i {
  border-radius: 25%;
  background-color: white;
  width: 60px;
  height: 50px;
  padding: 16px; 
  border: 1px solid white;
  color: #F6901E;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: background-color 0.5s, color 0.5s;
  cursor: pointer;
}

.icons i:hover {
  background-color: #F6901E;
  color: white;
}

</style>
