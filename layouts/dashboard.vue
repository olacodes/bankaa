<template>
  <div class="dashboard-layout-cont">
    <section class="main-content colums">
      <aside class="side-nav-cont column is-1">
        <SideNav />
      </aside>
      <div class="container column is-11">
        <nuxt />
      </div>
    </section>
  </div>
</template>

<script>
import NavBar from '~/components/webComponents/NavBar'
import SideNav from '~/components/dashboard/SideNav'
export default {
  components: {
    NavBar,
    SideNav
  },
  data() {
    return {
    }
  },
}
</script>

<style scoped>
.dashboard-layout-cont{
  background-color: #eee;
}
aside{
  padding: 0;
}
.side-nav-cont{
  max-width: 4rem;
}
.main-content{
  display: flex;
}
</style>
