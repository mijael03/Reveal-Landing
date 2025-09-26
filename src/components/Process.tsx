import Button from './Button'

const Process = () => {
    const steps = [
        {
            number: "PASO 1",
            title: "Planos y modelos",
            description: "Utilizamos tus planos o modelos digitales (AutoCAD, Revit, renders o modelos 3D).",
            icon: "📋",
            bgColor: "#4A5568"
        },
        {
            number: "PASO 2",
            title: "Desarrollo interactivo",
            description: "Convertimos tu proyecto en un visor inmersivo 3D.",
            icon: "🏠",
            bgColor: "#2D3748"
        },
        {
            number: "PASO 3",
            title: "Experiencia Reveal",
            description: "Explora y comparte tu proyecto con clientes en tiempo real.",
            icon: "💻",
            bgColor: "#1A202C"
        }
    ]

    const features = [
        {
            title: "Vista de lotes",
            icon: "🏘️"
        },
        {
            title: "Vista de departamentos",
            icon: "🏢"
        }
    ]

    return (
        <section className="min-h-screen bg-primary-bg py-16 ">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                    <p className="text-text-secondary text-sm mb-4 tracking-wider">
                        ¿CÓMO LO HACEMOS?
                    </p>
                    <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-8">
                        De planos a experiencias interactivas
                    </h2>
                    <p className="text-text-secondary text-lg max-w-4xl mx-auto leading-relaxed">
                        Con REVEAL transformamos tus proyectos inmobiliarios en herramientas de venta interactivas. A partir
                        de planos y modelos digitales, desarrollamos visores inmersivos que permiten explorar cada detalle de
                        manera única y atractiva.
                    </p>
                </div>

                {/* Process Flow */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-16">
                    {/* Left Steps */}
                    <div className="flex flex-col">
                        {/* PASO 1 */}
                        <div className="w-64 h-32 p-4 flex flex-col justify-cente">
                            <div className="text-text-secondary text-xs mb-1">
                                PASO 1
                            </div>
                            <h3 className="text-text-primary font-semibold text-xl mb-2">
                                Planos y modelos
                            </h3>
                            <p className="text-text-secondary text-xs leading-tight">
                                Utilizamos tus planos o modelos digitales (AutoCAD, Revit, renders o modelos 3D).
                            </p>
                        </div>

                        {/* Iconos de archivos */}
                        <div className="flex flex-col gap-3 ml-4">
                            <div className="flex items-center gap-3">
                                <div className="w-24 h-24 bg-gray-600 rounded-2xl flex justify-center items-center">
                                    <img
                                        src="/autocad-icon.svg"
                                        alt="AutoCAD"
                                        className="w-14 h-14"
                                    />
                                </div>
                                <span className="text-text-primary text-sm">AutoCAD</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gray-600 rounded flex items-center justify-center">
                                    <img
                                        src="/revit-icon.svg"
                                        alt="Revit"
                                        className="w-6 h-6"
                                    />
                                </div>
                                <span className="text-text-primary text-sm">Revit</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 bg-gray-600 rounded flex items-center justify-center">
                                    <img
                                        src="/sketchup_icon.svg"
                                        alt="SketchUp"
                                        className="w-6 h-6"
                                    />
                                </div>
                                <span className="text-text-primary text-sm">SketchUp</span>
                            </div>
                        </div>
                    </div>

                    {/* Center - Reveal Logo */}
                    <div className="flex flex-col items-center mx-8">
                        <div className="w-32 h-32 bg-gray-700 rounded-lg flex items-center justify-center mb-4">
                            <div className="flex flex-col items-center">
                                <img
                                    src="/icon.svg"
                                    alt="Reveal Icon"
                                    className="w-8 h-8 mb-2"
                                />
                                <img
                                    src="/logotipo.svg"
                                    alt="Reveal Logo"
                                    className="h-6"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Features */}
                    <div className="flex flex-col gap-6">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="w-64 h-20 bg-gray-700 rounded-lg p-4 flex items-center gap-4"
                            >
                                <div className="text-2xl">
                                    {feature.icon}
                                </div>
                                <h3 className="text-text-primary font-semibold">
                                    {feature.title}
                                </h3>
                            </div>
                        ))}
                    </div>
                </div>

                {/* CTA Button */}
                <div className="text-center">
                    <Button>
                        Agenda una demo
                    </Button>
                </div>
            </div>
        </section>
    )
}

export default Process