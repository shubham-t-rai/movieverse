# 🎬 MovieVerse

MovieVerse is a **React-based movie discovery app** where users can explore trending movies, search for titles, watch trailers, and manage a personalized watchlist with authentication.

---

## 🚀 Features

* 🔍 **Search Movies** – Real-time movie search
* 🎥 **Movie Details Page** – View complete information about a movie
* ▶️ **Watch Trailer** – Play trailers inside the app
* ⭐ **Personal Watchlist** – Save movies (requires login)
* 🔐 **Authentication (Auth0)** – Secure login/logout functionality
* 📱 **Responsive UI** – Optimized for all devices
* ⚡ **Smooth Performance** – Optimized React hooks & state management

---

## 🛠️ Tech Stack

* **Frontend:** React (Vite)
* **Styling:** Tailwind CSS
* **State Management:** Context API
* **Authentication:** Auth0
* **API:** TMDB API
* **HTTP Client:** Axios

---

## 🔐 Authentication (Auth0)

* Users can securely log in and log out
* Watchlist functionality is tied to authenticated users
* Protected features (like adding to watchlist) require login
* Integrated using `@auth0/auth0-react`

---

## ⚙️ Installation & Setup

1. **Clone the repository**

```bash
git clone https://github.com/your-username/movieverse.git
cd movieverse
```

2. **Install dependencies**

```bash
npm install
```

3. **Create ****`.env`**** file**

```env
VITE_BASE_URL=https://api.themoviedb.org
VITE_TMDB_API_KEY=your_api_key_here

# Auth0 Config
VITE_AUTH0_DOMAIN=your-auth0-domain
VITE_AUTH0_CLIENT_ID=your-client-id
```

4. **Run the app**

```bash
npm run dev
```

---

## 📌 Future Improvements

* 🎭 Genre-based filtering
* 📊 Pagination / Infinite scroll
* 🌙 Dark mode
* 🎯 Personalized recommendations
* ☁️ Move watchlist from localStorage → database

---
