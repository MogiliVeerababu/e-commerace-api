const API_BASE = 'http://localhost:5000/api';
let token = localStorage.getItem('token') || '';

function showSignup() {
  document.getElementById('authSection').style.display = 'none';
  document.getElementById('signupSection').style.display = 'block';
}

function showLogin() {
  document.getElementById('signupSection').style.display = 'none';
  document.getElementById('authSection').style.display = 'block';
}

function logout() {
  token = '';
  localStorage.removeItem('token');
  document.getElementById('mainApp').style.display = 'none';
  document.getElementById('authSection').style.display = 'block';
}

function goToCart() {
  window.location.href = 'cart.html';
}

// ===== Login =====
document.getElementById('loginForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = loginEmail.value;
  const password = loginPassword.value;

  const res = await fetch(`${API_BASE}/auth/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, password })
  });

  const data = await res.json();

  if (data.token) {
    token = data.token;
    localStorage.setItem('token', token);
    document.getElementById('authSection').style.display = 'none';
    document.getElementById('mainApp').style.display = 'block';
    fetchProducts();
  } else {
    alert('Login failed!');
  }
});

// ===== Signup =====
document.getElementById('signupForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  const name = signupName.value;
  const email = signupEmail.value;
  const password = signupPassword.value;
  const role = signupRole.value;

  const res = await fetch(`${API_BASE}/auth/signup`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name, email, password, role }),
  });

  const data = await res.json();
  alert(data.msg || 'Signup complete');
  showLogin();
});

// ===== Fetch Products =====
async function fetchProducts() {
  const res = await fetch(`${API_BASE}/products`);
  const products = await res.json();

  const container = document.getElementById('productContainer');
  container.innerHTML = '';

  products.forEach(product => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h4>${product.name}</h4>
      <p>₹${product.price}</p>
      <p>${product.category}</p>
      <button onclick="addToCart('${product._id}')">Add to Cart</button>
    `;
    container.appendChild(card);
  });
}

// ===== Add to Cart =====
async function addToCart(productId) {
  const res = await fetch(`${API_BASE}/cart/add`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ productId, quantity: 1 }),
  });

  const data = await res.json();
  alert(data.msg || 'Added to cart!');
}

window.addEventListener('DOMContentLoaded', () => {
  const tokenFromStorage = localStorage.getItem('token');
  if (tokenFromStorage) {
    token = tokenFromStorage;
    document.getElementById('authSection').style.display = 'none';
    document.getElementById('mainApp').style.display = 'block';
    fetchProducts();
  }
});
