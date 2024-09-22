import { TiHome } from 'react-icons/ti'
import { IoIosContacts } from 'react-icons/io'
import { TbShoppingCartHeart } from 'react-icons/tb'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive ? 'nav-link active-link' : 'nav-link'
  return (
    <nav className="bg-transparent">
      <div className="w-full h-10 flex justify-end gap-8 space-x-6 pr-12 pt-12 ">
        <NavLink to="/" className={linkClass}>
          <TiHome className="text-2xl" /> <span>Home</span>
        </NavLink>
        <NavLink to="/Contact" className={linkClass}>
          <IoIosContacts className="text-2xl" /> <span>Contact Us</span>
        </NavLink>
        <NavLink to="/cart" className={linkClass}>
          <TbShoppingCartHeart className="text-2xl" /> <span>Cart</span>
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
