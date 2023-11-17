export default class Currency {
  static async getExchange() {
    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${base}/${target}`
      );
      const responseJson = await response.json();
      if (!response.ok) {
        const errorMessage = `${response.status} ${response.statusText}`
        throw new Error(errorMessage)
      } return responseJson
    } catch (error) {
      return error;
    }
  }
}
