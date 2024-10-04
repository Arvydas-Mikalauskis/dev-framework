import { RiVisaFill } from 'react-icons/ri'
import { FaCcPaypal, FaCcMastercard } from 'react-icons/fa'
import { SiKlarna } from 'react-icons/si'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-slate-500 to-slate-900 border-t-2 border-zinc-100 shadow-sm">
      <div className="container w-full py-10 mx-auto ">
        <div className="flex flex-col justify-center items-center">
          <div className="text-zinc-50 text-2xl italic font-poppins mb-2">
            Snap<span className="text-red-400">Buy</span>
          </div>
          <div className="flex gap-6 mb-2">
            <RiVisaFill className="text-3xl text-white" />
            <FaCcPaypal className="text-3xl text-white" />
            <FaCcMastercard className="text-3xl text-white" />
            <SiKlarna className="text-3xl text-white" />
          </div>
          <div className="mt-2 pt-6 text-zinc-100 text-sm opacity-80">
            &copy; 2024 All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
