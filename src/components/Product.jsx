import { Link } from 'react-router-dom'

const Product = ({ productListing }) => {
  const hasDiscount = productListing.price > productListing.discountedPrice
  const discountedPercentage = hasDiscount
    ? Math.round(
        ((productListing.price - productListing.discountedPrice) /
          productListing.price) *
          100
      )
    : 0

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="flex flex-col justify-center items-center mb-6">
          <h2 className="text-lg font-semibold my-2">{productListing.title}</h2>
          <img src={productListing.image.url} alt="Product Image" width={220} />
          <h3 className="text-lg italic mt-4">{productListing.description}</h3>
          <div className="priceSection flex justify-center items-center gap-2 mt-4">
            {hasDiscount ? (
              <>
                <p className="font-semibold text-lg text-red-500 line-through">
                  From: {productListing.price}$
                </p>
                <p className="font-semibold">
                  Now: {productListing.discountedPrice}$
                </p>
                <p className="absolute right-0 top-0 p-2 bg-green-300 font-semibold shadow-md rounded-md ">
                  Save {discountedPercentage}%!
                </p>
              </>
            ) : (
              <p className="text-lg font-semibold">{productListing.price}</p>
            )}
            <Link
              to={`/product/${productListing.id}`}
              className="bg-slate-300 font-semibold shadow-md rounded-lg px-4 py-2 ml-4"
            >
              View Product
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
