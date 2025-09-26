import { useState, useEffect } from 'react'
import Button from './Button'

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
        <section className="relative min-h-[200vh]">
            {/* Contenido de texto inicial - se desvanece con scroll */}
            <div className={`flex flex-col items-center text-center max-w-4xl mx-auto px-8 py-12 transition-all duration-1000 ${isScrolled ? 'opacity-0 -translate-y-20' : 'opacity-100 translate-y-0'
                }`}>
                <h1 className="text-3xl md:text-5xl font-bold text-gray-400 mb-4 leading-tight">
                    Presenta tus proyectos como nunca antes
                </h1>

                <p className="text-lg md:text-xl text-text-secondary mb-8">
                    Conoce REVEAL, el visor inmersivo que transforma la forma de vender.
                </p>

                <Button className="mb-8">
                    Agenda una demo
                </Button>
            </div>
            <div className="sticky top-0 flex w-full h-screen">


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

        </section >
    )
}

export default Overview