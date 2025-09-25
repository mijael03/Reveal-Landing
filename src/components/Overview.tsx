import { useState, useEffect } from 'react'

const Overview = () => {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY
            const triggerPoint = window.innerHeight * 0.5
            
            if (scrollY > triggerPoint) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const features = [
        {
            icon: "🎯",
            title: "Experiencia inmersiva",
            description: "Recorridos 360° y zoom interactivo que hacen que tu cliente se sienta dentro del proyecto."
        },
        {
            icon: "👍",
            title: "Decisiones rápidas",
            description: "Visualiza lotes y departamentos sin visitas físicas y agiliza la compra."
        },
        {
            icon: "💰",
            title: "Ventas modernas",
            description: "Dale a tu equipo la herramienta digital que diferencia tu proyecto de la competencia."
        }
    ]

    return (
        <section className="min-h-[200vh] relative">
            {/* Contenido de texto inicial - se desvanece con scroll */}
            <div className={`flex flex-col items-center text-center max-w-4xl mx-auto px-8 py-12 transition-all duration-1000 ${
                isScrolled ? 'opacity-0 -translate-y-20' : 'opacity-100 translate-y-0'
            }`}>
                <h1 className="text-3xl md:text-5xl font-bold text-text-primary mb-4 leading-tight">
                    Presenta tus proyectos como nunca antes
                </h1>

                <p className="text-lg md:text-xl text-text-secondary mb-8">
                    Conoce REVEAL, el visor inmersivo que transforma la forma de vender.
                </p>

                <button className="bg-gradient-green-yellow text-black font-semibold px-8 py-3 rounded-lg text-base hover:opacity-90 transition-opacity shadow-lg mb-8">
                    Agenda una demo
                </button>
            </div>

            {/* Video - transición de ancho completo a mitad derecha */}
            <div className={`transition-all duration-1000 ease-in-out ${
                isScrolled 
                    ? 'fixed top-0 right-0 w-1/2 h-screen z-10' 
                    : 'w-full h-screen'
            }`}>
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

            {/* Features - aparecen desde la izquierda cuando se hace scroll */}
            <div className={`fixed top-0 left-0 w-1/2 h-screen bg-primary-bg flex flex-col justify-center px-12 z-20 transition-all duration-1000 ease-in-out ${
                isScrolled ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}>
                <div className="text-text-secondary text-sm mb-2 tracking-wider">
                    ¿POR QUÉ ELEGIRNOS?
                </div>
                
                <h2 className="text-4xl font-bold text-text-primary mb-12">
                    Más allá de lo tradicional
                </h2>

                <div className="space-y-8">
                    {features.map((feature, index) => (
                        <div 
                            key={index}
                            className={`border border-gray-700 rounded-lg p-6 bg-gray-800/30 backdrop-blur-sm transition-all duration-700 ${
                                isScrolled ? `delay-${(index + 1) * 200} translate-y-0 opacity-100` : 'translate-y-8 opacity-0'
                            }`}
                        >
                            <div className="text-2xl mb-3">{feature.icon}</div>
                            <h3 className="text-xl font-semibold text-text-primary mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-text-secondary leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Overview