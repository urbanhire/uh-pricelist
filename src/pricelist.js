const priceList = {
  trial: {
    name : 'trial',
    jobSlot: 'Unlimited',
    userSlot: 'Unlimited',
    payments : {
      monthly: {
        idr: 0,
        usd: 0
      },
      annual: {
        idr: 0,
        usd: 0
      }
    }
  },
  free: {
    name : 'free',
    jobSlot: 1,
    userSlot: 1,
    payments : {
      monthly: {
        idr: 0,
        usd: 0
      },
      annual: {
        idr: 0,
        usd: 0
      }
    }
  },
  starter: {
    name : 'starter',
    jobSlot: 3,
    userSlot: 50,
    payments : {
      monthly: {
        idr: 690000,
        usd: 59
      },
      annual: {
        idr: 6900000,
        usd: 590
      }
    }
  },
  standard: {
    name : 'standard',
    jobSlot: 5,
    userSlot: 50,
    payments : {
      monthly: {
        idr: 990000,
        usd: 99
      },
      annual: {
        idr: 9900000,
        usd: 990
      }
    }
  },
  professional: {
    name : 'professional',
    jobSlot: 10,
    userSlot: 'unlimited',
    payments : {
      monthly: {
        idr: 1990000,
        usd: 169
      },
      annual: {
        idr: 19900000,
        usd: 1690
      }
    }
  },
  growth: {
    name : 'growth',
    jobSlot: 20,
    userSlot: 'unlimited',
    payments : {
      monthly: {
        idr: 2990000,
        usd: 269
      },
      annual: {
        idr: 29900000,
        usd: 2690
      }
    }
  },
  enterprise: {
    name : 'enterprise',
    jobSlot: 40,
    userSlot: 'unlimited',
    payments : {
      monthly: {
        idr: 3990000,
        usd: 369
      },
      annual: {
        idr: 39900000,
        usd: 3690
      }
    }
  }
}

module.exports = {
  getPriceList: function(plan) {
    return priceList[plan]
  }
}
