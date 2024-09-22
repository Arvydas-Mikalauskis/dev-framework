import { useState } from 'react'
import { useParams, useLoaderData } from 'react-router-dom'

import { MdStarRate } from 'react-icons/md'

const ProductPage = () => {
  const { id } = useParams()
  const product = useLoaderData()

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

  return (
    <>
      <section className="mt-24 pt-16 pl-16">
        <div className="flex w-full">
          <div className="pl-24">
            <img
              className="rounded-md border border-gray-400 shadow-md"
              src={product.data.image.url}
              alt="image of the product"
              width={380}
            />
          </div>
          <div className="flex w-full flex-col items-center gap-2">
            <h1 className="text-3xl font-semibold">{product.data.title}</h1>
            <div className="flex gap-4 mt-6 items-center text-lg ">
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
            <div className="flex pt-8 mb-6 gap-12 text-lg">
              <button onClick={handleDescription}>Description</button>
              <button onClick={handleReviews}>Reviews</button>
            </div>
            <div>
              <div className="w-full">
                {showDescription ? (
                  <p>{product.data.description}</p>
                ) : (
                  <div className="max-w-5xl">
                    {product.data.reviews.length > 0 ? (
                      product.data.reviews.map((review, index) => (
                        <div
                          key={index}
                          className="flex items-center justify-center mt-4 gap-2 bg-white p-4 rounded-md shadow-md"
                        >
                          <h4 className="text-xl italic">{`"${review.description}"`}</h4>
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
        <div></div>
      </section>
    </>
  )
}

const productLoader = async ({ params }) => {
  const res = await fetch(`https://v2.api.noroff.dev/online-shop/${params.id}`)
  const data = await res.json()
  return data
}

export { ProductPage as default, productLoader }
