import { useState, useEffect } from 'react'
import Button from './Button'
import { useModal } from '../contexts/ModalContext'

const Overview = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isInitialLoaded, setIsInitialLoaded] = useState(false)
    const [isMobileScrolled, setIsMobileScrolled] = useState(false)
    const { openDemoModal } = useModal()

    useEffect(() => {
        // Animación inicial al cargar
        const timer = setTimeout(() => {
            setIsInitialLoaded(true)
        }, 800) // Delay para que aparezca después del NavBar

        return () => clearTimeout(timer)
    }, [])

    useEffect(() => {
        let lastScrollY = 0

        const handleScroll = () => {
            const scrollY = window.scrollY
            const navbarHeight = 72 // Altura aproximada del navbar sticky (py-5 + h-8 + padding)
            const triggerPoint = window.innerHeight * 0.5
            const isScrollingDown = scrollY > lastScrollY

            // Para desktop
            if (window.innerWidth >= 768) {
                if (scrollY > triggerPoint) {
                    setIsScrolled(true)
                } else {
                    setIsScrolled(false)
                }
            } else {
                // Para móvil - con histéresis para evitar oscilación
                const mobileVideoHeight = window.innerHeight - navbarHeight

                // Diferentes puntos de activación según la dirección del scroll
                const contractTriggerPoint = mobileVideoHeight * 0.5// Para contraer (scroll down)
                const expandTriggerPoint = mobileVideoHeight * 0.3 // Para expandir (scroll up)

                if (isScrollingDown && scrollY > contractTriggerPoint) {
                    setIsMobileScrolled(true)
                } else if (!isScrollingDown && scrollY < expandTriggerPoint) {
                    setIsMobileScrolled(false)
                }
                // Si está entre los dos puntos, mantiene el estado actual
            }

            lastScrollY = scrollY
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const features = [
        {
            icon: "experience_icon.svg",
            title: "Experiencia inmersiva",
            description: "Recorridos 360° y zoom interactivo que hacen que tu cliente se sienta dentro del proyecto."
        },
        {
            icon: "decision_icon.svg",
            title: "Decisiones rápidas",
            description: "Visualiza lotes y departamentos sin visitas físicas y agiliza la compra."
        },
        {
            icon: "ventas_icon.svg",
            title: "Ventas modernas",
            description: "Dale a tu equipo la herramienta digital que diferencia tu proyecto de la competencia."
        }
    ]

    return (
        <section className="relative md:min-h-[200vh]">
            {/* Contenido de texto inicial - con animación fade-up mejorada */}
            <div className={`flex flex-col items-center text-center mx-auto px-8 py-12 transition-all duration-1000 ${isScrolled
                ? 'opacity-0 -translate-y-20'
                : isInitialLoaded
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}>
                <h1 className={`text-3xl md:text-5xl font-bold text-white translate-y-8'
                }`} style={{ transitionDelay: '200ms' }}>
                    Presenta tus proyectos como nunca antes
                </h1>

                <p className={`text-lg md:text-xl text-text-secondary  mt-8 mb-8 transition-all duration-800 ease-out ${isInitialLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`} style={{ transitionDelay: '400ms' }}>
                    Conoce REVEAL, el visor inmersivo que transforma la forma de vender.
                </p>

                <div className={`transition-all duration-800 ease-out ${isInitialLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`} style={{ transitionDelay: '600ms' }}>
                    <Button className="mb-8" onClick={openDemoModal}>
                        Solicita una demo
                    </Button>
                </div>
            </div>

            {/* Layout Desktop - con animaciones de scroll */}
            <div id="overview-section" className="hidden md:block sticky top-0 w-full h-screen">
                <div className="flex w-full h-full">
                    <div
                        className={`transition-all duration-1000 ease-in-out bg-primary-bg flex flex-col justify-center items-center ${isScrolled ? 'opacity-100 scale-100 w-1/2' : 'opacity-0 scale-95 w-0'
                            }`}>
                        <div className="w-full flex flex-col items-center">
                            <div className={`text-text-secondary text-xl font-bold mb-2 tracking-wider transition-all duration-700 delay-300 ${isScrolled ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                }`}>
                                ¿POR QUÉ ELEGIRNOS?
                            </div>

                            <h2 className={`text-4xl font-bold text-text-primary mb-12 transition-all duration-700 ${isScrolled ? 'delay-500 translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                                }`}>
                                Más allá de lo tradicional
                            </h2>

                            <div className="space-y-8">
                                {features.map((feature, index) => (
                                    <div
                                        key={index}
                                        className={`w-[375px] h-[220px] rounded-lg p-[1px] transition-all duration-700 ease-out ${isScrolled
                                            ? `delay-${700 + (index * 200)} translate-y-0 opacity-100`
                                            : 'translate-y-12 opacity-0'
                                            }`}
                                        style={{
                                            background: 'linear-gradient(2.53deg, rgba(255, 255, 255, 0.08) -3.17%, rgba(255, 255, 255, 0.8) 52.21%, rgba(255, 255, 255, 0.08) 119.97%)'
                                        }}
                                    >
                                        <div className="w-full h-full rounded-lg bg-primary-bg p-6 flex flex-col justify-center">
                                            <div className="w-8 h-8 mb-3">
                                                <img
                                                    src={`/${feature.icon}`}
                                                    alt={feature.title}
                                                    className="w-full h-full object-contain"
                                                />
                                            </div>
                                            <h3 className="text-xl font-semibold text-text-primary mb-2">
                                                {feature.title}
                                            </h3>
                                            <p className="text-text-secondary leading-relaxed">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    {/* Video - transición de ancho completo a mitad derecha */}
                    <div className={`transition-all duration-1000 ease-in-out ${isScrolled
                        ? 'w-1/2'
                        : 'w-full'
                        } h-full`}>
                        <video
                            className="w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src="/overview_video.mp4" type="video/mp4" />
                            Tu navegador no soporta el elemento de video.
                        </video>
                    </div>
                </div>
            </div>

            {/* Layout Mobile - con video que se hace más pequeño en scroll */}
            <div className="block md:hidden">
                {/* Video en móvil - transición de pantalla completa a más pequeño */}
                <div className={`w-full transition-all duration-1000 ease-in-out ${isMobileScrolled ? 'h-[25vh]' : 'h-screen'
                    }`}>
                    <video
                        className="w-full h-full object-cover transition-all duration-1000 ease-in-out"
                        autoPlay
                        loop
                        muted
                        playsInline
                    >
                        <source src="/overview_video.mp4" type="video/mp4" />
                        Tu navegador no soporta el elemento de video.
                    </video>
                </div>

                {/* Contenido "¿Por qué elegirnos?" en móvil */}
                <div className={`bg-primary-bg px-8 py-12 transition-all duration-[1200ms] ease-out ${isMobileScrolled ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`}>
                    <div className="text-center mb-8">
                        <div className="text-text-secondary text-lg font-bold mb-2 tracking-wider">
                            ¿POR QUÉ ELEGIRNOS?
                        </div>
                        <h2 className="text-3xl font-bold text-text-primary">
                            Más allá de lo tradicional
                        </h2>
                    </div>

                    <div className="space-y-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className={`rounded-lg p-[1px] transition-all duration-[800ms] ease-out ${isMobileScrolled
                                    ? `delay-${300 + (index * 150)} translate-y-0 opacity-100`
                                    : 'translate-y-8 opacity-0'
                                    }`}
                                style={{
                                    background: 'linear-gradient(2.53deg, rgba(255, 255, 255, 0.08) -3.17%, rgba(255, 255, 255, 0.8) 52.21%, rgba(255, 255, 255, 0.08) 119.97%)'
                                }}
                            >
                                <div className="w-full rounded-lg bg-primary-bg p-6">
                                    <div className="w-8 h-8 mb-3">
                                        <img
                                            src={`/${feature.icon}`}
                                            alt={feature.title}
                                            className="w-full h-full object-contain"
                                        />
                                    </div>
                                    <h3 className="text-xl font-semibold text-text-primary mb-2">
                                        {feature.title}
                                    </h3>
                                    <p className="text-text-secondary leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Overview