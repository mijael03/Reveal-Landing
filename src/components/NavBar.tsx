import { useState } from 'react'
import logo from '../assets/logo.png'

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault()
    const el = document.getElementById(targetId)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    // Cerrar el menú móvil después de navegar
    setIsMenuOpen(false)
  }

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <>
      {/* NavBar - Se oculta cuando el menú móvil está abierto */}
      <nav className={`bg-primary-navbar text-text-primary py-5 px-8 relative z-50 ${isMenuOpen ? 'hidden' : 'block'}`}>
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          {/* Logo - Desktop */}
          <div className="hidden md:flex items-center">
            <img src={logo} alt="Reveal Logo" className="h-8 w-auto" />
          </div>

          {/* Logo - Mobile */}
          <div className="flex md:hidden items-center">
            <img src="/reveal.png" alt="Reveal Logo" className="h-8 w-auto" />
          </div>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-16">
            <a href="#overview-section" onClick={(e) => handleNavClick(e, 'overview-section')} className="text-text-primary font-bold text-2xl">
              ¿Por qué elegirnos?
            </a>
            <a href="#process-section" onClick={(e) => handleNavClick(e, 'process-section')} className="text-text-primary font-bold text-2xl">
              ¿Cómo lo hacemos?
            </a>
            <a href="#products-section" onClick={(e) => handleNavClick(e, 'products-section')} className="text-text-primary font-bold text-2xl">
              Productos
            </a>
            <a href="#contact-section" onClick={(e) => handleNavClick(e, 'contact-section')} className="text-text-primary border border-text-primary px-10 py-2 rounded-lg">
              Contacto
            </a>
          </div>

          {/* Hamburger Menu - Mobile */}
          <div className="flex md:hidden items-center">
            <button onClick={toggleMenu} className="p-2">
              <img src="/hamburguer_menu.svg" alt="Menu" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-[#0E0E0E]/70 backdrop-blur-md  z-50 md:hidden">
          <div className="flex flex-col h-full">
            {/* Header con botón cerrar */}
            <div className="flex justify-end p-8">
              <button onClick={toggleMenu} className="p-2">
                <img src="/close_green_icon.svg" alt="Cerrar" className="h-8 w-8" />
              </button>
            </div>

            {/* Menu Items */}
            <div className="flex flex-col items-center justify-start flex-1 px-8 pt-5 space-y-12">
              <div className="w-full text-center">
                <a
                  href="#overview-section"
                  onClick={(e) => handleNavClick(e, 'overview-section')}
                  className="text-white text-2xl font-medium block pb-4"
                >
                  ¿Por qué elegirnos?
                </a>
                {/* Divider con gradiente */}
                <div
                  className="h-[1px] w-full"
                  style={{
                    background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.06) 15.5%, rgba(255, 255, 255, 0.6) 53.74%, rgba(255, 255, 255, 0.06) 93.53%)'
                  }}
                />
              </div>

              <div className="w-full text-center">
                <a
                  href="#process-section"
                  onClick={(e) => handleNavClick(e, 'process-section')}
                  className="text-white text-2xl font-medium block pb-4"
                >
                  ¿Cómo lo hacemos?
                </a>
                {/* Divider con gradiente */}
                <div
                  className="h-[1px] w-full"
                  style={{
                    background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.06) 15.5%, rgba(255, 255, 255, 0.6) 53.74%, rgba(255, 255, 255, 0.06) 93.53%)'
                  }}
                />
              </div>

              <div className="w-full text-center">
                <a
                  href="#products-section"
                  onClick={(e) => handleNavClick(e, 'products-section')}
                  className="text-white text-2xl font-medium block pb-4"
                >
                  Productos
                </a>
                {/* Divider con gradiente */}
                <div
                  className="h-[1px] w-full"
                  style={{
                    background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.06) 15.5%, rgba(255, 255, 255, 0.6) 53.74%, rgba(255, 255, 255, 0.06) 93.53%)'
                  }}
                />
              </div>

              <div className="w-full text-center">
                <a
                  href="#contact-section"
                  onClick={(e) => handleNavClick(e, 'contact-section')}
                  className="text-white text-2xl font-medium block pb-4"
                >
                  Contacto
                </a>
                {/* Divider con gradiente */}
                <div
                  className="h-[1px] w-full"
                  style={{
                    background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.06) 15.5%, rgba(255, 255, 255, 0.6) 53.74%, rgba(255, 255, 255, 0.06) 93.53%)'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default NavBar