import { useState, useEffect } from 'react'
import Button from './Button'
import { useModal } from '../contexts/ModalContext'
import { useFadeUp } from '../hooks/useFadeUp'

const Process = () => {
    const [openStep, setOpenStep] = useState<number | null>(null)
    const { openDemoModal } = useModal()

    // Animaciones scroll reveal para desktop - Restaurar el intersection observer original
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true)
                }
            },
            { threshold: 0.2 }
        )

        const section = document.getElementById('process-section')
        if (section) {
            observer.observe(section)
        }

        return () => {
            if (section) {
                observer.unobserve(section)
            }
        }
    }, [])

    // Animaciones scroll reveal para mobile
    const mobileHeaderFade = useFadeUp({ duration: 600, threshold: 0.2 })
    const mobileStep1Fade = useFadeUp({ delay: 100, duration: 600, threshold: 0.2 })
    const mobileStep2Fade = useFadeUp({ delay: 200, duration: 600, threshold: 0.2 })
    const mobileStep3Fade = useFadeUp({ delay: 300, duration: 600, threshold: 0.2 })
    const mobileButtonFade = useFadeUp({ delay: 400, duration: 600, threshold: 0.2 })

    const toggleStep = (step: number) => {
        setOpenStep(openStep === step ? null : step)
    }

    const step1Icons = [
        { icon: "/autocad-icon.svg", name: "AutoCAD" },
        { icon: "/revit-icon.svg", name: "Revit" },
        { icon: "/sketchup_icon.svg", name: "SketchUp" }
    ]

    const features = [
        {
            title: "Vista de lotes",
            icon: "/visor_lotes.svg"
        },
        {
            title: "Vista de departamentos",
            icon: "/visor_departamentos.svg"
        }
    ]

    return (
        <section id="process-section" className="min-h-[90vh] md:min-h-screen bg-primary-bg py-20 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Header - Solo animación en mobile */}
                <div className={`text-center mb-16 lg:mb-20 transition-all duration-800 ease-out lg:${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} md:${mobileHeaderFade.animationClasses}`}
                    ref={mobileHeaderFade.elementRef as React.RefObject<HTMLDivElement>}
                    style={{
                        ...mobileHeaderFade.style,
                        ...(window.innerWidth >= 1024 ? { transitionDelay: '200ms' } : {})
                    }}
                >
                    <p className="text-[#AAAAAA] text-xl font-bold mb-4 tracking-[0.15em] uppercase">
                        PROCESO
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-8 leading-tight">
                        Cómo funciona
                    </h2>
                    <p className="text-white text-lg leading-relaxed max-w-2xl mx-auto">
                        Transformamos tus planos en experiencias inmersivas en 3 simples pasos.
                    </p>
                </div>

                {/* Desktop Layout - Restaurar animaciones originales */}
                <div className="hidden lg:block">
                    <div className="flex flex-col lg:flex-row items-start justify-center gap-20 mb-16">
                        {/* Left Steps */}
                        <div className={`flex flex-col transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                            }`} style={{ transitionDelay: '800ms' }}>
                            {/* PASO 1 */}
                            <div className="w-64 p-4 flex flex-col justify-center">
                                <div className="text-text-secondary text-xs font-bold tracking-[0.15em] mb-1">
                                    PASO 1
                                </div>
                                <h3 className="text-text-primary font-semibold text-xl mb-2">
                                    Planos y modelos
                                </h3>
                                <p className="text-text-secondary text-sm leading-tight">
                                    Utilizamos tus planos o modelos digitales (AutoCAD, Revit, renders o modelos 3D).
                                </p>
                            </div>

                            {/* Iconos de archivos */}
                            <div className="flex flex-col gap-5 ml-4">
                                {step1Icons.map((item, index) => (
                                    <div key={index} className={`flex items-center gap-5 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
                                        }`} style={{ transitionDelay: `${1000 + (index * 150)}ms` }}>
                                        <div className="w-24 h-24 bg-neutral-500 rounded-2xl flex justify-center items-center hover:scale-105 transition-transform duration-300">
                                            <img
                                                src={item.icon}
                                                alt={item.name}
                                                className="w-14 h-14"
                                            />
                                        </div>
                                        <span className="text-text-primary text-sm">{item.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Center - Reveal Logo */}
                        <div className={`flex flex-col items-center my-14 transition-all duration-800 ease-out ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                            }`} style={{ transitionDelay: '1200ms' }}>
                            {/* Contenedor con borde gradiente */}
                            <div className="rounded-lg p-[1px] mb-12 hover:scale-105 transition-transform duration-300 bg-gradient-green-yellow">
                                <div className="w-44 h-44 bg-neutral-500 rounded-lg flex items-center justify-center">
                                    <div className="flex flex-col items-center">
                                        <img
                                            src="/icon.svg"
                                            alt="Reveal Icon"
                                            className="w-9 h-9 mb-2"
                                        />
                                        <img
                                            src="/logotipo.svg"
                                            alt="Reveal Logo"
                                            className="h-8"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-64 h-32 p-4 flex flex-col justify-center">
                                <div className="text-text-secondary text-xs tracking-[0.15em] font-bold mb-1">
                                    PASO 2
                                </div>
                                <h3 className="text-text-primary font-semibold text-xl mb-2">
                                    Desarrollo interactivo
                                </h3>
                                <p className="text-text-secondary text-xs leading-tight">
                                    Convertimos tu proyecto en un visor inmersivo 3D.
                                </p>
                            </div>
                        </div>

                        {/* Right Features */}
                        <div className={`flex flex-col transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                            }`} style={{ transitionDelay: '1400ms' }}>
                            <div className="w-64 p-4 flex flex-col justify-center mb-8">
                                <div className="text-text-secondary text-xs tracking-[0.15em] font-bold mb-1">
                                    PASO 3
                                </div>
                                <h3 className="text-text-primary font-semibold text-xl mb-2">
                                    Experiencia Reveal
                                </h3>
                                <p className="text-text-secondary text-sm leading-tight">
                                    Explora y comparte tu proyecto con clientes en tiempo real.
                                </p>
                            </div>
                            <div className='flex flex-col ml-4'>
                                {features.map((feature, index) => (
                                    <div key={index} className={`flex items-center gap-5 mb-5 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                                        }`} style={{ transitionDelay: `${1600 + (index * 150)}ms` }}>
                                        <div className="w-24 h-24 bg-neutral-500 rounded-2xl flex justify-center items-center hover:scale-105 transition-transform duration-300">
                                            <img
                                                src={feature.icon}
                                                alt={feature.title}
                                                className="w-14 h-14"
                                            />
                                        </div>
                                        <span className="text-text-primary text-sm">{feature.title}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Layout - Acordeón con animaciones scroll reveal */}
                <div className="block lg:hidden mb-16">
                    <div className="space-y-4">
                        {/* PASO 1 con scroll reveal */}
                        <div
                            ref={mobileStep1Fade.elementRef as React.RefObject<HTMLDivElement>}
                            className={`border-b border-gray-600 ${mobileStep1Fade.animationClasses}`}
                            style={mobileStep1Fade.style}
                        >
                            <button
                                onClick={() => toggleStep(0)}
                                className="w-full py-4 flex items-center justify-between text-left focus:outline-none"
                            >
                                <div className="flex-1">
                                    <div className="text-text-secondary text-xs font-bold tracking-[0.15em] mb-1">
                                        PASO 1
                                    </div>
                                    <h3 className="text-text-primary font-semibold text-xl">
                                        Planos y modelos
                                    </h3>
                                </div>
                                <div className={`transform transition-transform duration-300 ${openStep === 0 ? 'rotate-180' : ''}`}>
                                    <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openStep === 0 ? 'max-h-96 pb-6' : 'max-h-0'
                                }`}>
                                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                                    Utilizamos tus planos o modelos digitales (AutoCAD, Revit, renders o modelos 3D).
                                </p>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-neutral-500 rounded-lg flex justify-center items-center">
                                            <img
                                                src="/autocad-icon.svg"
                                                alt="AutoCAD"
                                                className="w-8 h-8"
                                            />
                                        </div>
                                        <span className="text-text-primary text-sm">AutoCAD</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-neutral-500 rounded-lg flex justify-center items-center">
                                            <img
                                                src="/revit-icon.svg"
                                                alt="Revit"
                                                className="w-8 h-8"
                                            />
                                        </div>
                                        <span className="text-text-primary text-sm">Revit</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-neutral-500 rounded-lg flex justify-center items-center">
                                            <img
                                                src="/sketchup_icon.svg"
                                                alt="SketchUp"
                                                className="w-8 h-8"
                                            />
                                        </div>
                                        <span className="text-text-primary text-sm">SketchUp</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* PASO 2 con scroll reveal */}
                        <div
                            ref={mobileStep2Fade.elementRef as React.RefObject<HTMLDivElement>}
                            className={`border-b border-gray-600 ${mobileStep2Fade.animationClasses}`}
                            style={mobileStep2Fade.style}
                        >
                            <button
                                onClick={() => toggleStep(1)}
                                className="w-full py-4 flex items-center justify-between text-left focus:outline-none"
                            >
                                <div className="flex-1">
                                    <div className="text-text-secondary text-xs font-bold tracking-[0.15em] mb-1">
                                        PASO 2
                                    </div>
                                    <h3 className="text-text-primary font-semibold text-xl">
                                        Desarrollo interactivo
                                    </h3>
                                </div>
                                <div className={`transform transition-transform duration-300 ${openStep === 1 ? 'rotate-180' : ''}`}>
                                    <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openStep === 1 ? 'max-h-96 pb-6' : 'max-h-0'
                                }`}>
                                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                                    Convertimos tu proyecto en un visor inmersivo 3D.
                                </p>

                                <div className="flex items-center justify-center">
                                    {/* Contenedor con borde gradiente */}
                                    <div className="rounded-lg p-[1px] bg-gradient-green-yellow">
                                        <div className="w-20 h-20 bg-neutral-500 rounded-lg flex items-center justify-center">
                                            <div className="flex flex-col items-center">
                                                <img
                                                    src="/icon.svg"
                                                    alt="Reveal Icon"
                                                    className="w-6 h-6 mb-1"
                                                />
                                                <img
                                                    src="/logotipo.svg"
                                                    alt="Reveal Logo"
                                                    className="h-4"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* PASO 3 con scroll reveal */}
                        <div
                            ref={mobileStep3Fade.elementRef as React.RefObject<HTMLDivElement>}
                            className={`border-b border-gray-600 ${mobileStep3Fade.animationClasses}`}
                            style={mobileStep3Fade.style}
                        >
                            <button
                                onClick={() => toggleStep(2)}
                                className="w-full py-4 flex items-center justify-between text-left focus:outline-none"
                            >
                                <div className="flex-1">
                                    <div className="text-text-secondary text-xs font-bold tracking-[0.15em] mb-1">
                                        PASO 3
                                    </div>
                                    <h3 className="text-text-primary font-semibold text-xl">
                                        Experiencia Reveal
                                    </h3>
                                </div>
                                <div className={`transform transition-transform duration-300 ${openStep === 2 ? 'rotate-180' : ''}`}>
                                    <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </button>

                            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openStep === 2 ? 'max-h-96 pb-6' : 'max-h-0'
                                }`}>
                                <p className="text-text-secondary text-sm leading-relaxed mb-4">
                                    Explora y comparte tu proyecto con clientes en tiempo real.
                                </p>

                                <div className="space-y-3">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-neutral-500 rounded-lg flex justify-center items-center">
                                            <img
                                                src="/visor_lotes.svg"
                                                alt="Visor de lotes"
                                                className="w-8 h-8"
                                            />
                                        </div>
                                        <span className="text-text-primary text-sm">Visor de lotes</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 bg-neutral-500 rounded-lg flex justify-center items-center">
                                            <img
                                                src="/visor_departamentos.svg"
                                                alt="Visor de departamentos"
                                                className="w-8 h-8"
                                            />
                                        </div>
                                        <span className="text-text-primary text-sm">Visor de departamentos</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA Button con scroll reveal */}
                <div
                    ref={mobileButtonFade.elementRef as React.RefObject<HTMLDivElement>}
                    className={`text-center transition-all duration-800 ease-out lg:${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} md:${mobileButtonFade.animationClasses}`}
                    style={{
                        ...mobileButtonFade.style,
                        ...(window.innerWidth >= 1024 ? { transitionDelay: '1800ms' } : {})
                    }}
                >
                    <Button onClick={openDemoModal}>
                        Solicita una demo
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Process