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

    return (
        <section id="products-section" className="min-h-screen md:min-h-[90vh] bg-primary-bg md:pt-10 px-8 flex items-center relative overflow-hidden">
            <div className="w-full max-w-[1400px] mx-auto">

                {/* Layout Desktop - Mantener el layout original */}
                <div className="hidden md:block relative h-[700px] items-start justify-center">
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
                                <p className={`text-[#AAAAAA] text-xl font-bold gap-4 mb-4 tracking-[0.15em] uppercase transition-all duration-600 ease-out ${contentVisible && activeSlide === 0
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-4'
                                    }`} style={{ transitionDelay: '100ms' }}>
                                    PRODUCTOS
                                </p>
                                <h2 className={`text-4xl md:text-5xl font-bold text-text-primary mb-8 leading-tight transition-all duration-600 ease-out ${contentVisible && activeSlide === 0
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

                            <div className="space-y-2">
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
                                <p className={`text-[#AAAAAA]  text-xl font-bold mb-4 tracking-[0.15em] uppercase transition-all duration-600 ease-out ${contentVisible && activeSlide === 1
                                    ? 'opacity-100 translate-y-0'
                                    : 'opacity-0 translate-y-4'
                                    }`} style={{ transitionDelay: '100ms' }}>
                                    PRODUCTOS
                                </p>
                                <h2 className={`text-4xl md:text-5xl font-bold text-text-primary mb-8 leading-tight transition-all duration-600 ease-out ${contentVisible && activeSlide === 1
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

                            <div className={`gradient-divider my-5 transition-all duration-600 ease-out ${contentVisible && activeSlide === 1
                                ? 'opacity-100 translate-y-0'
                                : 'opacity-0 translate-y-4'
                                }`} style={{ transitionDelay: '400ms' }}></div>

                            <div className="space-y-2">
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

                {/* Layout Mobile - Nuevo layout vertical */}
                <div className="md:hidden flex flex-col space-y-8">
                    {/* Contenido de texto arriba */}
                    <div className="text-center">
                        <p className={`text-[#AAAAAA] text-lg font-bold mb-4 tracking-[0.15em] uppercase transition-all duration-500 ease-out ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`}>
                            PRODUCTOS
                        </p>

                        <h2 className={`text-3xl font-bold text-text-primary mb-6 leading-tight transition-all duration-500 ease-out ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`} style={{ transitionDelay: '100ms' }}>
                            {slides[activeSlide].title}
                        </h2>

                        <p className={`text-white text-base leading-relaxed mb-8 transition-all duration-500 ease-out ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                            }`} style={{ transitionDelay: '200ms' }}>
                            {slides[activeSlide].description}
                        </p>

                        {/* Divider con gradiente */}
                        <div className={`gradient-divider my-8 transition-all duration-500 ease-out ${contentVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                            }`} style={{ transitionDelay: '300ms' }}></div>

                        {/* Features */}
                        <div className="space-y-4">
                            {slides[activeSlide].features.map((feature, index) => (
                                <div key={index} className={`flex items-start gap-3 text-left transition-all duration-500 ease-out ${contentVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                                    }`} style={{ transitionDelay: `${400 + (index * 100)}ms` }}>
                                    <div className="w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"></div>
                                    <p className="text-white text-sm leading-relaxed">
                                        {feature}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Video abajo */}
                    <div className="flex justify-center">
                        <div className={`w-full h-[300px] rounded-[15px] border border-gray-400 overflow-hidden shadow-2xl transition-all duration-500 ease-out ${contentVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                            }`} style={{ transitionDelay: '600ms' }}>
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
                    </div>
                    {/* Indicadores del slider para móvil */}
                    <div className="flex justify-center gap-6 mt-6">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleSlideChange(index)}
                                disabled={isAnimating}
                                className="w-12 h-12 transition-all duration-300 hover:scale-110 disabled:cursor-not-allowed"
                            >
                                <img
                                    src={activeSlide === index ? "/slider_active.svg" : "/slider_inactive.svg"}
                                    alt={`Slide ${index + 1}`}
                                    className="w-full h-full"
                                />
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Indicadores del slider */}
            <div
                ref={indicatorsFade.elementRef as React.RefObject<HTMLDivElement>}
                className={`hidden md:flex absolute bottom-0 md:bottom-20 left-1/2 transform -translate-x-1/2 gap-6 z-30 ${indicatorsFade.animationClasses}`}
                style={indicatorsFade.style}
            >
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => handleSlideChange(index)}
                        disabled={isAnimating}
                        className="w-12 h-12 md:w-16 md:h-16 transition-all duration-300 hover:scale-110 disabled:cursor-not-allowed"
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