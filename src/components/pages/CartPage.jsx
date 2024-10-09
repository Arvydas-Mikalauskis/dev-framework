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
  const {
    cartItems,
    addToCart,
    reduceFromCart,
    removeFromCart,
    getCartTotal,
    clearCart,
  } = useContext(CartContext)

  return (
    <>
      <div className="container-xl mx-auto p-6 my-24">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          <div className="space-y-6 md:col-start-1 md:col-end-4">
            <h2 className="text-2xl font-semibold">Your Cart</h2>

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="bg-white relative p-3 sm:p-4 rounded-lg shadow-md flex flex-col items-center sm:flex-row"
              >
                <img
                  src={item.image.url}
                  alt={item.title}
                  className="w-48 h-48 sm:w-24 sm:h-24 object-cover rounded-md shadow-md"
                />
                <div className="sm:ml-6  font-roboto">
                  <h3 className="text-2xl text-center sm:text-start sm:text-lg font-semibold mt-1 sm:mt-0">
                    {item.title}
                  </h3>
                  <p className="font-semibold my-4 text-center sm:text-start sm:mt-2">
                    Full price: ${item.price}
                  </p>
                </div>
                <div className="sm:ml-auto flex items-center">
                  <div className="flex flex-col items-center text-xl  sm:mr-16 my-2 sm:my-0">
                    <div>
                      <h4>Quantity:</h4>
                    </div>
                    <div className="flex gap-4">
                      <button
                        onClick={() => {
                          reduceFromCart(item)
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
                    className="text-red-600 text-xl absolute sm:relative bottom-5 sm:top-0 right-3 sm:right-0"
                  >
                    <IoTrashOutline />
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-white w-full md:col-start-4 md:col-end-6  mx-auto p-6 rounded-lg shadow-md font-roboto">
            <h2 className="text-2xl text-center pb-4 font-semibold">
              Order Summary
            </h2>
            <div className="pt-4">
              <div className="flex justify-between text-xl font-medium">
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
              <div className="flex flex-col sm:flex-row md:flex-col md:gap-8 sm:gap-8 gap-5 justify-between mt-32">
                <Link
                  to={'/'}
                  className="flex items-center gap-2 md:order-2 text-slate-800 opacity-80"
                >
                  <FaArrowLeft /> Continue Shopping
                </Link>
                <Link
                  to={'/checkout'}
                  onClick={clearCart}
                  className="checkoutBtn"
                >
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
