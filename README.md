
## 🛒 Simple E-Commerce Web App

A basic E-Commerce platform built with the **MERN stack** that allows users to sign up, login, browse products, add items to their cart, and place orders.

---

### 📌 Features

* 🔐 User Authentication (JWT based)
* 👥 Role-Based Access (Customer/Admin)
* 🛍️ Product Listing (with image, category, and price)
* ➕ Add to Cart
* 🛒 View Cart with Quantity and Total
* 🚚 Place Order with Delivery Address
* 🔁 Logout and Session Management

---

### ⚙️ Tech Stack

**Frontend**

* HTML, CSS, Vanilla JavaScript

**Backend**

* Node.js + Express.js
* MongoDB + Mongoose
* JWT Authentication
* Role-based Access Middleware

---

### 📁 Project Structure


server
  ├── models/
  ├── routes/
  ├── middleware/
  ├── controllers/
  ├── app.js
  └── .env

/public
  ├── index.html
  ├── cart.html
  ├── style.css
  └── index.js

README.md




### 🚀 Getting Started

#### 1. Clone the Repo

```bash
git clone https://github.com/your-username/simple-ecommerce.git
cd simple-ecommerce
```

---

#### 2. Backend Setup

```bash
cd server
npm install
```

Create a `.env` file in `server/`:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
PORT=5000
```

Start the server:

```bash
node app.js
```

---

#### 3. Frontend Setup

No build tools required. Just open `public/index.html` in your browser:

```
http://localhost:3000
```

Make sure `index.js` points to correct backend:

```js
const API_BASE = 'http://localhost:5000/api';
```

---

### 🧪 API Endpoints (Backend)

| Route               | Method | Description              |
| ------------------- | ------ | ------------------------ |
| `/api/auth/signup`  | POST   | Register new user        |
| `/api/auth/login`   | POST   | Login and get JWT        |
| `/api/products`     | GET    | Get all products         |
| `/api/products`     | POST   | Add product (admin only) |
| `/api/cart/add`     | POST   | Add product to cart      |
| `/api/cart`         | GET    | Get current user's cart  |
| `/api/cart/remove`  | POST   | Remove product from cart |
| `/api/orders/place` | POST   | Place order with address |

---

### 📸 Screenshots

> 📦 Product Page
> 🛒 Cart Page
> ✅ Order Confirmation

(Add screenshots here)

---

### 📚 Future Improvements

* Admin Dashboard (Add/Edit/Delete products)
* Product pagination
* Category filter
* Payment Integration
* Order history tracking

---

### 👨‍💻 Author

**Veera Babu Mogili**
[GitHub Profile](https://github.com/your-username)
[LinkedIn](https://linkedin.com/in/your-profile)

---

