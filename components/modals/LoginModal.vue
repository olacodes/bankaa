<template>
  <div class="login-modal-container">
    <form @submit.prevent="onSubmit">
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">Login</p>
        </header>
        <section class="modal-card-body">
          <b-field label="Email">
            <b-input
              type="email"
              v-model="email"
              placeholder="Your email"
              required
            >
            </b-input>
          </b-field>

          <b-field label="Password">
            <b-input
              type="password"
              v-model="password"
              password-reveal
              placeholder="Your password"
              required
            >
            </b-input>
          </b-field>

          <b-checkbox>Remember me</b-checkbox>
        </section>
        <footer class="modal-card-foot">
          <button class="button" type="button" @click="$parent.close()">
            Close
          </button>
          <button class="button is-primary" type="submit">Login</button>
        </footer>
      </div>
    </form>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      password: '',
      email: '',
      isFullPage: true
    }
  },
  methods: {
    async onSubmit() {
      const loginDetails = { email: this.email, password: this.password }
      const loading = this.$buefy.loading.open({
        container: this.isFullPage ? null : null,
      })
      const res = await this.$store.dispatch(
        'auth/login/authLogin',
        loginDetails
      )
      if(res.status === 200) {
        loading.close()
        // this.history.push('/landingpage')
      }

      loading.close()
      console.log(res)
    },
  },
}
</script>

<style>
@media screen and (max-width: 700px){
  .modal-card{
    max-width: 600px !important;
    border: 2px solid red
  }
}
</style>
