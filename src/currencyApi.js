class Currency {
  static async getExchange() {
    const response = await fetch(`https://v6.exchangerate-api.com/v6/YOUR-API-KEY/pair/EUR/GBP`)
  }
}

