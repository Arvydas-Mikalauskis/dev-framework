import Delivery from '../../assets/delivery.svg'
import { useContext } from 'react'
import { CartContext } from '../Cart'
import { Link } from 'react-router-dom'

const CheckoutPage = () => {
  const todaysDate = new Date().toLocaleDateString()
  const { getCartTotal } = useContext(CartContext)

  return (
    <div className="container w-full mx-auto text-center">
      <div className="flex flex-col gap-8 items-center justify-center my-32 ">
        <img src={Delivery} alt="Image of animated delivery guy" width={320} />
        <h1 className="text-3xl md:text-5xl font-roboto font-semibold text-slate-700">
          Payment successful
        </h1>
        <p className="text-slate-600 text-lg md:text-xl">
          Your order has been confirmed and will be processed within 24 hours
          during working days.
        </p>
        <p className="font-semibold text-md text-slate-700">
          Thank you for shopping with us!
        </p>
        <div className="flex flex-col w-2/3 lg:w-1/2 items-center justify-center gap-2 bg-white border-2 shadow-md rounded-md font-roboto font-medium p-8">
          <div>
            Order number: <span>123456</span>
          </div>
          <hr className="w-1/2" />
          <div>
            Date: <span>{todaysDate}</span>
          </div>
          <hr className="w-1/2" />
          <div>
            Total: <span>{getCartTotal() + 12}$</span>
          </div>
          <hr className="w-1/2" />
          <div className="mt-4">
            <Link to={'/'} className="checkoutSuccess-btn">
              Continue shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPage
