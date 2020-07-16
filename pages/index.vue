<template>
  <div class="main-wrapper has-background-white">
    <NavBar @loginClicked="cardModal" :password='password' :email='email'/>
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
          <div class="testimonial-cont">
            <Testimonial />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import NavBar from '~/components/webComponents/NavBar'
import Hero from '~/components/webComponents/Hero'
import HeroTwo from '~/components/webComponents/HeroTwo'
import Features from '~/components/webComponents/Features'
import features from '../data/features'
import Footer from '~/components/webComponents/Footer'
import Testimonial from '~/components/webComponents/Testimonial'
import LoginModal from '~/components/modals/LoginModal'

export default {
  layout: 'empty',
  components: {
    NavBar,
    Hero,
    HeroTwo,
    Features,
    Testimonial,
    Footer,
    LoginModal,
  },
  data() {
    return {
      features,
      password: '',
      email: ''
    }
  },
  methods: {
    cardModal() {
      this.$buefy.modal.open({
        parent: this,
        component: LoginModal,
        hasModalCard: true,
        trapFocus: true,
      })
    },
  },
}
</script>

<style scoped>
.main-wrapper {
  background-color: rgb(255, 255, 255);
}
.other-content {
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
.features-cont {
  margin-top: 3.5rem;
}
.testimonial-cont {
  max-width: 600px;
  margin: 5rem 0;
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
