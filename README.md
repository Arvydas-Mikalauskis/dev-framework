# Overview

This project is a Noroff school assignment designed to introduce and teach concepts of the React JS framework. It is an eCommerce store built using React, aimed at applying core React concepts. The application fetches product data from the Noroff Online Shop API. The store includes several pages with dynamic product displays, a cart system, and form validation for user interactions.

## Pages

### Homepage

Displays a list of all products with a look-ahead search bar. The search feature filters products as the user types in a product name. Each product is shown in a card format with a "View product" button that navigates to the product details page.

### Product Page

Displays detailed information about a selected product, including the title, description, price, and available discounts. Users can add products to the cart from this page. Reviews for the product (if available) are also shown.

### Cart Page

Displays all items currently in the cart along with a total cost. Users can proceed to checkout from here.

### Checkout Success Page

Confirms a successful order and provides an option to return to the store. Upon successful checkout, the cart is cleared.

### Contact Page

Includes a form with validation for the following fields:

- **Full Name** (min 3 characters)
- **Subject** (min 3 characters)
- **Email** (valid email required)
- **Message** (min 3 characters)

## Features

- **Cart Functionality**: Users can add items to the cart, view them on the cart page, and proceed to checkout.
- **Search**: Look-ahead search bar for filtering products based on input.
- **Responsive Design**: The UI adjusts to different screen sizes for a better user experience.
- **Dynamic Routing**: React Router is used for page navigation and dynamic segments for product pages.
- **Form Validation**: Input validation is implemented for the contact form.
- **Discount Calculation**: If a product has a discounted price, the discount percentage is calculated and displayed.

## Technologies Used

- React
- React Router
- CSS Modules / Styled Components
- Tailwind CSS
- React-Icons
- React-toastify
- React-spinners
- React-search-autocomplete
- Noroff Online Shop API

## Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the app:
   ```bash
   npm run dev
   ```

## Deployment

This project is deployed on Netlify. You can view the live version here: [https://fastidious-cheesecake-23f050.netlify.app/](#).

## License

This project is licensed under the MIT License.
