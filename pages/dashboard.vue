<template>
  <div class="dashboard">
    <div class="account-profile-cont">
      <h1 class="title my-title">
        Account Profile
      </h1>
      <div class="card-cont">
        <AccountInfoCard :total-balance="totalBalance"/>
        <LatestTransactionCard :latest-transaction="latestTransaction" />
      </div>
    </div>
    <div class="trans-cont">
    <h1 class="title my-title">Transactions</h1>

      <TransactionList :transaction="transactions" />
    </div>
  </div>
</template>

<script>
import AccountInfoCard from '~/components/dashboard/AccountInfoCard'
import LatestTransactionCard from '~/components/dashboard/LatestTransactionCard'
import TransactionList from '~/components/dashboard/TransactionList'

import { mapState } from 'vuex'
export default {
  layout: 'dashboard',

  components: {
    AccountInfoCard,
    LatestTransactionCard,
    TransactionList,
  },

  computed: {
    ...mapState('dashboard', [
      'totalBalance',
      'latestTransaction',
      'transactions',
    ]),
  },
}
</script>

<style scoped>
.dashboard {
  min-height: 100vh;
}
.account-profile-cont{
  margin: 1rem 0;
}
.account-info{
  display: flex;
  flex-grow: 1;
}
.my-title {
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2.5rem;
  color: #5A98F2;
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
.trans-cont {
  margin-top: 2rem;
}
</style>
