import { useContext } from 'react'
import { CartContext } from '../Cart'
import { IoTrashOutline } from 'react-icons/io5'
import {
  TbSquareRoundedPlusFilled,
  TbSquareRoundedMinusFilled,
} from 'react-icons/tb'
import { FaArrowLeft } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const CartPage = () => {
  const { cartItems, addToCart, removeFromCart, getCartTotal } =
    useContext(CartContext)

  return (
    <>
      <div className="container mx-auto p-6 my-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* <!-- Left Column: Cart Items --> */}
          <div className="space-y-6">
            <h2 className="text-2xl font-semibold">Your Cart</h2>

            {/* Map over the items from the API */}
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white p-4 rounded-lg shadow-md flex items-center"
              >
                <img
                  src={item.image.url}
                  alt={item.title}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div className="ml-6 font-roboto">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="font-semibold mt-2">
                    Full price: ${item.price}
                  </p>
                </div>
                <div className="ml-auto flex items-center">
                  {/* Quantity input and remove button */}
                  <div className="flex flex-col items-center mr-16">
                    <div>
                      <h4>Quantity:</h4>
                    </div>
                    <div className="flex gap-4">
                      <button
                        onClick={() => {
                          removeFromCart(item)
                        }}
                      >
                        <TbSquareRoundedMinusFilled />
                      </button>
                      <p>{item.quantity}</p>
                      <button
                        onClick={() => {
                          addToCart(item)
                        }}
                      >
                        <TbSquareRoundedPlusFilled />
                      </button>
                    </div>
                  </div>
                  <button
                    onClick={() => {
                      removeFromCart(item)
                    }}
                    className="text-red-600 text-xl"
                  >
                    <IoTrashOutline />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* <!-- Right Column: Summary --> */}
          <div className="bg-white w-full  mx-auto p-6 rounded-lg shadow-md font-roboto">
            <h2 className="text-xl font-bold">Order Summary</h2>
            <div className="mt-4">
              <div className="flex justify-between  font-medium">
                <span>Subtotal</span>
                <span>${getCartTotal()}</span>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between  font-medium mt-2">
                <span>Shipping</span>
                <span>12$</span>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between  font-medium mt-2">
                <span>Tax</span>
                <span>Included</span>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between  uppercase text-xl font-semibold">
                <span>Total</span>
                <span>{getCartTotal() + 12}</span>
              </div>
              <div className="flex justify-between mt-32">
                <Link
                  to={'/'}
                  className="flex items-center gap-2 text-slate-800"
                >
                  <FaArrowLeft /> Continue Shopping
                </Link>
                <Link to={'/checkout'} className="add-to-cart-btn">
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CartPage
