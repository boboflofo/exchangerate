import "./css/styles.css";
import Currency from "./js/currencyApi";
import convert from "./js/currencyConversion";

async function convertCurrency(base, target) {
  const response = await Currency.getExchange(base, target);
  if (response.result) {
    printElements(base, target, response);
  } else {
    printError(response);
  }
}

function printElements(base, target, response) {
  const amount = document.querySelector("#number").value;
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
  document.querySelector(".original").innerHTML = `Er ${error}`;
}

function handleSubmit(e) {
  e.preventDefault();
  const base = document.querySelector("#currency").value;
  const target = document.querySelector("#currencyTarget").value;
  convertCurrency(base, target);
}

window.addEventListener("load", () => {
  document.querySelector("#form").addEventListener("submit", handleSubmit);
});
