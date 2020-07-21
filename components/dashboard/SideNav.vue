<template>
  <div class="side-nav-cont">
    <div v-for="userNav in userSideNav" :key="userNav.name" class="is-dark side-nav">
      <nuxt-link :to="userNav.name">
        <b-icon :icon="userNav.icon" class="icon is-dark"> </b-icon>
        <div :class="{line: line}"></div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('dashboard', ['userSideNav']),
  },
  data(){
    return{
      'line': false
    }
  }
  
}
</script>

<style scoped>
.side-nav-cont {
  margin: 0 auto;
  min-height: 100vh;
  box-shadow: 3px 3px 3px 3px rgb(197, 197, 197);
  padding: 1.5rem 0;
  background-color: rgb(255, 255, 255);
  border-top-right-radius: 1.5rem;
  border-bottom-right-radius: 1rem;

}

.side-nav{
  margin: 1.5rem auto;
  /* border: 2px solid red; */
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;

  /* margin: 1rem; */
}
.side-nav:hover{
 
  /* padding-bottom: 1rem; */
}
/* .line:hover{ */
  /* display: block; */
  /* border: 2px solid black; */
  /* padding: 1rem; */
/* } */
.icon{
  color: darkblue !important;
}
</style>
