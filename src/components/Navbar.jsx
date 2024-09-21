import { TiHome } from 'react-icons/ti'
import { IoIosContacts } from 'react-icons/io'
import { TbShoppingCartHeart } from 'react-icons/tb'

const Navbar = () => {
  return (
    <nav className="bg-transparent">
      <div className="w-full h-10 flex justify-end gap-8 space-x-6 pr-12 pt-12 ">
        <a href="" className="nav-link">
          <TiHome className="text-2xl" /> <span>Home</span>
        </a>
        <a href="" className="nav-link">
          <IoIosContacts className="text-2xl" /> <span>Contact Us</span>
        </a>
        <a href="" className="nav-link">
          <TbShoppingCartHeart className="text-2xl" /> <span>Cart</span>
        </a>
      </div>
    </nav>
  )
}

export default Navbar
