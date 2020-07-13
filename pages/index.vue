<template>
  <div class="main-wrapper">
    <NavBar />
    <div class="container content">
      <div class="hero-cont">
        <Hero />

        <div class="other-content">
          <div class="hero-two">
            <HeroTwo />
          </div>
          <div class="features">
            <h2 class="features-header has-text-centered">
              Features
            </h2>
            <p class="features-text has-text-centered">
              Some of the features and advantages that we provide for thos of
              you who store valuable with us at banka
            </p>

            <div class="features-cont">
              <Features :features="features" />
            </div>
          </div>
        </div>

      </div>

    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from '~/components/NavBar'
import Hero from '~/components/Hero'
import HeroTwo from '~/components/HeroTwo'
import Features from '~/components/Features'
import features from '../data/features'
import Footer from '~/components/Footer'

export default {
  layout: 'empty',
  components: {
    NavBar,
    Hero,
    HeroTwo,
    Features,
    Footer
  },
  data() {
    return {
      features,
    }
  },
}
</script>

<style scoped>
.main-wrapper {
  background-color: rgb(245, 250, 255);
}
.other-content{
  max-width: 1200px;
}
.hero-cont {
  margin: 3rem 0;
}
.hero-two {
  margin: 3rem 0;
}
.features-text {
  max-width: 30rem;
  display: flex;
  justify-content: center;
  margin: 0 auto;
}
.features-cont{
  margin-top: 3.5rem;
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
