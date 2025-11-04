import { useState, useEffect } from 'react'
import Button from './Button'

interface DemoModalProps {
    isOpen: boolean
    onClose: () => void
}

const DemoModal = ({ isOpen, onClose }: DemoModalProps) => {
    const [formData, setFormData] = useState({
        nombre: '',
        apellido: '',
        correo: '',
        empresa: '',
        pais: '',
        producto: ''
    })

    // Deshabilitar scroll del body cuando el modal está abierto
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'unset'
        }

        // Cleanup al desmontar el componente
        return () => {
            document.body.style.overflow = 'unset'
        }
    }, [isOpen])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log('Demo form submitted:', formData)
        // Aquí puedes agregar la lógica de envío del formulario
        onClose()
    }

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-neutral-600/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
            <div className="bg-primary-bg rounded-2xl px-6 py-8 md:px-30 md:py-20 w-full max-w-md md:max-w-4xl max-h-[90vh] md:max-h-none overflow-y-auto relative">
                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 md:top-6 md:right-6 text-white/70 hover:text-white w-6 md:w-10 transition-colors z-10"
                    aria-label="Cerrar modal"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 md:w-10 md:h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Header */}
                <div className="text-center mb-6 md:mb-8">
                    <h2 className="text-xl md:text-3xl font-bold text-white mb-2 md:mb-4">
                        Descubre REVEAL en acción
                    </h2>
                    <p className="text-white/70 text-sm md:text-lg">
                        Completa tus datos y recibe tu acceso a una demo personalizada
                    </p>
                </div>
                <div className="h-[2px] w-full mb-8 bg-gradient-green-yellow" />
                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                    {/* First Row - Name and Last Name */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div>
                            <label className="block text-white text-sm font-medium mb-2">
                                Nombre
                            </label>
                            <div className="rounded-lg p-[1px] bg-gradient-border">
                                <div className="w-full h-full rounded-lg bg-primary-bg">
                                    <input
                                        type="text"
                                        name="nombre"
                                        value={formData.nombre}
                                        onChange={handleInputChange}
                                        placeholder="Escribir nombre"
                                        className="w-full px-4 py-3 bg-primary-overlay rounded-lg text-white placeholder-white/50 focus:outline-none transition-colors"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="block text-white text-sm font-medium mb-2">
                                Apellido
                            </label>
                            <div className="rounded-lg p-[1px] bg-gradient-border">
                                <div className="w-full h-full rounded-lg bg-primary-bg">
                                    <input
                                        type="text"
                                        name="apellido"
                                        value={formData.apellido}
                                        onChange={handleInputChange}
                                        placeholder="Escribir apellido"
                                        className="w-full px-4 py-3 bg-primary-overlay rounded-lg text-white placeholder-white/50 focus:outline-none transition-colors"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second Row - Email and Company */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div>
                            <label className="block text-white text-sm font-medium mb-2">
                                Correo corporativo
                            </label>
                            <div className="rounded-lg p-[1px] bg-gradient-border">
                                <div className="w-full h-full rounded-lg bg-primary-bg">
                                    <input
                                        type="email"
                                        name="correo"
                                        value={formData.correo}
                                        onChange={handleInputChange}
                                        placeholder="Escribir correo"
                                        className="w-full px-4 py-3 bg-primary-overlay rounded-lg text-white placeholder-white/50 focus:outline-none transition-colors"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="block text-white text-sm font-medium mb-2">
                                Nombre de la empresa
                            </label>
                            <div className="rounded-lg p-[1px] bg-gradient-border">
                                <div className="w-full h-full rounded-lg bg-primary-bg">
                                    <input
                                        type="text"
                                        name="empresa"
                                        value={formData.empresa}
                                        onChange={handleInputChange}
                                        placeholder="Escribir nombre de la empresa"
                                        className="w-full px-4 py-3 bg-primary-overlay rounded-lg text-white placeholder-white/50 focus:outline-none transition-colors"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Third Row - Country and Product */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div>
                            <label className="block text-white text-sm font-medium mb-2">
                                País
                            </label>
                            <div className="rounded-lg p-[1px] bg-gradient-border relative">
                                <div className="w-full h-full rounded-lg bg-primary-bg relative">
                                    <select
                                        name="pais"
                                        value={formData.pais}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-primary-overlay rounded-lg text-white/50 focus:outline-none transition-colors appearance-none cursor-pointer"
                                        required
                                    >
                                        <option value="" className="bg-neutral-900 text-white/50">Selecciona país</option>
                                        <option value="peru" className="bg-neutral-900 text-white">Perú</option>
                                        <option value="colombia" className="bg-neutral-900 text-white">Colombia</option>
                                        <option value="mexico" className="bg-neutral-900 text-white">México</option>
                                        <option value="chile" className="bg-neutral-900 text-white">Chile</option>
                                        <option value="argentina" className="bg-neutral-900 text-white">Argentina</option>
                                        <option value="otro" className="bg-neutral-900 text-white">Otro</option>
                                    </select>
                                    {/* Custom dropdown arrow */}
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="block text-white text-sm font-medium mb-2">
                                Producto de interés
                            </label>
                            <div className="rounded-lg p-[1px] bg-gradient-border relative">
                                <div className="w-full h-full rounded-lg bg-primary-bg relative">
                                    <select
                                        name="producto"
                                        value={formData.producto}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-3 bg-primary-overlay rounded-lg text-white/50 focus:outline-none transition-colors appearance-none cursor-pointer"
                                        required
                                    >
                                        <option value="" className="bg-neutral-900 text-white/50">Selecciona producto</option>
                                        <option value="visor-lotes" className="bg-neutral-900 text-white">Visor de lotes</option>
                                        <option value="visor-departamentos" className="bg-neutral-900 text-white">Visor de departamentos</option>
                                        <option value="todos-visores" className="bg-neutral-900 text-white">Todos los visores</option>
                                    </select>
                                    {/* Custom dropdown arrow */}
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                        <svg className="w-5 h-5 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                        <Button className="w-full">
                            Enviar
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default DemoModal