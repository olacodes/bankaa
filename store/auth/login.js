export const state = () => ({
  loginToken: undefined 
})

export const mutations = {
  SETLOGINTOKEN(payload){
    this.state.loginToken = payload
  }
}

export const getters = {}

export const actions = {
  async authLogin({commit}, data) {
    let payload;
    try {
      payload = await this.$axios.$post('https://banka-apis.herokuapp.com/api/v1/auth/signin/', data)
      commit('SETLOGINTOKEN', payload)
      return 1
    } catch (error) {
      console.log('There was an error', error)
      return 2
    }
  }
}