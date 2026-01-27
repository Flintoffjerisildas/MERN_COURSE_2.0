import { Link } from 'react-router-dom'

const NavbarLanding = () => {
  return (
    <div className='flex flex-row justify-between items-center p-6'>
        <div className="">BRAND</div>
        <div className="flex flex-row gap-8">
            <Link to="/about">About</Link>
            <Link to="/register">Login</Link>
        </div>
    </div>
  )
}

export default NavbarLanding