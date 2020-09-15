(function () {
  const store = {
    inputBillAmount: 0,
    selectedTipRange: 0,
    splitNumOfPerson: 1,
  };

  /* DOM elements */
  /* inputs */
  const billAmountInputElem = document.getElementById("bill-amount");
  const tipRangeInputElem = document.getElementById("tip-range");
  const splitPersonInputElem = document.getElementById("split-num-of-person");

  /* element to display */
  const tipRangePercentageElem = document.getElementById(
    "tip-range-percentage"
  );
  const totalTipAmountElem = document.getElementById("total-tip-amount");
  const totalAmountElem = document.getElementById("total-amount");
  const numOfPersonElem = document.getElementById("num-of-person");
  const amountPerPersonElem = document.getElementById("amount-per-person");
  const tipPerPersonElem = document.getElementById("tip-per-person");

  /* addEventListeners */
  billAmountInputElem.addEventListener("change", (e) => {
    store.inputBillAmount = +e.target.value;
    calculateAmount();
  });
  tipRangeInputElem.addEventListener("input", () => {
    store.selectedTipRange = +(tipRangeInputElem.value / 100);
    tipRangePercentageElem.innerText = tipRangeInputElem.value;
    calculateAmount();
  });
  splitPersonInputElem.addEventListener("input", () => {
    store.splitNumOfPerson = +splitPersonInputElem.value;
    numOfPersonElem.innerText = splitPersonInputElem.value;
    calculateAmount();
  });

  function calculateAmount() {
    const { inputBillAmount, selectedTipRange, splitNumOfPerson } = store;
    const totalTipAmount = inputBillAmount * selectedTipRange;
    const totalAmount = totalTipAmount + inputBillAmount;

    totalTipAmountElem.innerText = totalTipAmount;
    totalAmountElem.innerText = totalAmount;
    amountPerPersonElem.innerText = totalAmount / splitNumOfPerson;
    tipPerPersonElem.innerText = totalTipAmount / splitNumOfPerson;
  }
})();
