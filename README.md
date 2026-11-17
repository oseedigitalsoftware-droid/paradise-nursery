# Paradise Nursery

Paradise Nursery is a single page shopping cart application built with React and Redux Toolkit. Users browse houseplants grouped by category, add them to a cart, and manage quantities on the cart page.

## Tech stack

- React (Vite)
- Redux Toolkit (`@reduxjs/toolkit`, `react-redux`)
- React Router
- CSS

## Features

- Landing page with company name and a "Get Started" button
- Navigation bar with links to Home, Plants and Cart, plus a live cart counter
- Product listing with thumbnail, name, description and price for each plant
- Add to cart button that becomes disabled once the plant is in the cart
- Cart page with total cost, increment/decrement, delete and checkout
- About Us page describing the company

## Project structure

```
src/
  App.jsx
  App.css
  AboutUs.jsx
  ProductList.jsx
  CartItem.jsx
  CartSlice.jsx
```

## Run locally

```bash
npm install
npm run dev
```

## Author

Arris Budiyatno
