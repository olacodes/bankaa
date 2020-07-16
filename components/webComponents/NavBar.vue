<template>
  <nav
    class="navbar header is-white has-shadow"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item logo" href="https://banka.netlify.com">
        <img
          class="is-white logo-img"
          src="https://res.cloudinary.com/olacode/image/upload/v1594330416/banka/save-money-bg_kqz049.webp"
        />
        <strong>Banka</strong>
      </a>

      <a
        role="button"
        class="navbar-burger burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarBasicExample"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div id="navbarBasicExample" class="navbar-menu">
      <div class="navbar-start ml4">
        <a class="navbar-item">
          About
        </a>

        <a class="navbar-item">
          Documentation
        </a>
      </div>

      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <a class="button is-light" @click="$emit('loginClicked')">
              <strong>Login</strong>
            </a>
            <a class="button is-light">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {}
</script>
  methods: {
    
  },
<style>
.logo:hover {
  background-color: white !important;
}
@media screen and (min-width: 900px) {
  .logo-img {
    min-height: 55px !important;
  }
}
</style>
