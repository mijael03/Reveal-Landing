import { useState, useEffect } from 'react'
import Button from './Button'

const Footer = () => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            }
        )

        const section = document.getElementById('footer-section')
        if (section) {
            observer.observe(section)
        }

        return () => {
            if (section) {
                observer.unobserve(section)
            }
        }
    }, [])

    return (
        <footer
            id="footer-section"
            className="bg-black/70 py-16 px-8"
        >
            <div className="max-w-6xl mx-auto">
                {/* Main Footer Content */}
                <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-8">

                    {/* Logo */}
                    <div className={`transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`} style={{ transitionDelay: '200ms' }}>
                        <img
                            src="/reveal_yellow.png"
                            alt="Reveal"
                            className="h-12 w-auto"
                        />
                    </div>

                    {/* Social Media Icons */}
                    <div className={`flex items-center gap-6 transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`} style={{ transitionDelay: '400ms' }}>

                        <a
                            href="#"
                            className="hover:scale-110 transition-transform duration-300"
                            aria-label="Facebook"
                        >
                            <img
                                src="/facebook.png"
                                alt="Facebook"
                                className="w-8 h-8"
                            />
                        </a>

                        <a
                            href="#"
                            className="hover:scale-110 transition-transform duration-300"
                            aria-label="Instagram"
                        >
                            <img
                                src="/instagram.png"
                                alt="Instagram"
                                className="w-8 h-8"
                            />
                        </a>

                        <a
                            href="#"
                            className="hover:scale-110 transition-transform duration-300"
                            aria-label="LinkedIn"
                        >
                            <img
                                src="/linkedin.png"
                                alt="LinkedIn"
                                className="w-8 h-8"
                            />
                        </a>
                    </div>

                    {/* CTA Button */}
                    <div className={`hidden lg:block transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`} style={{ transitionDelay: '600ms' }}>
                        <Button>
                            Empieza ahora
                        </Button>
                    </div>
                </div>

                {/* Copyright */}
                <div className={`text-center transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`} style={{ transitionDelay: '1000ms' }}>
                    <p className="text-white/70 text-sm">
                        Copyright© 2024 - Todos los derechos reservados
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer