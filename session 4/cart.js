const cartData = JSON.parse(localStorage.getItem("myCart")) || [];
const display = document.getElementById("cartDisplay");

if (cartData.length === 0) {
  display.innerHTML = "<p style='text-align:center'>🛒 Your cart is empty.</p>";
}

cartData.forEach(item => {
  const div = document.createElement("div");
  div.className = "cart-card";
  div.innerHTML = `
    <img src="${item.img}" alt="${item.name}">
    <div class="cart-details">
      <h3>${item.name}</h3>
      <p>Brand: ${item.brand}</p>
      <p>Price: ₹${item.price}</p>
      <button class="btn" onclick="buyNow('${item.name}')">Buy Now</button>
    </div>
  `;
  display.appendChild(div);
});

function buyNow(product) {
  alert(`Thanks for buying ${product}!`);
}
