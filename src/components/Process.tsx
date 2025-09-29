import Button from './Button'

const Process = () => {
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
                <div className="flex flex-col lg:flex-row items-start justify-center gap-8 mb-16">
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
                        <div className="flex flex-col gap-5 ml-4">
                            <div className="flex items-center gap-5">
                                <div className="w-24 h-24 bg-gray-600 rounded-2xl flex justify-center items-center">
                                    <img
                                        src="/autocad-icon.svg"
                                        alt="AutoCAD"
                                        className="w-14 h-14"
                                    />
                                </div>
                                <span className="text-text-primary text-sm">AutoCAD</span>
                            </div>

                            <div className="flex items-center gap-5">
                                <div className="w-24 h-24 bg-gray-600 rounded-2xl flex justify-center items-center">
                                    <img
                                        src="/revit-icon.svg"
                                        alt="Revit"
                                        className="w-14 h-14"
                                    />
                                </div>
                                <span className="text-text-primary text-sm">Revit</span>
                            </div>

                            <div className="flex items-center gap-5">
                                <div className="w-24 h-24 bg-gray-600 rounded-2xl flex justify-center items-center">
                                    <img
                                        src="/sketchup_icon.svg"
                                        alt="SketchUp"
                                        className="w-14 h-14"
                                    />
                                </div>
                                <span className="text-text-primary text-sm">SketchUp</span>
                            </div>
                        </div>
                    </div>

                    {/* Center - Reveal Logo */}
                    <div className="flex flex-col items-center mx-8 my-14">
                        <div className="w-44 h-44 bg-gray-700 rounded-lg flex items-center justify-center mb-12">
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
                        <div className="w-64 h-32 p-4 flex flex-col justify-cente">
                            <div className="text-text-secondary text-xs mb-1">
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
                    <div className="flex flex-col ">
                        <div className="w-64 p-4 flex flex-col justify-center mb-8">
                            <div className="text-text-secondary text-xs mb-1">
                                PASO 3
                            </div>
                            <h3 className="text-text-primary font-semibold text-xl mb-2">
                                Experiencia Reveal
                            </h3>
                            <p className="text-text-secondary text-xs leading-tight">
                                Explora y comparte tu proyecto con clientes en tiempo real.
                            </p>
                        </div>
                        <div className='flex flex-col ml-4'>
                            {features.map((feature, index) => (
                                <div key={index} className="flex items-center gap-5 mb-5">
                                    <div className="w-24 h-24 bg-gray-600 rounded-2xl flex justify-center items-center">
                                        <img
                                            src={feature.icon}
                                            alt="Revit"
                                            className="w-14 h-14"
                                        />
                                    </div>
                                    <span className="text-text-primary text-sm">{feature.title}</span>
                                </div>
                            ))}
                        </div>

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