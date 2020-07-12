<template>
  <div class="main-container">
    <div class="hero-text-cont">
      <h1 class="main-text">Save your money with Banka</h1>
      <p class="secondary-text">
        Banka is a money storage bank that has been tested for security, so you
        can store your money here safely but not to be afraid of security
      </p>
      <div class="buttons button-cont">
        <b-button class="is-info rounded">Learn more</b-button>
      </div>
    </div>
    <div class="hero-img-cont">
      <img class="" src="~/assets/banka1.png" alt="hero image" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
@media screen and (min-width: 700px){
.hero-img-cont{
  max-width: 1200px;
  max-height: 400px;
}
.main-text{
  font-size: 3rem;
  max-width: 400px;
  /* border: 2px solid black; */
}
/* .hero-text-cont{
  display: flex;
  flex-direction: column;
  justify-content: center;
} */
  .main-container {
    display: flex;
    justify-content: center;
  }
  
}
</style>
