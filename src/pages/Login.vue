<script>
import axios from 'axios';

export default {
  data() {
    return {

    };
  },
};
</script>

<template>
	<h1 class="title">
		Login
	</h1>
</template> 



<style lang="scss" scoped>
.title {
  font-family: "Paytone One", sans-serif;
  font-size: 3rem;
  color: white;
  text-align: center;
}

.subtitle {
  font-size: 2rem;
  color: white;
  text-align: center;
}

.restaurant-card {
  position: relative;
  border-radius: 10px;
  margin: 10px;
  padding: 20px;
  text-align: center;
  width: 275px;

  a {
    text-decoration: none;
  }
}

.restaurant-image {
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin: 0 auto 10px;
}

.restaurant-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-body {
  margin-top: 10px;
}

.restaurant-pill {
  position: absolute;
  bottom: 20px; 
  left: 50%;
  transform: translateX(-50%);
  font-family: 'Open Sans', 'sans-serif';
  background-color: rgba(246, 144, 30, 1); 
  color: rgb(255, 255, 255);
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  border-radius: 25px;
  font-size: 16px;
  width: 150px;
}

.form-control.rounded-pill.custom-input {
  border-radius: 25px; 
  outline: none !important; 
  box-shadow: none !important; 
}

.input-group.my-4 {
  max-width: 300px; 
  margin: 0 auto; 
}
</style>
