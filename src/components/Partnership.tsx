import { useState, useEffect } from 'react'

const Partnership = () => {
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
                rootMargin: '0px 0px -100px 0px'
            }
        )

        const section = document.getElementById('partnership-section')
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
        <section
            id="partnership-section"
            className="bg-cover bg-center bg-no-repeat flex items-center justify-center relative pt-20 pb-48"
            style={{
                backgroundImage: 'url(/gradient_background.png)'
            }}
        >

            <div className="relative z-10 text-center px-8">
                {/* Texto superior */}
                <p className={`text-white text-lg mb-12 transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`} style={{ transitionDelay: '200ms' }}>
                    Una nueva era en CRM está por comenzar
                </p>

                {/* Logos Container */}
                <div className={`flex items-center justify-center gap-8 mb-10 transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`} style={{ transitionDelay: '400ms' }}>

                    {/* Zefiron Logo */}
                    <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                        }`} style={{ transitionDelay: '600ms' }}>
                        <img
                            src="/zefiron.png"
                            alt="Zefiron"
                            className="h-16 w-auto hover:scale-105 transition-transform duration-300"
                        />
                    </div>

                    {/* Plus Symbol */}
                    <div className={`text-white text-4xl font-light transition-all duration-700 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                        }`} style={{ transitionDelay: '700ms' }}>
                        +
                    </div>

                    {/* Reveal Logo */}
                    <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                        }`} style={{ transitionDelay: '800ms' }}>
                        <img
                            src="/reveal.png"
                            alt="Reveal"
                            className="h-10 w-auto hover:scale-105 transition-transform duration-300"
                        />
                    </div>
                </div>

                {/* "Muy Pronto Disponible" Badge */}
                <div className={`inline-block transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                    }`} style={{ transitionDelay: '1000ms' }}>
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