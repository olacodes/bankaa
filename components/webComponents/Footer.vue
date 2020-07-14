<template>
  <div class="is-white has-shadow myFooter">
    <h2 class="has-text-centered">
      Hand-Crafted By <strong>Olatunde Sodiq</strong> <br />
      &copy; {{ year }}
    </h2>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    year(){
      return new Date().getFullYear()
    }
  }
}
</script>

<style>
.myFooter{
  background-color: white;
  box-shadow: 3px 3px 3px 3px rgb(43, 41, 41);
  padding: 2rem;
  padding-bottom: 3rem;
}
</style>
