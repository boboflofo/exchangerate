import "./css/styles.css";
import Currency from "./currencyApi"

function converyCurrency() {
  const response = Currency.getExchange(base,target);
  if (response.main) {
    printElements(base,target,response);
  } else {
    printError(base,target,response)
  }
}

function printElements(base,target,response) {
  document.querySelector(".original").innerHTML = `Amount in `
}