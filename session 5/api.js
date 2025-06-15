const container = document.getElementById("products");

fetch("https://fakestoreapi.com/products")
  .then(res => res.json())
  .then(data => displayProducts(data))
  .catch(err => {
    container.innerHTML = "<p>Failed to load products.</p>";
    console.error(err);
  });

function displayProducts(data) {
  data.forEach(product => {
    const box = document.createElement("div");
    box.className = "product";
    box.innerHTML = `
      <img src="${product.image}" alt="${product.title}" />
      <h3>${product.title}</h3>
      <p><strong>Category:</strong> ${product.category}</p>
      <p><strong>Price:</strong> $${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    container.appendChild(box);
  });
}

function addToCart(id) {
  fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then(product => {
      let cart = JSON.parse(localStorage.getItem("Cartdata")) || [];

      // avoid duplicates
      if (!cart.some(item => item.id === product.id)) {
        cart.push(product);
        localStorage.setItem("Cartdata", JSON.stringify(cart));
        alert("Product added to cart!");
      } else {
        alert("Product already in cart!");
      }
    });
}
