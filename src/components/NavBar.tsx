import logo from '../assets/logo.png'

const NavBar = () => {
  return (
    <nav className="bg-primary-navbar text-text-primary py-4 px-8">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Reveal Logo" className="h-8 w-auto" />
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-16">
          <a href="#" className="text-text-primary font-bold">
            ¿Por qué elegirnos?
          </a>
          <a href="#" className="text-text-primary font-bold">
            ¿Cómo lo hacemos?
          </a>
          <a href="#" className="text-text-primary font-bold">
            Productos
          </a>
          <a href="#" className="text-text-primary border border-text-primary px-10 py-2 rounded-lg">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  )
}

export default NavBar