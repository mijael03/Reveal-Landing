import { useFadeUp } from '../hooks/useFadeUp'

const Partnership = () => {
    // ✅ Reemplazamos todo el useEffect manual con hooks optimizados
    const textFade = useFadeUp({
        delay: 200,
        duration: 800,
        threshold: 0.1,

    })

    const logosContainerFade = useFadeUp({
        delay: 400,
        duration: 800,
        threshold: 0.1,

    })

    const zefironFade = useFadeUp({
        delay: 600,
        duration: 700,
        threshold: 0.1,

    })

    const plusFade = useFadeUp({
        delay: 700,
        duration: 700,
        threshold: 0.1,

    })

    const revealFade = useFadeUp({
        delay: 800,
        duration: 700,
        threshold: 0.1,
    })

    const badgeFade = useFadeUp({
        delay: 1000,
        duration: 800,
        threshold: 0.1,
    })

    return (
        <section
            id="partnership-section"
            className="bg-cover bg-center bg-no-repeat flex items-center justify-center relative pt-15 lg:pt-20 pb-15 lg:pb-48"
            style={{
                backgroundImage: 'url(/gradient_background.png)'
            }}
        >

            <div className="relative z-10 text-center px-8">
                {/* Texto superior */}
                <p
                    ref={textFade.elementRef as React.RefObject<HTMLParagraphElement>}
                    className={`text-white text-lg mb-12 ${textFade.animationClasses}`}
                    style={textFade.style}
                >
                    Una nueva era en CRM está por comenzar
                </p>

                {/* Logos Container */}
                <div
                    ref={logosContainerFade.elementRef as React.RefObject<HTMLDivElement>}
                    className={`flex items-center justify-center lg:gap-8 gap-4 mb-10 ${logosContainerFade.animationClasses}`}
                    style={logosContainerFade.style}
                >
                    {/* Zefiron Logo */}
                    <div
                        ref={zefironFade.elementRef as React.RefObject<HTMLDivElement>}
                        className={`${zefironFade.animationClasses}`}
                        style={{
                            ...zefironFade.style,
                            // Combinamos fade-up con scale para el efecto original
                            transform: zefironFade.isAnimated
                                ? 'translateY(0) scale(1)'
                                : 'translateY(8px) scale(0.9)'
                        }}
                    >
                        <img
                            src="/zefiron.png"
                            alt="Zefiron"
                            className="h-10 lg:h-16 w-auto hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    {/* Plus Symbol */}
                    <div
                        ref={plusFade.elementRef as React.RefObject<HTMLDivElement>}
                        className={`text-white text-2xl lg:text-4xl font-light ${plusFade.animationClasses}`}
                        style={{
                            ...plusFade.style,
                            // Combinamos fade-up con scale para el efecto original
                            transform: plusFade.isAnimated
                                ? 'translateY(0) scale(1)'
                                : 'translateY(8px) scale(0.9)'
                        }}
                    >
                        +
                    </div>

                    {/* Reveal Logo */}
                    <div
                        ref={revealFade.elementRef as React.RefObject<HTMLDivElement>}
                        className={`${revealFade.animationClasses}`}
                        style={{
                            ...revealFade.style,
                            // Combinamos fade-up con scale para el efecto original
                            transform: revealFade.isAnimated
                                ? 'translateY(0) scale(1)'
                                : 'translateY(8px) scale(0.9)'
                        }}
                    >
                        <img
                            src="/reveal.png"
                            alt="Reveal"
                            className="h-6 lg:h-10 w-auto hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>

                {/* "Muy Pronto Disponible" Badge */}
                <div
                    ref={badgeFade.elementRef as React.RefObject<HTMLDivElement>}
                    className={`inline-block ${badgeFade.animationClasses}`}
                    style={badgeFade.style}
                >
                    <div className="px-8 py-3 transition-all duration-300">
                        <span
                            className="text-white font-medium tracking-wider text-lg backdrop-blur-sm"
                            style={{
                                textShadow: '0px 1px 5px #FBE04980'
                            }}
                        >
                            MUY PRONTO DISPONIBLE
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Partnership