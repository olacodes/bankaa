<template>
  <div>
    <form @submit.prevent="onSubmit">
      <div class="modal-card" style="width: auto;">
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
    }
  },
  methods: {
    async onSubmit() {
      const loginDetails = { "email": this.email, "password": this.password }
      console.log(loginDetails);
      const res = await this.$store.dispatch('auth/login/authLogin', loginDetails)
      console.log(res)
    },
  },
}
</script>

<style></style>
