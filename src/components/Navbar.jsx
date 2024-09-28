import { TiHome } from 'react-icons/ti'
import { IoIosContacts } from 'react-icons/io'
import CartIcon from './CartIcon'
import { NavLink } from 'react-router-dom'
import Icon from '../assets/icon.svg'

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive ? 'nav-link active-link' : 'nav-link'
  return (
    <nav className="bg-transparent">
      <div className="w-full h-10 flex justify-end gap-8 space-x-6 pr-12 pt-12 ">
        <div className="flex text-black absolute top-10 left-10 text-2xl italic font-poppins mb-2">
          <img src={Icon} alt="Website icon" className="pr-2" />
          Snap<span className="text-red-400">Buy</span>
        </div>
        <NavLink to="/" className={linkClass}>
          <TiHome className="text-2xl" /> <span>Home</span>
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          <IoIosContacts className="text-2xl" /> <span>Contact Us</span>
        </NavLink>
        <NavLink to="/cart" className={linkClass}>
          <CartIcon /> <span>Cart</span>
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
