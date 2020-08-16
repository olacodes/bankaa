export const state = () => ({
  userSideNav: [
    {
      name: 'Dashboard',
      icon: 'view-dashboard',
      to: 'dashboard',
      color: '',
    },
    { name: 'Profile', icon: 'account', to: 'profile', color: '' },
    {
      name: 'Transactions',
      icon: 'wallet',
      to: 'transaction',
      color: '',
    },
  ],

  totalBalance: { balance: 5000 },
  latestTransaction: {
    amount: 3000,
    transactionType: 'credit',
    transactionDate: '1/2/2020',
  },
  transactions: [
    {
      id: 1,
      type: 'credit',
      amount: 1000,
      balance: 20000,
      date: '1/1/2000',
    },
    {
      id: 2,
      type: 'debit',
      amount: 5000,
      balance: 10000,
      date: '1/1/2000',
    },
    {
      id: 3,
      type: 'debit',
      amount: 6000,
      balance: 5000,
      date: '1/2/2000',
    },
    {
      id: 4,
      type: 'credit',
      amount: 100000,
      balance: 150000,
      date: '1/1/2000',
    },
  ],
})

export const mutations = {}

export const getters = {}

export const actions = {}
