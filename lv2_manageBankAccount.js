//  Manage a bank account
// Create an account object with owner, balance, and methods deposit(amount) and
// withdraw(amount). Reject negative amounts and withdrawals that exceed the balance.

class BankAccount {
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }

  deposit(amount) {
    if (amount <= 0) return "Jumlah deposit harus positif.";
    this.balance += amount;
    return `Deposit berhasil untuk ${this.owner}. Saldo saat ini: ${this.balance}`;
  }

  withdraw(amount) {
    if (amount <= 0) return "Jumlah penarikan harus positif.";
    if (amount > this.balance) return `Saldo ${this.owner} tidak mencukupi.`;
    this.balance -= amount;
    return `Penarikan berhasil untuk ${this.owner}. Saldo saat ini: ${this.balance}`;
  }
}

const accounts = [
  new BankAccount("Andi", 100),
  new BankAccount("Budi", 500),
  new BankAccount("Siti", 300)
];

console.log(accounts[0].deposit(50)); 
console.log(accounts[1].withdraw(100)); 

console.log("\nDaftar Saldo Akun:");
accounts.forEach(acc => {
  console.log(`- Pemilik: ${acc.owner}, Saldo: ${acc.balance}`);
});