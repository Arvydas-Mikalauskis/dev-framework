import { useState, useEffect } from 'react'
import Product from './Product'
import { FaAnglesUp } from 'react-icons/fa6'
import Spinner from './Spinner'
import { lgScreens, mdScreens } from '../utils/screenSizes'

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

  useEffect(() => {
    if (lgScreens.matches) {
      setVisibleCount(8)
    } else if (mdScreens.matches) {
      setVisibleCount(6)
    } else {
      setVisibleCount(4)
    }
  }, [])

  const handleViewMore = () => {
    if (lgScreens.matches) {
      setVisibleCount((prev) => prev + 8)
    } else if (mdScreens.matches) {
      setVisibleCount((prev) => prev + 6)
    } else {
      setVisibleCount((prev) => prev + 4)
    }
  }

  const scrollTop = () => {
    window.scrollTo({ top: 200, behavior: 'smooth' })
  }

  return (
    <section className="px-4 py-20 z-0">
      <div className="container m-auto">
        <h2
          id="featured-products"
          className="text-xl font-medium uppercase  mb-6 text-center sm:text-start sm:pl-12  text-slate-600"
        >
          Featured Products
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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
          <button onClick={scrollTop} className="view-moreProducts-btn">
            No more products to display..{' '}
            <FaAnglesUp className="inline mb-1 mx-1" />
          </button>
        )}
      </div>
    </section>
  )
}

export default ProductsListings
