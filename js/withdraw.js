// 1.  add withdraw button event handler.
// 2. get withdraw amount by using getInpu
// 3. get previous withdraw amount by using getTextElementValue function.
// 4. calculate new withdraw total and set the value .
// 4.5: set new withdraw total by using setTextElementValueById. function.
// 5. get previous balance total by using getTextelementvalue by id.
// 6. calculate new balance total.
// 7. Set balance total using setTextElementvalueby id.

document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdrawAmount = getInputValueById("withdraw-field");

  if (isNaN(newWithdrawAmount)) {
    alert("Please enter a valid number");
    return;
  }

  const previousBalanceTotal = getTextElementValueById("balance-total");
  const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
  setTextElementValueById("balance-total", newBalanceTotal);

  const previousWithdrawTotal = getTextElementValueById("withdraw-total");

  const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
  setTextElementValueById("withdraw-total", newWithdrawTotal);

  if (newWithdrawAmount > newBalanceTotal) {
    alert("You don't have sufficient balance");
    return;
  }
});
