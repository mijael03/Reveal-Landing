import { useFadeUp } from '../hooks/useFadeUp'

const Footer = () => {
    // ✅ Reemplazamos todo el useEffect manual con hooks optimizados
    const logoFade = useFadeUp({
        delay: 200,
        duration: 800,
        threshold: 0.1,
    })

    const socialFade = useFadeUp({
        delay: 400,
        duration: 800,
        threshold: 0.1,
    })

    const copyrightFade = useFadeUp({
        delay: 600,
        duration: 800,
        threshold: 0.1,
    })

    return (
        <footer
            id="footer-section"
            className="bg-black/70 py-16 px-8"
        >
            <div className="max-w-6xl mx-auto">
                {/* Main Footer Content - Centrado */}
                <div className="flex flex-col items-center gap-8 mb-8">

                    {/* Logo */}
                    <div
                        ref={logoFade.elementRef as React.RefObject<HTMLDivElement>}
                        className={logoFade.animationClasses}
                        style={logoFade.style}
                    >
                        <img
                            src="/reveal_yellow.png"
                            alt="Reveal"
                            className="h-12 w-auto"
                        />
                    </div>

                    {/* Social Media Icons */}
                    <div
                        ref={socialFade.elementRef as React.RefObject<HTMLDivElement>}
                        className={`flex items-center gap-6 ${socialFade.animationClasses}`}
                        style={socialFade.style}
                    >

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
                </div>

                {/* Copyright */}
                <div
                    ref={copyrightFade.elementRef as React.RefObject<HTMLDivElement>}
                    className={`text-center ${copyrightFade.animationClasses}`}
                    style={copyrightFade.style}
                >
                    <p className="text-white/70 text-sm">
                        Copyright© 2024 - Todos los derechos reservados
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer