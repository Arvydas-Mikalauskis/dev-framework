import { useState, useEffect } from 'react'
import Product from './Product'
import { Link } from 'react-router-dom'
import Spinner from './Spinner'

const ProductsListings = () => {
  const [products, setProducts] = useState([])
  const [visibleCount, setVisibleCount] = useState(8)
  const [loading, setLoading] = useState(true)

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
        setLoading(false)
        console.log('Done fetching products')
        console.log(products)
      }
    }

    fetchProducts()
  }, [])

  const handleViewMore = () => {
    setVisibleCount((prev) => prev + 4)
  }

  return (
    <section className="px-4 py-20 z-0">
      <div className="container-xl lg:container m-auto">
        <h2
          id="featured-products"
          className="text-xl font-medium uppercase  mb-6 pl-12  text-slate-600"
        >
          Featured Products
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-4 gap-6">
            {visibleProducts.map((product) => (
              <Product key={product.id} productListing={product} />
            ))}
          </div>
        )}
      </div>
      <div className="w-full text-center my-16">
        {visibleCount < products.length ? (
          <button onClick={handleViewMore} className="view-moreProducts-btn">
            View More
          </button>
        ) : (
          <a href="#featured-products" className="view-moreProducts-btn">
            No more products to display.. Back to the top
          </a>
        )}
      </div>
    </section>
  )
}

export default ProductsListings
