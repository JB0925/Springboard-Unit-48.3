function createAccount(pin, amount) {
  let accountPin = pin;
  let accountAmount = amount || 0;
  return {
    checkBalance(userPin) {
      if (userPin !== accountPin) return "Invalid PIN.";
      return `$${accountAmount}`;
    },

    deposit(userPin, amountToAdd) {
      if (userPin !== accountPin) return "Invalid PIN.";
      accountAmount += amountToAdd;
      return `Succesfully deposited $${amountToAdd}. Current balance: $${accountAmount}.`;
    },

    withdraw(userPin, amountToWithdraw) {
      if (userPin !== accountPin) return "Invalid PIN.";
      if (accountAmount - amountToWithdraw < 0) {
        return "Withdrawal amount exceeds account balance. Transaction cancelled.";
      }
      accountAmount -= amountToWithdraw;
      return `Succesfully withdrew $${amountToWithdraw}. Current balance: $${accountAmount}.`;
    },

    changePin(userPin, newUserPin) {
      if (userPin !== accountPin) return "Invalid PIN.";
      accountPin = newUserPin;
      return "PIN successfully changed!";
    },
  };
}

module.exports = { createAccount };
