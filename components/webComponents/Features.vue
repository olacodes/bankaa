<template>
  <div class="features-wrapper">
    <div
      class="features-main-wrapper"
      v-for="feature in features"
      :key="feature.id"
    >
      <div class="features-img-cont">
        <img :src="setImage(feature.id*1 + 2)" alt="feature" class="feature-img" />
      </div>
      <div
        class="feature-text-border"
        :style="{ backgroundColor: featureColor((feature.id * 1) + 2) }"
      >
        <div class="feature-text">
          <h5 class="text-header has-text-centered">{{ feature.title }}</h5>
          <p class="feature-para has-text-justified">
            {{ feature.content }}
          </p>
          <p class="learn-more">Learn more &rightarrow;</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import features from '../../data/features'

export default {
  name: 'Featurs',
  props: {
    features: {
      // eslint-disable-next-line vue/require-valid-default-prop
      default: [],
      type: Array,
    },
  },
  methods: {
    featureColor(val) {
      if (val == 3) {
        return '#f1c1ff'
      }
      if (val == 5) {
        return '#474aff4b'
      }
      if (val == 6) {
        return '#c1fff5'
      }
      if (val == 4) {
        return '#8587ff'
      }
    },
    setImage(val) {
      return require(`~/assets/banka${val}.png`)
    }
  },
  computed: {
  }
}
</script>

<style scoped>
.features-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 2rem auto;
}
.features-main-wrapper {
  margin: 2rem 0;
  display: flex;
}
.features-img-cont {
  width: 9rem;
  height: 6rem;
  z-index: 2;
  display: flex;
  align-self: center;
  position: relative;
}
.feature-img {
  width: 100%;
  position: absolute;
  left: 4.5rem;
}
.feature-text-border {
  clip-path: polygon(10% 0%, 100% 0%, 100% 100%, 0% 100%);
  width: 28rem;
  height: 15rem;
  padding: 2rem;
  padding-left: 7rem;
  padding-right: 2rem;
  border-radius: 2.5rem;
  border-top-left-radius: 6rem;
  position: relative;
  color: #474aff4b;
  color: black;
  /* border-bottom-left-radius: 4rem; */
}

@media screen and (max-width: 700px){
  .features-main-wrapper{
    width: 280px;
  }
  .feature-text-border {
    padding-left: 5rem;
    font-size: .7rem;
  }
  .feature-img{
    left: 1rem;
    min-width: 6rem;
    height: 5rem;
  }
}

</style>
