<template>
  <div class="main-wrapper">
    <NavBar />
    <div class="container content">
      <div class="hero-cont">
        <Hero />
        <div class="hero-two">
          <HeroTwo />
        </div>
        <div class="features">
          <h2 class="features-header has-text-centered">
            Features
          </h2>
          <p class="features-text has-text-centered">
            Some of the features and advantages that we provide for thos of you
            who store valuable with us at banka
          </p>

          <div class="features-cont">
            <Features/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'
import Hero from '~/components/Hero'
import HeroTwo from '~/components/HeroTwo'
import Features from '~/components/Features'

export default {
  layout: 'empty',
  components: {
    NavBar,
    Hero,
    HeroTwo,
    Features
  },
}
</script>

<style scoped>
.main-wrapper {
  background-color: rgb(245, 250, 255);
}
.hero-cont {
  margin: 3rem 0;
}
.hero-two {
  margin: 3rem 0;
}
.features-text {
  width: 30rem;
  display: flex;
  justify-content: center;
  margin: 0 auto;
}
@media screen and (max-width: 1000px) {
  .content {
    margin: 0 20px;
  }
  .features-header {
    font-size: 2rem;
    font-weight: bold;
    margin: 2rem 0;
  }
}
</style>
