import { useState, useContext } from 'react'
import { useParams, useLoaderData } from 'react-router-dom'
import { calculateDiscount } from '../../utils/price'
import RelatedProducts from '../RelatedProducts'
import { MdStarRate } from 'react-icons/md'
import { CartContext } from '../Cart'

const ProductPage = () => {
  const { id } = useParams()
  const product = useLoaderData()

  const { cartItems, addToCart } = useContext(CartContext)

  const [showDescription, setShowDescription] = useState(true)
  const [showReviews, setShowReviews] = useState(false)

  const handleDescription = () => {
    setShowReviews(false)
    setShowDescription(true)
  }

  const handleReviews = () => {
    setShowDescription(false)
    setShowReviews(true)
  }

  const { hasDiscount, discountedPercentage } = calculateDiscount(
    product.data.price,
    product.data.discountedPrice
  )

  return (
    <>
      <div className="container mx-auto mt-12 md:mt-32 py-8 mb-12">
        <div className="relative max-w-5xl bg-indigo-50 border-2 border-slate-300 shadow-lg rounded-sm p-4 mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[280px] sm:h-[460px] rounded-lg mb-4">
                <img
                  className="w-full h-full object-cover rounded-md shadow-md"
                  src={product.data.image.url}
                  alt="Product Image"
                />
              </div>
              <div className="flex w-full items-center justify-center mb-4">
                <div className="w-full pt-2 md:pt-0 md:w-1/2 px-2">
                  <button
                    onClick={() => addToCart(product.data)}
                    className="w-full add-to-cart-btn"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4 mt-2 sm:mt-0">
              <h2 className="text-2xl text-center sm:text-start font-semibold text-slate-800 font-poppins  mb-2">
                {product.data.title}
              </h2>
              <div className="flex flex-col sm:flex-row gap-4 mt-3 items-center font-roboto text-lg mb-2 ">
                <div className="flex items-center text-gray-600">
                  <p className="italic">
                    <span>User rating:</span> {product.data.rating}
                  </p>
                  <MdStarRate />
                </div>
                <div className="flex gap-2 italic text-gray-600">
                  Tags:
                  <ul className="flex gap-2">
                    {product.data.tags.map((tag, index) => (
                      <li key={index}>#{tag}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="flex items-center justify-center sm:justify-start font-roboto mt-4 gap-3">
                <h2 className="text-lg font-semibold">Price:</h2>
                {hasDiscount ? (
                  <>
                    <p className="font-medium text-sm sm:text-lg text-red-500 line-through">
                      From: {product.data.price}$
                    </p>
                    <p className="font-semibold text-sm sm:text-lg">
                      Now: {product.data.discountedPrice}$
                    </p>
                    <p className="italic absolute top-0 right-0 lg:relative p-3 lg:p-2 bg-green-300 font-medium shadow-md rounded-md ">
                      Save {discountedPercentage}%!
                    </p>
                  </>
                ) : (
                  <p className="text-lg font-semibold">{product.data.price}$</p>
                )}
              </div>
              <div className="mt-2 text-center sm:text-start font-medium font-roboto text-lg text-slate-600">
                <span>Availability:</span>
                <span className="text-slate-800 pl-2">In Stock</span>
              </div>
              <div>
                <div className="flex justify-center sm:justify-start pt-8 mb-8 gap-12 text-lg font-roboto font-medium">
                  <button
                    className="description-btn"
                    onClick={handleDescription}
                  >
                    Description
                  </button>
                  <button className="reviews-btn" onClick={handleReviews}>
                    Reviews
                  </button>
                </div>
                <div>
                  <div className="w-full font-roboto">
                    {showDescription ? (
                      <p className="text-xl italic text-center sm:text-start md:my-0 my-16">
                        {product.data.description}
                      </p>
                    ) : (
                      <div className="my-12 sm:my-0">
                        {product.data.reviews.length > 0 ? (
                          product.data.reviews.map((review, index) => (
                            <div key={index} className="reviewCard">
                              <h4 className="italic">{`"${review.description}"`}</h4>
                              <p>{review.username}</p>
                              <div className="flex items-center">
                                <p>Customer rating: {review.rating}</p>{' '}
                                <MdStarRate />
                              </div>
                            </div>
                          ))
                        ) : (
                          <p className="text-xl italic text-center sm:text-start md:my-0 my-16">
                            No reviews yet..
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <RelatedProducts />
    </>
  )
}

const productLoader = async ({ params }) => {
  const res = await fetch(`https://v2.api.noroff.dev/online-shop/${params.id}`)
  const data = await res.json()
  return data
}

export { ProductPage as default, productLoader }
