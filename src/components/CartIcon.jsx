import { AiOutlineShoppingCart } from 'react-icons/ai'
import { CartContext } from './Cart'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const CartIcon = () => {
  const { cartItems } = useContext(CartContext)

  return (
    <div className="relative">
      <Link to="#">
        <AiOutlineShoppingCart className="text-2xl" />
      </Link>
      {cartItems.map((item) =>
        item.quantity > 0 ? (
          <div
            key={item.id}
            className="absolute bg-gray-800 text-white text-xs font-bold rounded-full w-5 h-5 flex justify-center items-center"
            style={{ top: '-10px', right: '-10px' }}
          >
            {item.quantity}
          </div>
        ) : null
      )}
    </div>
  )
}

export default CartIcon
