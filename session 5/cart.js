const con = document.getElementById("container");
let cartData = JSON.parse(localStorage.getItem("Cartdata")) || [];

function displayCart() {
  con.innerHTML = "";

  if (cartData.length === 0) {
    con.innerHTML = "<h2 style='text-align:center;'>🛒 Your cart is empty.</h2>";
    return;
  }

  cartData.forEach((item, index) => {
    const box = document.createElement("div");
    box.id = "box";
    box.innerHTML = `
      <img src="${item.image}" alt="${item.title}" />
      <h3>${item.title}</h3>
      <p><strong>Category:</strong> ${item.category}</p>
      <p><strong>Price:</strong> $${item.price}</p>
      <button class="buy" onclick="buyNow(${item.id})">Buy Now</button>
      <button class="remove" onclick="removeItem(${index})">Remove</button>
    `;
    con.appendChild(box);
  });
}

function buyNow(id) {
  alert(`Proceeding to checkout for product ID: ${id}`);
}

function removeItem(index) {
  cartData.splice(index, 1);
  localStorage.setItem("Cartdata", JSON.stringify(cartData));
  displayCart();
}

displayCart();
