import MainLayout from '../layout/MainLayout'
import Hero from '../Hero'
import SearchBar from '../SearchBar'
import ProductsListings from '../ProductsListings'

const Homepage = () => {
  return (
    <>
      <MainLayout />
      <Hero />
      <SearchBar />
      <ProductsListings />
    </>
  )
}

export default Homepage
