import "./css/styles.css";
import Currency from "./currencyApi"
import convert from "./currencyConversion"

function convertCurrency() {
  const response = Currency.getExchange(base,target);
  if (response.main) {
    printElements(base,target,response);
  } else {
    printError(base,target,response)
  }
}

function printElements(base,target,response) {
  const amount = document.querySelector('#number')
  const rate = response.conversion_rate
  const convertedRate = convert(amount,rate)
  document.querySelector(".original").innerHTML = `Amount in ${base}: ${amount}`
  document.querySelector("converted").innerHTML = `Amount in ${target}: ${convertedRate}`
}

function handleSubmit(e){
  e.preventDefault();
  const base = document.querySelector('#currency').value
  convertCurrency(base,target)
}

window.addEventListener("load", () => {
  document.querySelector("#form").addEventlistener("submit", co)
})