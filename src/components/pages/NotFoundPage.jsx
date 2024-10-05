import { Link } from 'react-router-dom'
import { FaExclamationTriangle } from 'react-icons/fa'

const NotFoundPage = () => {
  return (
    <section className="flex flex-col justify-center items-center text-center mt-16 h-96">
      <FaExclamationTriangle className="text-6xl text-red-500 mb-4" />
      <h1 className="text-4xl font-poppins font-bold mb-4">
        404 Page Not Found
      </h1>
      <p className="text-2xl mb-5 font-roboto">This page does not exist</p>
      <Link
        to="/"
        className="text-white uppercase bg-slate-500 hover:bg-slate-400 rounded-md px-3 py-2 mt-4"
      >
        Back to the homepage
      </Link>
    </section>
  )
}

export default NotFoundPage
