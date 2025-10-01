// Importaciones
import { useState } from 'react'
import { useFadeUp } from '../hooks/useFadeUp'

const ProductShowcase = () => {
    const [activeSlide, setActiveSlide] = useState(0)
    const [isAnimating, setIsAnimating] = useState(false)

    // Fade-up por scroll
    const videoFade = useFadeUp({ duration: 800, threshold: 0.2 })
    const lotesFade = useFadeUp({ delay: 150, duration: 600, threshold: 0.2 })
    const deptosFade = useFadeUp({ delay: 150, duration: 600, threshold: 0.2 })
    const indicatorsFade = useFadeUp({ delay: 250, duration: 600, threshold: 0.2 })

    const [contentVisible, setContentVisible] = useState(true)

    const slides = [
        {
            title: "Visor de lotes",
            description: "Explora a detalle la distribución de lotes, su disponibilidad y características clave para una decisión rápida y segura.",
            video: "/overview_video.mp4",
            features: [
                "Recorre el terreno en un entorno y fácil de entender.",
                "Consulta disponibilidad, medidas y características al instante.",
                "Visualiza cambios en ventas y reservas en tiempo real.",
                "Obtén tu financiamiento al instante con nuestra calculadora de pagos y encuentra el plan ideal para ti."
            ]
        },
        {
            title: "Visor de departamentos",
            description: "Navega por cada unidad habitacional con detalle completo de espacios, acabados y características únicas.",
            video: "/departamentos_video.mp4",
            features: [
                "Recorrido virtual completo por cada departamento.",
                "Visualiza acabados, materiales y distribución de espacios.",
                "Compara diferentes unidades y niveles disponibles.",
                "Accede a planos detallados y especificaciones técnicas."
            ]
        }
    ]

    const handleSlideChange = (newSlide: number) => {
        if (newSlide === activeSlide || isAnimating) return

        setIsAnimating(true)
        setContentVisible(false) // Ocultar contenido primero

        // Cambiar el slide después de que el contenido se oculte
        setTimeout(() => {
            setActiveSlide(newSlide)
        }, 200)

        // Mostrar el nuevo contenido con fade up
        setTimeout(() => {
            setContentVisible(true)
            setIsAnimating(false)
        }, 400)
    }

    // Efecto inicial para mostrar el primer slide
    // useEffect(() => {
    //     setContentVisible(true)
    // }, [])

    return (
        <section className="min-h-[80vh] bg-primary-bg pt-10 px-8 flex items-center relative overflow-hidden">
            <div className="w-full max-w-[1400px] mx-auto">
                <div className="relative h-[700px] flex items-start justify-center">

                    {/* Video con fade-up por scroll + animación de desplazamiento */}
                    <div
                        ref={videoFade.elementRef as React.RefObject<HTMLDivElement>}
                        className={`absolute w-[800px] h-[500px] rounded-[20px] border border-gray-400 overflow-hidden shadow-2xl transition-all ease-in-out z-10 ${videoFade.animationClasses} ${activeSlide === 0 ? 'left-8 transform translate-x-0' : 'left-8 transform translate-x-[600px]'}`}
                        style={videoFade.style}
                    >
                        <video
                            key={activeSlide}
                            className="w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src={slides[activeSlide].video} type="video/mp4" />
                            Tu navegador no soporta el elemento de video.
                        </video>
                    </div>

                    {/* Contenido: Visor de lotes */}
                    <div
                        ref={lotesFade.elementRef as React.RefObject<HTMLDivElement>}
                        className={`absolute w-[550px] px-10 right-8 z-20 ${activeSlide === 0 ? 'flex' : 'hidden'} ${lotesFade.animationClasses}`}
                        style={lotesFade.style}
                    >
                        <div className="space-y-8">
                            <div>
                                <p className={`text-white text-xl font-bold mb-4 tracking-[0.15em] uppercase transition-all duration-600 ease-out ${contentVisible && activeSlide === 0
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-4'
                                    }`} style={{ transitionDelay: '100ms' }}>
                                    PRODUCTOS
                                </p>
                                <h2 className={`text-5xl md:text-6xl font-bold text-text-primary mb-8 leading-tight transition-all duration-600 ease-out ${contentVisible && activeSlide === 0
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-4'
                                    }`} style={{ transitionDelay: '200ms' }}>
                                    {slides[0].title}
                                </h2>
                                <p className={`text-white text-lg leading-relaxed mb-10 transition-all duration-600 ease-out ${contentVisible && activeSlide === 0
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-4'
                                    }`} style={{ transitionDelay: '300ms' }}>
                                    {slides[0].description}
                                </p>
                            </div>

                            <div className={`gradient-divider my-10 transition-all duration-600 ease-out ${contentVisible && activeSlide === 0
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-4'
                                }`} style={{ transitionDelay: '400ms' }}></div>

                            <div className="space-y-6">
                                {slides[0].features.map((feature, index) => (
                                    <div key={index} className={`flex items-start gap-4 transition-all duration-600 ease-out ${contentVisible && activeSlide === 0
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-4'
                                        }`} style={{ transitionDelay: `${500 + (index * 100)}ms` }}>
                                        <div className="w-3 h-3 rounded-full bg-white mt-2 flex-shrink-0"></div>
                                        <p className="text-white text-lg leading-relaxed">
                                            {feature}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Contenido: Visor de departamentos */}
                    <div
                        ref={deptosFade.elementRef as React.RefObject<HTMLDivElement>}
                        className={`absolute w-[550px] px-10 left-8 z-20 ${activeSlide === 1 ? 'flex' : 'hidden'} ${deptosFade.animationClasses}`}
                        style={deptosFade.style}
                    >
                        <div className="space-y-8">
                            <div>
                                <p className={`text-white text-xl font-bold mb-4 tracking-[0.15em] uppercase transition-all duration-600 ease-out ${contentVisible && activeSlide === 1
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-4'
                                    }`} style={{ transitionDelay: '100ms' }}>
                                    PRODUCTOS
                                </p>
                                <h2 className={`text-5xl md:text-6xl font-bold text-text-primary mb-8 leading-tight transition-all duration-600 ease-out ${contentVisible && activeSlide === 1
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-4'
                                    }`} style={{ transitionDelay: '200ms' }}>
                                    {slides[1].title}
                                </h2>
                                <p className={`text-white text-lg leading-relaxed mb-10 transition-all duration-600 ease-out ${contentVisible && activeSlide === 1
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-4'
                                    }`} style={{ transitionDelay: '300ms' }}>
                                    {slides[1].description}
                                </p>
                            </div>

                            <div className={`gradient-divider my-10 transition-all duration-600 ease-out ${contentVisible && activeSlide === 1
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-4'
                                }`} style={{ transitionDelay: '400ms' }}></div>

                            <div className="space-y-6">
                                {slides[1].features.map((feature, index) => (
                                    <div key={index} className={`flex items-start gap-4 transition-all duration-600 ease-out ${contentVisible && activeSlide === 1
                                        ? 'opacity-100 translate-y-0'
                                        : 'opacity-0 translate-y-4'
                                        }`} style={{ transitionDelay: `${500 + (index * 100)}ms` }}>
                                        <div className="w-3 h-3 rounded-full bg-white mt-2 flex-shrink-0"></div>
                                        <p className="text-white text-lg leading-relaxed">
                                            {feature}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Indicadores del slider con fade-up por scroll */}
            <div
                ref={indicatorsFade.elementRef as React.RefObject<HTMLDivElement>}
                className={`absolute bottom-30 left-1/2 transform -translate-x-1/2 flex gap-6 z-30 ${indicatorsFade.animationClasses}`}
                style={indicatorsFade.style}
            >
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleSlideChange(index)}
                        disabled={isAnimating}
                        className="w-16 h-16 transition-all duration-300 hover:scale-110 disabled:cursor-not-allowed"
                    >
                        <img
                            src={activeSlide === index ? "/slider_active.svg" : "/slider_inactive.svg"}
                            alt={`Slide ${index + 1}`}
                            className="w-full h-full"
                        />
                    </button>
                ))}
            </div>
        </section>
    )
}

export default ProductShowcase