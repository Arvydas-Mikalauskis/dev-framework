import { createContext, useEffect, useState } from 'react'
import { calculateDiscount } from '../utils/price'
import { toast } from 'react-toastify'

export const CartContext = createContext()

const Cart = ({ children }) => {
  const [cartItems, setCartItems] = useState(
    localStorage.getItem('cartItems')
      ? JSON.parse(localStorage.getItem('cartItems'))
      : []
  )

  const addToCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id)

    if (isItemInCart) {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      )
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }])
      toast.success('Item added to cart')
    }
  }

  const reduceFromCart = (item) => {
    const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id)

    if (isItemInCart.quantity === 1) {
      setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id))
    } else {
      setCartItems(
        cartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      )
    }
  }

  const removeFromCart = (item) => {
    setCartItems(cartItems.filter((cartItem) => cartItem.id !== item.id))
  }

  const clearCart = () => {
    setCartItems([])
  }

  const getCartTotal = () => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.discountedPrice * item.quantity,
      0
    )
    return parseFloat(total.toFixed(2))
  }

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

  useEffect(() => {
    const cartItems = localStorage.getItem('cartItems')
    if (cartItems) {
      setCartItems(JSON.parse(cartItems))
    }
  }, [])

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        reduceFromCart,
        removeFromCart,
        getCartTotal,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export default Cart
