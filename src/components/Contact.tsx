import { useState } from 'react'
import Button from './Button'
import { useFadeUp } from '../hooks/useFadeUp'

const Contact = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        telefono: '',
        empresa: '',
        comentario: ''
    })
    // ✅ Múltiples animaciones con diferentes delays
    const containerFade = useFadeUp({
        threshold: 0.1,
        duration: 800
    })
    const titleFade = useFadeUp({
        delay: 200,
        duration: 700,
        threshold: 0.1,

    })
    const descriptionFade = useFadeUp({
        delay: 400,
        duration: 700,
        threshold: 0.1,

    })
    const dividerFade = useFadeUp({
        delay: 600,
        duration: 700,
        threshold: 0.1,

    })
    const contactInfoFade = useFadeUp({
        delay: 800,
        duration: 700,
        threshold: 0.1,

    })
    const formFade = useFadeUp({
        delay: 400,
        duration: 800,
        threshold: 0.1
    })
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
        <section id="contact-section" className="bg-primary-bg pt-16 pb-8 px-8">
            <div className="max-w-7xl mx-auto">
                {/* Desktop Layout */}
                <div className="hidden lg:flex flex-row gap-16 items-start">
                    {/* Left Side - Contact Info (1/3) */}
                    <div
                        ref={containerFade.elementRef as React.RefObject<HTMLDivElement>}
                        className={`lg:w-1/3 ${containerFade.animationClasses}`}
                        style={containerFade.style}
                    >
                        <h2
                            ref={titleFade.elementRef as React.RefObject<HTMLHeadingElement>}
                            className={`text-4xl md:text-5xl font-bold text-text-primary mb-6 text-left ${titleFade.animationClasses}`}
                            style={titleFade.style}
                        >
                            Lleva tu proyecto<br />
                            al siguiente nivel
                        </h2>

                        <p
                            ref={descriptionFade.elementRef as React.RefObject<HTMLParagraphElement>}
                            className={`text-text-secondary text-lg mb-8 leading-relaxed text-left ${descriptionFade.animationClasses}`}
                            style={descriptionFade.style}
                        >
                            Completa el formulario y nos contactaremos contigo.
                        </p>

                        {/* Gradient Divider */}
                        <div
                            ref={dividerFade.elementRef as React.RefObject<HTMLDivElement>}
                            className={`gradient-divider my-8 ${dividerFade.animationClasses}`}
                            style={{
                                ...dividerFade.style,
                                transformOrigin: 'left',
                                transform: dividerFade.isAnimated ? 'scaleX(1)' : 'scaleX(0)'
                            }}
                        />

                        {/* Contact Information */}
                        <div
                            ref={contactInfoFade.elementRef as React.RefObject<HTMLDivElement>}
                            className={`space-y-4 ${contactInfoFade.animationClasses}`}
                            style={contactInfoFade.style}
                        >
                            <div className="flex items-center gap-3 justify-start">
                                <img
                                    src="/phone.svg"
                                    alt="Teléfono"
                                    className="w-3 h-3 text-text-primary"
                                />
                                <span className="text-text-secondary">+51 946 835 734</span>
                            </div>
                            <div className="flex items-center gap-3 justify-start">
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
                    <div
                        ref={formFade.elementRef as React.RefObject<HTMLDivElement>}
                        className={`lg:w-2/3 ${formFade.animationClasses}`}
                        style={formFade.style}
                    >

                        {/* Form Container with Gradient Border */}
                        <div>
                            <div className="rounded-lg bg-primary-bg p-8">
                                <form onSubmit={handleSubmit} className="space-y-6">

                                    {/* First Row - Name and Last Name */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-text-secondary text-sm font-medium mb-2">
                                                Nombre
                                            </label>
                                            <input
                                                type="text"
                                                name="nombre"
                                                value={formData.nombre}
                                                onChange={handleInputChange}
                                                placeholder="Escribir nombre"
                                                className="w-full px-4 py-3 border border-gray-600 bg-primary-overlay rounded-lg text-text-primary focus:outline-none focus:border-text-primary transition-colors"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-text-secondary text-sm font-medium mb-2">
                                                Apellido
                                            </label>
                                            <input
                                                type="text"
                                                name="apellido"
                                                value={formData.apellido}
                                                onChange={handleInputChange}
                                                placeholder="Escribir apellido"
                                                className="w-full px-4 py-3 border border-gray-600 bg-primary-overlay rounded-lg text-text-primary focus:outline-none focus:border-text-primary transition-colors"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Second Row - Email and Phone */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-text-secondary text-sm font-medium mb-2">
                                                Correo electrónico
                                            </label>
                                            <input
                                                type="email"
                                                name="correo"
                                                value={formData.correo}
                                                onChange={handleInputChange}
                                                placeholder="Escribir correo"
                                                className="w-full px-4 py-3 border border-gray-600 bg-primary-overlay rounded-lg text-text-primary focus:outline-none focus:border-text-primary transition-colors"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-text-secondary text-sm font-medium mb-2">
                                                Número telefónico
                                            </label>
                                            <input
                                                type="tel"
                                                name="telefono"
                                                value={formData.telefono}
                                                onChange={handleInputChange}
                                                placeholder="Escribir número"
                                                className="w-full px-4 py-3 border border-gray-600 bg-primary-overlay rounded-lg text-text-primary focus:outline-none focus:border-text-primary transition-colors"
                                                required
                                            />
                                        </div>
                                    </div>

                                    {/* Third Row - Company Name */}
                                    <div>
                                        <label className="block text-text-secondary text-sm font-medium mb-2">
                                            Nombre de la empresa
                                        </label>
                                        <input
                                            type="text"
                                            name="empresa"
                                            value={formData.empresa}
                                            onChange={handleInputChange}
                                            placeholder="Escribir nombre de la empresa"
                                            className="w-full px-4 py-3 border border-gray-600 bg-primary-overlay rounded-lg text-text-primary focus:outline-none focus:border-text-primary transition-colors"
                                        />
                                    </div>

                                    {/* Fourth Row - Additional Comments */}
                                    <div>
                                        <label className="block text-text-secondary text-sm font-medium mb-2">
                                            Comentario adicional
                                        </label>
                                        <textarea
                                            name="comentario"
                                            value={formData.comentario}
                                            onChange={handleInputChange}
                                            placeholder="Escribir comentario adicional..."
                                            rows={4}
                                            className="w-full px-4 py-3 border border-gray-600 bg-primary-overlay rounded-lg text-text-primary focus:outline-none focus:border-text-primary transition-colors resize-none"
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <div>
                                        <Button className="w-full">
                                            Enviar
                                        </Button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mobile Layout */}
                <div className="lg:hidden">
                    <div className="flex flex-col items-center text-center">
                        {/* Header Content */}
                        <div>
                            <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-6">
                                Lleva tu proyecto<br />
                                al siguiente nivel
                            </h2>

                            <p className="text-text-secondary text-lg mb-8 leading-relaxed">
                                Completa el formulario y nos contactaremos contigo.
                            </p>

                            {/* Gradient Divider */}
                            <div className="gradient-divider my-8 mx-auto" style={{ transformOrigin: 'center' }}></div>

                            {/* Contact Information */}
                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
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
                    </div>

                    {/* Contact Form - Centered and Narrower for Mobile */}
                    <div className="max-w-md mx-auto">
                        <div>

                            {/* Form Container */}
                            <div>
                                <div className="rounded-lg bg-primary-bg p-8">
                                    <form onSubmit={handleSubmit} className="space-y-6">

                                        {/* Name */}
                                        <div>
                                            <label className="block text-text-secondary text-sm font-medium mb-2">
                                                Nombre
                                            </label>
                                            <input
                                                type="text"
                                                name="nombre"
                                                value={formData.nombre}
                                                onChange={handleInputChange}
                                                placeholder="Escribir nombre"
                                                className="w-full px-4 py-3 border border-gray-600 bg-primary-overlay rounded-lg text-text-primary focus:outline-none focus:border-text-primary transition-colors"
                                                required
                                            />
                                        </div>

                                        {/* Last Name */}
                                        <div>
                                            <label className="block text-text-secondary text-sm font-medium mb-2">
                                                Apellido
                                            </label>
                                            <input
                                                type="text"
                                                name="apellido"
                                                value={formData.apellido}
                                                onChange={handleInputChange}
                                                placeholder="Escribir apellido"
                                                className="w-full px-4 py-3 border border-gray-600 bg-primary-overlay rounded-lg text-text-primary focus:outline-none focus:border-text-primary transition-colors"
                                                required
                                            />
                                        </div>

                                        {/* Email */}
                                        <div>
                                            <label className="block text-text-secondary text-sm font-medium mb-2">
                                                Correo electrónico
                                            </label>
                                            <input
                                                type="email"
                                                name="correo"
                                                value={formData.correo}
                                                onChange={handleInputChange}
                                                placeholder="Escribir correo"
                                                className="w-full px-4 py-3 border border-gray-600 bg-primary-overlay rounded-lg text-text-primary focus:outline-none focus:border-text-primary transition-colors"
                                                required
                                            />
                                        </div>

                                        {/* Phone */}
                                        <div>
                                            <label className="block text-text-secondary text-sm font-medium mb-2">
                                                Número telefónico
                                            </label>
                                            <input
                                                type="tel"
                                                name="telefono"
                                                value={formData.telefono}
                                                onChange={handleInputChange}
                                                placeholder="Escribir número"
                                                className="w-full px-4 py-3 border border-gray-600 bg-primary-overlay rounded-lg text-text-primary focus:outline-none focus:border-text-primary transition-colors"
                                                required
                                            />
                                        </div>

                                        {/* Company Name */}
                                        <div>
                                            <label className="block text-text-secondary text-sm font-medium mb-2">
                                                Nombre de la empresa
                                            </label>
                                            <input
                                                type="text"
                                                name="empresa"
                                                value={formData.empresa}
                                                onChange={handleInputChange}
                                                placeholder="Escribir nombre de la empresa"
                                                className="w-full px-4 py-3 border border-gray-600 bg-primary-overlay rounded-lg text-text-primary focus:outline-none focus:border-text-primary transition-colors"
                                            />
                                        </div>

                                        {/* Additional Comments */}
                                        <div>
                                            <label className="block text-text-secondary text-sm font-medium mb-2">
                                                Comentario adicional
                                            </label>
                                            <textarea
                                                name="comentario"
                                                value={formData.comentario}
                                                onChange={handleInputChange}
                                                placeholder="Escribir comentario adicional..."
                                                rows={4}
                                                className="w-full px-4 py-3 border border-gray-600 bg-primary-overlay rounded-lg text-text-primary focus:outline-none focus:border-text-primary transition-colors resize-none"
                                            />
                                        </div>

                                        {/* Submit Button */}
                                        <div>
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
            </div>
        </section>
    )
}

export default Contact