const products = [
  { id: 1, name: "Laptop", price: 10000000, stock: 5 },
  { id: 2, name: "Mouse", price: 150000, stock: 20 },
  { id: 3, name: "Keyboard", price: 300000, stock: 10 }
];

function getAllProducts() {
  return products;
}

console.log(getAllProducts());

function getProductById(id) {
  const product = products.find(item => item.id === id);
  return product;
}

console.log(getProductById(2));

function getAvailableProducts() {
  return products.filter(item => item.stock > 0);
}

console.log(getAvailableProducts());

function buyProduct(productId, quantity) {
  const product = products.find(item => item.id === productId);

  if (!product) {
    return "Product not found";
  }

  if (product.stock < quantity) {
    return "Stock not enough";
  }

  product.stock = product.stock - quantity;

  return {
    message: "Purchase success",
    product: product
  };
}

console.log(buyProduct(1, 2));
console.log(products);

//Latihan 1
function searchProductByName(keyword) {
  const result = products.filter(item => 
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );

  return result;
}

console.log(searchProductByName("lap"));
console.log(searchProductByName("KEY"));
console.log(searchProductByName("o"));

//Latihan 2
const cart = [
  { productId: 1, qty: 2 },
  { productId: 3, qty: 1 }
];

function calculateTotal(cart) {
  let total = 0;

  for (const item of cart) {
    const product = products.find(p => p.id === item.productId);

    if (!product) {
      return "Product not found in cart";
    }

    total = total + (product.price * item.qty);
  }

  return total;
}

console.log(calculateTotal(cart));

//Latihan 3
function addProduct(name, price, stock) {

  const newId = products.length + 1;

  const newProduct = {
    id: newId,
    name: name,
    price: price,
    stock: stock
  };

  // masukkan ke products array
  products.push(newProduct);

  // return product baru
  return newProduct;
}

console.log(addProduct("Monitor", 2000000, 7));
console.log(products);
