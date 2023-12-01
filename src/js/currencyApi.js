export default class Currency {
  static async getExchange(base, target) {
    try {
      const response = await fetch(
        `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/pair/${base}/${target}`
      );
      const responseJson = await response.json();
      let message = "";
      if (!response.ok) {
        if (responseJson["error-type"] === "unsupported-code") {
          message = "Currency in question does not exist";
        } else {
          message = responseJson["error-type"];
        }
        const errorMessage = `${response.status} ${response.statusText} ${message}`;

        throw new Error(errorMessage);
      }
      return responseJson;
    } catch (error) {
      return error;
    }
  }
}
