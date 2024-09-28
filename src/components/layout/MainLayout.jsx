import { Outlet } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from '../Header'
import Footer from '../Footer'

const MainLayout = () => {
  return (
    <>
      <main>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <Header />
        <Outlet />
        <ToastContainer />
        <Footer />
      </main>
    </>
  )
}

export default MainLayout
