import { MdOutlineShoppingCart } from 'react-icons/md'
import { CartContext } from './Cart'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const CartIcon = () => {
  const { cartItems } = useContext(CartContext)

  return (
    <div className="relative">
      <div>
        <MdOutlineShoppingCart className="navIcons" />
      </div>
      {cartItems.map((item) =>
        item.quantity > 0 ? (
          <div
            key={item.id}
            className="absolute bg-red-500 text-white text-xs font-bold rounded-full w-4 h-4 flex justify-center items-center"
            style={{ top: '-8px', right: '-8px' }}
          >
            {item.quantity}
          </div>
        ) : null
      )}
    </div>
  )
}

export default CartIcon
