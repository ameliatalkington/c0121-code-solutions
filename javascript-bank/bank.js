/* exported Bank */
function Bank() {
  this.nextAccountNumber = 1;
  this.accounts = [];
}

Bank.prototype.openAccount = function (holder, balance) {
  var newAccount = new Account();
  if (balance > 0) {
    newAccount.holder = holder;
    newAccount.number = this.nextAccountNumber;
    newAccount.deposit(balance);
    this.accounts.push(newAccount);
    this.nextAccountNumber++;
    return newAccount.number;
  } else {
    return null;
  }
};

Bank.prototype.getAccount = function (number) {
  for (var j = 0; j < this.accounts.length; j++) {
    if (this.accounts[j].number === number) {
      return this.accounts[j];
    }
  }
  return null;
};

Bank.prototype.getTotalAssets = function () {
  var total = 0;
  for (var k = 0; k < this.accounts.length; k++) {
    total += this.accounts[k].getBalance();
  }
  return total;
};
