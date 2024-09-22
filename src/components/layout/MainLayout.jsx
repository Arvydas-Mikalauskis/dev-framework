import { Outlet } from 'react-router-dom'

import Header from '../Header'

const MainLayout = () => {
  return (
    <>
      <main className="gradient"></main>
      <Header />
      <Outlet />
    </>
  )
}

export default MainLayout
