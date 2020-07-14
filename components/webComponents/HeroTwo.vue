<template>
  <div class="hero-two-cont has-text-justified">
    <div class="img-cont">
      <img src="~/assets/banka2.png" alt="banka image" class="banka1-img" />
    </div>
    <div class="hero-two-text-cont">
      <h2 class="hero-main-text hero-head">We are a high-level valuable storage bank</h2>
      <p class="hero-para">
        The place to store various valuable that you can access at any time
        through the internet and where you can carry it. This very flexible
        storage area has a high level of security. To enter into your own data
        you must enter the password that you created when you registered with us
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroTwo',
}
</script>

<style scoped>
.hero-two-cont {
  padding: 1.2rem;
  /* background-color: rgba(240, 99, 184, 0.15); */
  background: linear-gradient(191.49deg, #67C3F3 9.05%, #5A98F2 76.74%);
  border-radius: 1.5rem;
  color: white;
}
.hero-head{
  color: white;
}
.img-cont{
  width: 8rem;
}
.banka1-img{
  width: 100%;
  height: auto;
}

.hero-two-text-cont {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 500px;
}
.hero-main-text{
  font-size: 1.2rem;
}
.hero-para{
  font-size: .8rem;
}
@media screen and (min-width: 700px) {
  .img-cont {
    margin-right: 1.5rem;
    width: 17rem;
  }
  .hero-two-cont {
    display: flex;
    justify-content: space-evenly;
    max-width: 1200px;
  }
  .hero-main-text {
    font-size: 2rem;
  }
}
</style>
