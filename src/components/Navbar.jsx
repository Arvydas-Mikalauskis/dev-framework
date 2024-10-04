import { TiHome } from 'react-icons/ti'
import { GrContact } from 'react-icons/gr'
import CartIcon from './CartIcon'
import { NavLink } from 'react-router-dom'
import Icon from '../assets/icon.svg'

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive ? 'nav-link active-link' : 'nav-link'
  return (
    <nav className="bg-transparent">
      <div className="w-full h-10 flex justify-end gap-4 sm:gap-3 space-x-6 pr-4 sm:pr-8 md:pr-10 pt-12 ">
        <div className="flex text-black absolute top-10 left-10 text-xl sm:text-2xl italic font-poppins mb-2">
          <img src={Icon} alt="Website icon" className="hidden md:block pr-2" />
          Snap<span className="text-red-400">Buy</span>
        </div>
        <NavLink to="/" className={linkClass}>
          <TiHome className="navIcons" />{' '}
          <span className="hidden md:block">Home</span>
        </NavLink>
        <NavLink to="/contact" className={linkClass}>
          <GrContact className="navIcons" />{' '}
          <span className="hidden md:block">Contact</span>
        </NavLink>
        <NavLink to="/cart" className={linkClass}>
          <CartIcon /> <span className="hidden md:block">Cart</span>
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar
