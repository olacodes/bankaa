export const state = () => ({
  userSideNav: [{
      name: 'Dashboard',
      icon: 'view-dashboard',
      to: 'dashboard',
      color: '',
    },
    { name: 'Profile',
      icon: 'account',
      to: 'profile',
      color: '',
    },
    {
      name: 'Transactions',
      icon: 'wallet',
      to: 'transaction',
      color: '',
    },
  ],

  totalBalance: { balance : 5000},
  latestTransaction: {
    amount: 3000,
    transactionType: 'credit',
    transactionDate: '1/2/2020',

  }
})

export const mutations = {}

export const getters = {}

export const actions = {}
