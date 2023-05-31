<template>
  <div class="home">
    <div class="description">
      <h1>Welcome to My Website</h1>
      <p>
        I smooth ladies am a programmer, passionate about coding. I have experience in various programming languages and frameworks. 
        This website is a demonstration of my skills and a platform to share my thoughts and ideas.
      </p>
    </div>
    <div class="image">
      <img src="https://encrypted-tbn3.gstatic.com/licensed-image?q=tbn:ANd9GcSKYIHyX3HzbdR0OuKqMdQcMlt7LdXYFK_AJx5LpyljgTwgB_4SSvKmY0wFoCyn8U4EdDNf_mfEdfEJVHc" alt="Your description" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
}
</script>

<style scoped>
.home {
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: black;
}

.description {
  width: 50%;
}

.image {
  width: 80%;
}

.image img {
  max-width: 100%;
  height: auto;
}
</style>