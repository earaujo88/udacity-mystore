# Angular My Store Application

This Angular application mimics an online store with features including a product list, product detail view, and a shopping cart. Users can add products to the cart from both the product list and product detail pages. The cart allows users to remove items and includes a form to submit orders.

## 🔧 Features

- **Product List**: Displays all available products.
- **Product Detail**: Shows detailed information about a selected product.
- **Shopping Cart**:
  - Add products from the product list and detail pages.
  - Remove items from the cart.
  - Submit an order using a form.

## Prerequisites

Ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)

## Installation Instructions

1. **Clone the repository**:
   ```bash
   git clone https://github.com/earaujo88/udacity-mystore.git
   cd udacity-mystore/my-store
   ```

2. **Install dependencies**:
   Run the following command to install the required dependencies using npm:
   ```bash
   npm install
   ```

3. **Start the Angular server**:
   You can start the Angular application on the default port or specify a custom port.

   - **Default Port (4200)**:
     ```bash
     ng serve
     ```

   - **Custom Port (e.g., 4300)**:
     ```bash
     ng serve --port 4300
     ```

4. **Open your browser**:
   Navigate to `http://localhost:4200` (or your custom port) to view the application.