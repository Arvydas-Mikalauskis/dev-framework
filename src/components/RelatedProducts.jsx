import { useState, useEffect } from 'react'
import Spinner from './Spinner'

const RelatedProducts = () => {
  const [relatedProducts, setRelatedProducts] = useState([])
  const [loading, setLoading] = useState(true)

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
    <div className="mt-28">
      <h4>You might also be interested in these products:</h4>
      {loading ? (
        <Spinner loading={loading} />
      ) : (
        <div className="flex gap-4 mt-4">
          {relatedProducts.map((product) => (
            <div
              key={product.id}
              className="w-1/4 p-4 border rounded-md shadow-md"
            >
              <img
                className="rounded-md border border-gray-400 shadow-md"
                src={product.image.url}
                alt="Eik nx"
                width={150}
              />
              <h5 className="text-lg font-semibold mt-2">{product.title}</h5>
              <p className="text-sm">{product.price}$</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default RelatedProducts
