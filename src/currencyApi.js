class Currency {
  static async getExchange() {
    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${base}/${target}`
      );
      const responseJson = await response.json();
    } catch (error) {
      return error;
    }
  }
}
