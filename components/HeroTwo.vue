<template>
  <div class="hero-two-cont">
    <div class="img-cont">
      <img src="~/assets/banka2.png" alt="banka image" class="banka1-img" />
    </div>
    <div class="hero-two-text-cont">
      <h2 class="hero-main-text">We are a high-level valuable storage bank</h2>
      <p>
        The place to store various valuable that you can access at any time
        through the internet and where you can carry it. This very flexible
        storage area has a high level of security. To enter into your own data
        you must enter the password that you created when you registered with us
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.hero-two-cont {
  display: flex;
  background-color: #f063b81e;
  border-radius: 1.5rem;
  justify-content: space-evenly;
}

.hero-two-text-cont{
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
}
@media screen and (min-width: 700px) {
  .img-cont {
    margin-right: 1.5rem;
    min-width: 10rem;
  }
  .hero-two-cont{
    max-width: 1200px;
  }
  .hero-main-text{
    font-size: 2rem;
  }
}
</style>
