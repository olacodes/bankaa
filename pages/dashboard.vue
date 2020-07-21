<template>
  <div class="dashboard">
    <div class="card-cont">
      <BalanceCard :total-balance="totalBalance" />
      <LatestTransactionCard :latest-transaction="latestTransaction" />
    </div>
  </div>
</template>

<script>
import BalanceCard from '~/components/dashboard/BalanceCard'
import LatestTransactionCard from '~/components/dashboard/LatestTransactionCard'
import { mapState } from 'vuex'
export default {
  layout: 'dashboard',

  components: {
    BalanceCard,
    LatestTransactionCard,
  },

  computed: {
    ...mapState('dashboard', ['totalBalance', 'latestTransaction']),
  },
}
</script>

<style scoped>
.dashboard {
  min-height: 100vh;
}
.card-cont {
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
}
.card-cont * {
  margin-right: 1rem;
  margin-bottom: 1rem;
  /* border: 2px solid green; */
  box-shadow: 3px 3px 3px 3px #eee;
}
</style>
