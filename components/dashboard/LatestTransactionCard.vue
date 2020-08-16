<template>
  <div class="card trans-card-cont">
    <div class="trans-img-cont">
      <img class="trans-img" src="~/assets/customer.png" alt="transaction" />
    </div>
    <div class="trans-info-cont">
      <div class="card-title-cont">
        <h1 class="card-title">Latest Transaction</h1>
      </div>
      <div class="trans-cont">
        <h1 class="amount">Amount: #{{ latestTransaction.amount }}</h1>
        <p class="trans-type">Type: {{ latestTransaction.transactionType }}</p>
        <p class="trans-date">Date: {{ latestTransaction.transactionDate }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    latestTransaction: {
      type: Object,
      required: true,
    },
  },
  filters: {},
}
</script>

<style scoped>
.trans-card-cont {
  border-radius: 1rem;
  display: flex;
  padding: 1rem;
}
.trans-info-cont {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1rem;
  color: #5A98F2;
}
.trans-img-cont {
  width: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
}
.trans-img {
  width: 100%;
  border-radius: 50%;
}
.card-title {
  font-size: 1.6rem;
  font-weight: bold;
}
</style>
