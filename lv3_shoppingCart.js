// 4. Create a shopping cart
// Create a cart object with methods to add products, remove products, and calculate the total.
// Adding a product with an existing ID must increase its quantity instead of creating a duplicate
// entry.

const cart = {
  items: [],
  addProduct(product) {
    const existing = this.items.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += product.quantity;
    } else {
      this.items.push({ ...product });
    }
  },
  removeProduct(id) {
    this.items = this.items.filter(item => item.id !== id);
  },
  getTotal() {
    return this.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }
};

cart.addProduct({ id: 1, name: "Buku", price: 10, quantity: 1 });
cart.addProduct({ id: 1, name: "Buku", price: 10, quantity: 2 }); 
cart.addProduct({ id: 2, name: "Pena", price: 2, quantity: 5 });

console.log(cart.items); 
console.log("Total Belanja:", cart.getTotal()); 