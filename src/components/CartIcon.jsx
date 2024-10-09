import { MdOutlineShoppingCart } from 'react-icons/md'
import { CartContext } from './Cart'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const CartIcon = () => {
  const { cartItems } = useContext(CartContext)
  const totalItems = cartItems.length

  return (
    <div className="relative">
      <div>
        <MdOutlineShoppingCart className="navIcons" />
      </div>
      {totalItems > 0 && (
        <div
          className="absolute bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex justify-center items-center"
          style={{ top: '-8px', right: '-8px' }}
        >
          {totalItems}
        </div>
      )}
    </div>
  )
}

export default CartIcon
