import { useState, useContext, useEffect } from 'react'
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
      <div class="bg-transparent border-2 rounded-lg shadow-md  max-w-6xl mx-auto mt-32 py-8 mb-12">
        <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex flex-col md:flex-row -mx-4">
            <div class="md:flex-1 px-4">
              <div class="h-[460px] rounded-lg bg-gray-300  mb-4">
                <img
                  class="w-full h-full object-cover rounded-sm"
                  src={product.data.image.url}
                  alt="Product Image"
                />
              </div>
              <div class="flex w-full items-center justify-center mb-4">
                <div class="w-1/2 px-2">
                  <button
                    onClick={() => addToCart(product.data)}
                    class="w-full add-to-cart-btn"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
            <div class="md:flex-1 px-4">
              <h2 class="text-2xl font-semibold text-slate-800 font-poppins  mb-2">
                {product.data.title}
              </h2>
              <div className="flex gap-4 mt-3 items-center text-lg mb-2 ">
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
              <div className="flex items-center mt-4 gap-2">
                <h2 className="text-lg font-semibold">Price:</h2>
                {hasDiscount ? (
                  <>
                    <p className="font-medium text-lg text-red-500 line-through">
                      From: {product.data.price}$
                    </p>
                    <p className="font-semibold text-lg">
                      Now: {product.data.discountedPrice}$
                    </p>
                    <p className="italic p-2 bg-green-300 font-medium shadow-md rounded-md ">
                      Save {discountedPercentage}%!
                    </p>
                  </>
                ) : (
                  <p className="text-lg font-semibold">{product.data.price}$</p>
                )}
              </div>
              <div className="mt-2 font-medium font-roboto text-lg text-slate-600">
                <span>Availability:</span>
                <span class="text-slate-800 pl-2">In Stock</span>
              </div>
              <div>
                <div className="flex pt-8 mb-6 gap-12 text-lg font-medium">
                  <button onClick={handleDescription}>Description</button>
                  <button onClick={handleReviews}>Reviews</button>
                </div>
                <div>
                  <div className="w-full">
                    {showDescription ? (
                      <p className="text-xl font-roboto">
                        {product.data.description}
                      </p>
                    ) : (
                      <div className="">
                        {product.data.reviews.length > 0 ? (
                          product.data.reviews.map((review, index) => (
                            <div
                              key={index}
                              className="flex flex-col items-center justify-center text-sm mt-4 gap-2 bg-white p-2 rounded-md shadow-md"
                            >
                              <h4 className="italic">{`"${review.description}"`}</h4>
                              <p>{review.username}</p>
                              <div className="flex items-center">
                                <p>Customer rating: {review.rating}</p>{' '}
                                <MdStarRate />
                              </div>
                            </div>
                          ))
                        ) : (
                          <p>No reviews yet..</p>
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
