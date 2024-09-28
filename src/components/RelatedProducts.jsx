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
      console.log(data)
    }
    fetchRelatedProducts().then(() => setLoading(false))
  }, [])

  return (
    <div className="mt-20">
      <h4 className="text-xl text-slate-600">
        You might also be interested in these products:
      </h4>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div className="flex gap-4 mt-4">
          {relatedProducts.map((product) => (
            <div
              key={product.id}
              className="w-1/4 flex flex-col items-center justify-center bg-indigo-50 p-4 border rounded-md shadow-md"
            >
              <img
                className="h-36 object-cover rounded-lg shadow-sm border-2 border-slate-300"
                src={product.image.url}
                alt="Eik nx"
                width={150}
              />
              <h5 className="text-lg font-semibold my-2">{product.title}</h5>
              <p className="text-sm">{product.discountedPrice}$</p>
              <Link
                to={`/product/${product.id}`}
                className="bg-gradient-to-r from-slate-500 to-slate-900 font-roboto font-semibold shadow-md rounded-lg px-4 py-2 mb-2 text-zinc-100 transition hover:scale-110 hover:translate-y-1 hover:duration-300 ease-in "
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
