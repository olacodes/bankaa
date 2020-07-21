<template>
  <div class="card">
    <h1 class="card-title">Total Balance</h1>
    <h2 class="amount card-subtitle">#{{totalBalance.balance}}</h2>
  </div>
</template>

<script>
export default {
  props: {
    'totalBalance': {
      type: Object,
      required: true
    }
  }

}
</script>

<style scoped>
.card{
  padding:  1.5rem;
  border-radius: 1rem;
}
.card-title, .amount{
  font-size: 2rem;
  color: green;
  font-weight: bold;
}
.amount{
  color: #34B53A;
}
</style>