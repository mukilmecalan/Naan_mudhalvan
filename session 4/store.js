const gadgets = [
  {
    id: 1,
    name: "Noise Smartwatch",
    brand: "Noise",
    price: 2999,
    img: "https://m.media-amazon.com/images/I/417sL05uZaL._SX300_SY300_QL70_FMwebp_.jpg" // works
  },
  {
    id: 2,
    name: "boAt Earbuds",
    brand: "boAt",
    price: 1999,
    img: "https://m.media-amazon.com/images/I/41umTKqeziL._SX300_SY300_QL70_FMwebp_.jpg" // works
  },
  {
    id: 3,
    name: "Redmi Power Bank",
    brand: "Redmi",
    price: 1399,
    img: "https://m.media-amazon.com/images/I/313dDwp81RL._SX679_.jpg" // works
  },
  {
    id: 4,
    name: "OnePlus Charger",
    brand: "OnePlus",
    price: 899,
    img: "https://m.media-amazon.com/images/I/41UkP8qi9-L._SX300_SY300_QL70_FMwebp_.jpg" // works
  }
];



const container = document.getElementById("product-list");

gadgets.forEach(gadget => {
  const card = document.createElement("div");
  card.className = "item";
  card.innerHTML = `
    <img src="${gadget.img}" alt="${gadget.name}">
    <h3>${gadget.name}</h3>
    <p>Brand: ${gadget.brand}</p>
    <p>Price: ₹${gadget.price}</p>
    <button onclick="addToCart(${gadget.id})">Add to Cart</button>
  `;
  container.appendChild(card);
});

function addToCart(id) {
  const selected = gadgets.find(g => g.id === id);
  let cart = JSON.parse(localStorage.getItem("myCart")) || [];
  cart.push(selected);
  localStorage.setItem("myCart", JSON.stringify(cart));
  alert("Added to cart!");
}
