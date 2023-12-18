# Let's Shop - React E-Commerce Web Application
## Project Overview
**Let's Shop** is a simple React-based e-commerce web application that allows users to browse a collection of products, view product details, add items to their cart, and complete the checkout process. The application is designed with a clean and responsive user interface, making it easy for users to navigate and interact with the features.

## Key Features:

1. **Product Listing:** Users can view a list of available products, each displaying the product name, price, and a brief description. Clicking on a product leads to detailed information about that product.

2. **Product Details:** Detailed product information, including the name, price, description, and an image, is displayed on the product details page. Users can also view a larger image of the product.

3. **Shopping Cart:** Users can add products to their shopping cart, view the cart contents, and remove items. The cart provides a summary of the selected items and the total cost.

4. **Checkout:** The checkout page allows users to enter their name, address, and payment method to complete their purchase. Form validation ensures that users provide all required information.

5. **Notifications:** The application uses the `react-notifications` library to display success and error notifications, providing feedback to users after submitting the checkout form.

6. **Navbar:** A navigation bar provides links to the home page, cart, and checkout, along with the total cost of items in the cart.

7. **Footer:** A simple footer displays copyright information, providing a professional finish to the application.

## Technologies Used:

- **React:** A JavaScript library for building user interfaces.
- **React Router:** A routing library for React applications, enabling navigation between different components.
- **Tailwind CSS:** A utility-first CSS framework for styling the application with ease.
- **react-notifications:** A library for adding notifications to React applications.


# Project Architecture
## Folder Structure

react-ecommerce-web-app/
|-- public/
|-- src/
|   |-- components/
|   |   |-- cart/
|   |   |   |-- Cart.js
|   |   |-- checkout/
|   |   |   |-- Checkout.js
|   |   |-- itemlist/
|   |   |   |-- ItemList.js
|   |   |-- navbar/
|   |   |   |-- Navbar.js
|   |   |-- productDetails/
|   |   |   |-- ProductDetails.js
|   |   |-- footer/
|   |   |   |-- Footer.js
|   |-- utilities/
|   |   |-- AppProvider.js
|   |-- assests/
|   |   |-- products.json
|   |   |-- images.jpg
|   |-- App.js
|   |-- index.js
|-- README.md
|-- package.json


# Component Structure
## App.js: 
The main component that sets up the React Router and renders different components based on the route.

## AppProvider.js: 
Manages the application state using React Context API. Provides the state and functions related to products, cart, and total to the entire app.

## NavBar.js:
This is the page's header, where user can navigate from one page to another by the given name/link

## ItemList.js: 
Displays a list of products with the ability to add them to the cart.

## ProductDetails.js: 
Displays details of a specific product.

## Cart.js: 
Displays the items added to the cart, allowing users to remove items and showing the total price.

## Checkout.js: 
Implements a simple checkout form with fields for name, address, and payment method. Displays an order summary and total amount.

## Footer.js:
Displays footer section of a the page.


## Setting Up and Running the Project
Prerequisites
Node.js and npm should be installed on your machine.
Steps

**Clone the repository:**

git clone https://github.com/your-username/my-react-ecommerce-app.git

Navigate to the project directory:

```javascript
cd my-react-ecommerce-app

Install dependencies:

npm install

Run the application:

npm start

Open your browser and visit http://localhost:3000 to view the application.
```

# Additional Notes
The project uses create-react-app for project setup and configuration.
Tailwind CSS is used for styling, and the styles are applied through utility classes.
Dummy product data is stored in the products.json file.
The project includes navigation between item listings, product details, the shopping cart, and the checkout form.
State management is implemented using the React Context API through AppProvider.js.
The project structure is designed to be modular, making it easy to extend and maintain.

Thanks for your time and consideration.
