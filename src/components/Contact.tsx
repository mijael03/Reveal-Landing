import { useState, useEffect } from 'react'
import Button from './Button'

const Contact = () => {
    const [isVisible, setIsVisible] = useState(false)
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        telefono: '',
        empresa: '',
        comentario: ''
    })

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

        const section = document.getElementById('contact-section')
        if (section) {
            observer.observe(section)
        }

        return () => {
            if (section) {
                observer.unobserve(section)
            }
        }
    }, [])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Form submitted:', formData)
        // Aquí puedes agregar la lógica de envío del formulario
    }

    return (
        <section id="contact-section" className=" bg-primary-bg pt-16 pb-8 px-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-16 items-start">

                    {/* Left Side - Contact Info (1/3) */}
                    <div className={`lg:w-1/3 transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}>
                        <h2 className={`text-4xl md:text-5xl font-bold text-text-primary mb-6 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`} style={{ transitionDelay: '200ms' }}>
                            Lleva tu proyecto<br />
                            al siguiente nivel
                        </h2>

                        <p className={`text-text-secondary text-lg mb-8 leading-relaxed transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`} style={{ transitionDelay: '400ms' }}>
                            Completa el formulario y nos contactaremos contigo.
                        </p>

                        {/* Gradient Divider */}
                        <div className={`gradient-divider my-8 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
                            }`} style={{ transitionDelay: '600ms', transformOrigin: 'left' }}></div>

                        {/* Contact Information */}
                        <div className={`space-y-4 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                            }`} style={{ transitionDelay: '800ms' }}>
                            <div className="flex items-center gap-3">
                                <img
                                    src="/phone.svg"
                                    alt="Teléfono"
                                    className="w-3 h-3 text-text-primary"
                                />
                                <span className="text-text-secondary">+51 946 835 734</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <img
                                    src="/mail.svg"
                                    alt="Email"
                                    className="w-3 h-3 text-text-primary"
                                />
                                <span className="text-text-secondary">contacto@revealvision.com</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Contact Form (2/3) */}
                    <div className={`lg:w-2/3 transition-all duration-800 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`} style={{ transitionDelay: '400ms' }}>

                        {/* Form Container with Gradient Border */}
                        <div>
                            <div className="rounded-lg bg-primary-bg p-8">
                                <form onSubmit={handleSubmit} className="space-y-6">

                                    {/* First Row - Name and Last Name */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                            }`} style={{ transitionDelay: '600ms' }}>
                                            <label className="block text-text-secondary text-sm font-medium mb-2">
                                                Nombre
                                            </label>
                                            <input
                                                type="text"
                                                name="nombre"
                                                value={formData.nombre}
                                                onChange={handleInputChange}
                                                placeholder="Escribir nombre"
                                                className="w-full px-4 py-3 border border-gray-600 rounded-lg text-text-primary focus:outline-none focus:border-text-primary transition-colors"
                                                required
                                            />
                                        </div>

                                        <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                            }`} style={{ transitionDelay: '700ms' }}>
                                            <label className="block text-text-secondary text-sm font-medium mb-2">
                                                Apellido
                                            </label>
                                            <input
                                                type="text"
                                                name="apellido"
                                                value={formData.apellido}
                                                onChange={handleInputChange}
                                                placeholder="Escribir apellido"
                                                className="w-full px-4 py-3 border border-gray-600 rounded-lg text-text-primary focus:outline-none focus:border-text-primary transition-colors"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Second Row - Email and Phone */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                            }`} style={{ transitionDelay: '800ms' }}>
                                            <label className="block text-text-secondary text-sm font-medium mb-2">
                                                Correo electrónico
                                            </label>
                                            <input
                                                type="email"
                                                name="correo"
                                                value={formData.correo}
                                                onChange={handleInputChange}
                                                placeholder="Escribir correo"
                                                className="w-full px-4 py-3 border border-gray-600 rounded-lg text-text-primary focus:outline-none focus:border-text-primary transition-colors"
                                                required
                                            />
                                        </div>

                                        <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                            }`} style={{ transitionDelay: '900ms' }}>
                                            <label className="block text-text-secondary text-sm font-medium mb-2">
                                                Número telefónico
                                            </label>
                                            <input
                                                type="tel"
                                                name="telefono"
                                                value={formData.telefono}
                                                onChange={handleInputChange}
                                                placeholder="Escribir número"
                                                className="w-full px-4 py-3 border border-gray-600 rounded-lg text-text-primary focus:outline-none focus:border-text-primary transition-colors"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Third Row - Company Name */}
                                    <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                        }`} style={{ transitionDelay: '1000ms' }}>
                                        <label className="block text-text-secondary text-sm font-medium mb-2">
                                            Nombre de la empresa
                                        </label>
                                        <input
                                            type="text"
                                            name="empresa"
                                            value={formData.empresa}
                                            onChange={handleInputChange}
                                            placeholder="Escribir nombre de la empresa"
                                            className="w-full px-4 py-3 border border-gray-600 rounded-lg text-text-primary focus:outline-none focus:border-text-primary transition-colors"
                                        />
                                    </div>

                                    {/* Fourth Row - Additional Comments */}
                                    <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                        }`} style={{ transitionDelay: '1100ms' }}>
                                        <label className="block text-text-secondary text-sm font-medium mb-2">
                                            Comentario adicional
                                        </label>
                                        <textarea
                                            name="comentario"
                                            value={formData.comentario}
                                            onChange={handleInputChange}
                                            placeholder="Escribir comentario adicional..."
                                            rows={4}
                                            className="w-full px-4 py-3 border border-gray-600 rounded-lg text-text-primary focus:outline-none focus:border-text-primary transition-colors resize-none"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                                        }`} style={{ transitionDelay: '1200ms' }}>
                                        <Button className="w-full">
                                            Enviar
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact