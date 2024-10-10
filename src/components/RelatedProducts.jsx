import { useState, useEffect } from 'react'
import Spinner from './Spinner'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'

const RelatedProducts = () => {
  const [relatedProducts, setRelatedProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  useEffect(() => {
    const fetchRelatedProducts = async () => {
      const res = await fetch('https://v2.api.noroff.dev/online-shop')
      const data = await res.json()
      const shuffled = data.data.sort(() => 0.5 - Math.random())
      setRelatedProducts(shuffled.slice(0, 4))
    }
    fetchRelatedProducts()
      .then(() => setLoading(false))
      .then(window.scrollTo(0, 0))
  }, [id])

  return (
    <div className="my-20">
      <h4 className="text-lg sm:text-xl text-slate-700 font-semibold text-center sm:pl-8">
        You might also be interested in these products:
      </h4>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div className="container sm:max-w-7xl flex flex-col sm:grid sm:grid-cols-2 md:grid-cols-4  justify-center mx-auto gap-4 mt-4">
          {relatedProducts.map((product) => (
            <div
              key={product.id}
              className="w-3/4 sm:w-full flex flex-col items-center justify-center mx-auto text-center bg-indigo-50 p-4 lg:p-8 border rounded-md shadow-lg"
            >
              <img
                className="h-52 w-52 sm:h-36 sm:w-36 object-cover rounded-lg shadow-sm border-2 border-slate-300"
                src={product.image.url}
                alt="Alternative product"
              />
              <h5 className="text-lg font-semibold my-2 font-roboto">
                {product.title}
              </h5>
              <p className="text-sm font-medium mb-2">
                Price: <span>{product.discountedPrice}$</span>
              </p>
              <Link
                to={`/product/${product.id}`}
                className="add-to-cart-btn text-sm p-2"
              >
                View Product
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default RelatedProducts
