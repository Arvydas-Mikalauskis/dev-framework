import { Link } from 'react-router-dom'
import { calculateDiscount } from '../utils/price'

const Product = ({ productListing }) => {
  const { hasDiscount, discountedPercentage } = calculateDiscount(
    productListing.price,
    productListing.discountedPrice
  )

  return (
    <div className="bg-stone-100  rounded-xl shadow-md relative">
      <div className="flex flex-col justify-between items-center h-full p-4 mb-6 border border-slate-300 rounded-lg shadow-md">
        <div className="flex flex-col items-center">
          <img
            src={productListing.image.url}
            alt="Product Image"
            width={220}
            className="h-52 object-cover rounded-lg shadow-sm border-2 border-slate-300"
          />
          <h2 className="text-lg font-semibold my-2">{productListing.title}</h2>
          <h3 className="text-lg italic font-roboto px-2 mt-2">
            {productListing.description}
          </h3>
        </div>
        <div className="priceSection flex flex-col justify-center items-center gap-2 mt-auto">
          {hasDiscount ? (
            <>
              <p className="font-semibold font-roboto text-red-600 line-through">
                From: {productListing.price}$
              </p>
              <p className="font-semibold text-lg font-roboto text-slate-700">
                Now: {productListing.discountedPrice}$
              </p>
              <p className="absolute right-0 top-0 p-2 bg-gradient-to-r from-red-400 to-red-600 font-semibold text-zinc-100 shadow-md rounded-md ">
                Save {discountedPercentage}%!
              </p>
            </>
          ) : (
            <p className="text-lg font-semibold font-roboto">
              {productListing.price}$
            </p>
          )}
          <Link
            to={`/product/${productListing.id}`}
            className="bg-gradient-to-r from-slate-500 to-slate-900 font-roboto font-semibold shadow-md rounded-lg px-4 py-2 mb-2 text-zinc-100 transition hover:scale-110 hover:translate-y-1 hover:duration-300 ease-in "
          >
            View Product
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Product
