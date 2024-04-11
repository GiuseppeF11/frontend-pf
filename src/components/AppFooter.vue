<script>
export default {
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
    <footer class="py-5">
        <div class="container d-flex align-items-center py-5">
            <div class="logo-container">
                <img class="logo" src="/public/img/logo.png" alt="logo">
            </div>
            <div class="container ps-5">
                <div class="text-footer mb-4">
                    <strong>© FastBites • <a href="#" class="text-footer"> Cookie & Privacy Policy</a> • Developed by Team 4</strong>
                </div>
                <div class="icons d-flex">
                    <i class="fa-brands fa-twitter mx-2"></i> 
                    <i class="fa-brands fa-linkedin mx-2"></i> 
                    <i class="fa-brands fa-youtube mx-2"></i> 
                    <i class="fa-brands fa-instagram mx-2"></i> 
                    <i class="fa-brands fa-pinterest mx-2"></i>
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
  width: 120px;
  height: 120px;
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
}

.icons i:hover {
  background-color: #F6901E;
  color: white;
}

</style>
