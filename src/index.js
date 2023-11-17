import "./css/styles.css";
import Currency from "./currencyApi"

function converyCurrency() {
  const response = Currency.getExchange(base,target)
}