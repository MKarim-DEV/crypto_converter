function converter_choice(event) {
  event.preventDefault();
  let choice = document.querySelector('input[name="mode"]:checked').value;
  if (choice === "mode1") {
    document.querySelector("#form0").classList.add("d-none");
    document.querySelector("#form1").classList.remove("d-none");
    document.querySelector("#home_btn").classList.remove("active");
    document.querySelector("#crypto_btn").classList.add("active");
  }
  if (choice === "mode2") {
    document.querySelector("#form0").classList.add("d-none");
    document.querySelector("#form2").classList.remove("d-none");
    document.querySelector("#home_btn").classList.remove("active");
    document.querySelector("#currency_btn").classList.add("active");
  }
}
function switch_converter1() {
  document.querySelector("#form0").classList.add("d-none");
  document.querySelector("#form1").classList.add("d-none");
  document.querySelector("#form2").classList.remove("d-none");
  document.querySelector("#home_btn").classList.remove("active");
  document.querySelector("#crypto_btn").classList.remove("active");
  document.querySelector("#currency_btn").classList.add("active");
}
function switch_converter2() {
  document.querySelector("#form0").classList.add("d-none");
  document.querySelector("#form2").classList.add("d-none");
  document.querySelector("#form1").classList.remove("d-none");
  document.querySelector("#home_btn").classList.remove("active");
  document.querySelector("#currency_btn").classList.remove("active");
  document.querySelector("#crypto_btn").classList.add("active");
}
function back_home() {
  document.querySelector("#form0").classList.remove("d-none");
  document.querySelector("#form1").classList.add("d-none");
  document.querySelector("#form2").classList.add("d-none");
  document.querySelector("#home_btn").classList.add("active");
  document.querySelector("#crypto_btn").classList.remove("active");
  document.querySelector("#currency_btn").classList.remove("active");
}
function showCurrencyName() {
  let selectCurrency = document.querySelector("#toCurrency");
  let currencyName = selectCurrency.options[selectCurrency.selectedIndex].text;
  document.querySelector("#currencyName").innerHTML = currencyName;
}

function showFromCurrencyName() {
  let selectFromCurrency = document.querySelector("#fromCurrency");
  let fromCurrencyName =
    selectFromCurrency.options[selectFromCurrency.selectedIndex].text;
  document.queryselector("#fromCurrencyName").innerHTML = fromCurrencyName;
}

const amountInput = document.querySelector("#amount");
const fromCurrencySelect = document.querySelector("#fromCurrency");
const toCurrencySelect = document.querySelector("#toCurrency");
const convertButton = document.querySelector("#convert");
const resultParagraph = document.querySelector("#result");

convertButton.addEventListener("click", () => {
  const amount = amountInput.value;
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;
  const apiKey = "685419b6bedfb725bb6af07ed3dd6fef8f20a83f05c066d1eb20a10c563c7801";
  const apiUrl = `https://min-api.cryptocompare.com/data/price?fsym=${toCurrency}&tsyms=${fromCurrency}&api_key=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const rate = data[fromCurrency];
      const result = amount / rate;

      resultParagraph.innerHTML = `${amount} ${fromCurrency} is equal to ${result.toFixed(
        8
      )} ${toCurrency}`;
    })
    .catch((error) => {
      resultParagraph.innerHTML = "Error: Unable to fetch exchange rate.";
      console.error(error);
    });
});
displayGraph.addEventListener("click", () => {
  const fromCurrency = fromCurrencySelect.value;
  const toCurrency = toCurrencySelect.value;
  const graphUrl = `https://widgets.cryptocompare.com/serve/v3/coin/chart?fsym=${toCurrency}&tsyms=${fromCurrency}`;

const scriptElement = document.createElement("script");
scriptElement.src = graphUrl;
const displayGraphElement = document.querySelector("#display_graph");
displayGraphElement.appendChild(scriptElement);
});

const amountInput2 = document.querySelector("#amount2");
const fromCurrencySelect2 = document.querySelector("#fromCurrency2");
const toCurrencySelect2 = document.querySelector("#toCurrency2");
const convertButton2 = document.querySelector("#convert2");
const resultParagraph2 = document.querySelector("#result2");

convertButton2.addEventListener("click", () => {
  const amount = amountInput2.value;
  const fromCurrency = fromCurrencySelect2.value;
  const toCurrency = toCurrencySelect2.value;
  const apiKey =
    "685419b6bedfb725bb6af07ed3dd6fef8f20a83f05c066d1eb20a10c563c7801";
  const apiUrl = `https://min-api.cryptocompare.com/data/price?fsym=${toCurrency}&tsyms=${fromCurrency}&api_key=${apiKey}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      const rate = data[fromCurrency];
      const result = amount / rate;

      resultParagraph2.innerHTML = `${amount} ${fromCurrency} is equal to ${result.toFixed(
        8
      )} ${toCurrency}`;
    })
    .catch((error) => {
      resultParagraph.innerHTML = "Error: Unable to fetch exchange rate.";
      console.error(error);
    });
});
displayGraph2.addEventListener("click", () => {
  const fromCurrency = fromCurrencySelect2.value;
  const toCurrency = toCurrencySelect2.value;
  const graphUrl = `https://widgets.cryptocompare.com/serve/v3/coin/chart?fsym=${fromCurrency}&tsyms=${toCurrency}`;

const scriptElement = document.createElement("script");
scriptElement.src = graphUrl;
const displayGraphElement = document.querySelector("#display_graph2");
displayGraphElement.appendChild(scriptElement);
});
