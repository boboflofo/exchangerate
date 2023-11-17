export default class Currency {
  static async getExchange(base,target) {
    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/1/pair/${base}/${target}`
      );
      const responseJson = await response.json();
      console.log(response)
      if (!response.ok) {
        const errorMessage = `${response.status} ${responseJson}`;
        throw new Error(errorMessage);
      }
      return responseJson;
    } catch (error) {
      console.log(response)
      return error;
    }
  }
}
