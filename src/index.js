import "./css/styles.css";
import Currency from "./currencyApi";
import convert from "./currencyConversion";

async function convertCurrency(base, target) {
  const response = await Currency.getExchange(base, target);
  if (response.error) {
    printError(response);
  } else {
    printElements(base, target, response);
  }
}

function printElements(base, target, response) {
  const amount = document.querySelector("#number").value;
  console.log(response)
  const rate = response.conversion_rate;
  
  const convertedRate = convert(amount, rate);
  document.querySelector(
    ".original"
  ).innerHTML = `Amount in ${base}: ${amount}`;
  document.querySelector(
    ".converted"
  ).innerHTML = `Amount in ${target}: ${convertedRate}`;
}

function printError(error) {
  document.querySelector(".original").innerHTML = `Error: ${error.message}`;
  console.log(error);
}

function handleSubmit(e) {
  e.preventDefault();
  const base = document.querySelector("#currency").value;
  console.log(base);
  const target = document.querySelector("#currencyTarget").value;
  convertCurrency(base, target);
}

window.addEventListener("load", () => {
  document.querySelector("#form").addEventListener("submit", handleSubmit);
});
