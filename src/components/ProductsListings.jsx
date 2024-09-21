import { useState, useEffect } from 'react'
import Product from './Product'

const ProductsListings = () => {
  const [products, setProducts] = useState([])
  const [visibleCount, setVisibleCount] = useState(6)

  const visibleProducts = products.slice(0, visibleCount)

  useEffect(() => {
    const fetchProducts = async () => {
      const apiURL = 'https://v2.api.noroff.dev/online-shop'
      try {
        const res = await fetch(apiURL)
        const data = await res.json()
        setProducts(data.data)
      } catch (error) {
        console.log('Error fetching products', error)
      } finally {
        console.log('Done fetching products')
        console.log(products)
      }
    }

    fetchProducts()
  }, [])

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 6)
  }

  return (
    <section className="px-4 py-20">
      <div className="container-xl lg:container m-auto">
        <h2
          id="products"
          className="text-2xl font-semibold text-red-400 mb-6 pl-6"
        >
          Recent Listings
        </h2>
        <div className="grid grid-cols-3 gap-6">
          {visibleProducts.map((product) => (
            <Product key={product.id} productListing={product} />
          ))}
        </div>
      </div>
      <div className="w-full text-center my-16">
        {visibleCount < products.length ? (
          <button
            onClick={handleViewMore}
            className="bg-slate-400 w-1/3 px-8 py-4 rounded-lg shadow-sm font-semibold"
          >
            View More
          </button>
        ) : (
          <a
            href="#products"
            className="bg-slate-300 w-1/3 px-8 py-4 rounded-lg shadow-sm font-semibold"
          >
            No more products to display.. Back to the top.
          </a>
        )}
      </div>
    </section>
  )
}

export default ProductsListings
