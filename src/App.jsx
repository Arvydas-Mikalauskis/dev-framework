import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from 'react-router-dom'
import Homepage from './components/pages/Homepage'
import MainLayout from './components/layout/MainLayout'
import NotFoundPage from './components/pages/NotFoundPage'
import ProductPage, { productLoader } from './components/pages/Productpage'
import CartPage from './components/pages/CartPage'
import ContactPage from './components/pages/ContactPage'
import './App.css'
import CheckoutPage from './components/pages/CheckoutPage'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Homepage />} />
        <Route
          path="/product/:id"
          element={<ProductPage />}
          loader={productLoader}
        />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App
