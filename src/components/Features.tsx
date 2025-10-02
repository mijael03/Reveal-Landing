import { useState, useEffect } from 'react'

const Features = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const triggerPoint = window.innerHeight * 0.5 // Trigger al 50% del scroll

      if (scrollY > triggerPoint) {
        setIsVisible(true)
      } else {
        setIsVisible(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const features = [
    {
      icon: "🎯",
      title: "Experiencia inmersiva",
      description: "Recorridos 360° y zoom interactivo que hacen que tu cliente se sienta dentro del proyecto."
    },
    {
      icon: "👍",
      title: "Decisiones rápidas",
      description: "Visualiza lotes y departamentos sin visitas físicas y agiliza la compra."
    },
    {
      icon: "💰",
      title: "Ventas modernas",
      description: "Dale a tu equipo la herramienta digital que diferencia tu proyecto de la competencia."
    }
  ]

  return (
    <div className={`fixed inset-0 flex transition-all duration-1000 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'
      }`}>
      {/* Contenido de características - LADO IZQUIERDO */}
      <div className="w-1/2 h-full bg-primary-bg flex flex-col justify-center px-12">
        <div className="text-text-secondary text-sm mb-2 tracking-wider">
          ¿POR QUÉ ELEGIRNOS?
        </div>

        <h2 className="text-4xl font-bold text-text-primary mb-12">
          Más allá de lo tradicional
        </h2>

        <div className="space-y-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`border border-gray-700 rounded-lg p-6 bg-gray-800/30 backdrop-blur-sm transition-all duration-700 delay-${index * 200} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'
                }`}
            >
              <div className="text-2xl mb-3">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-text-primary mb-2">
                {feature.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Video redimensionado - LADO DERECHO */}
      <div className="w-1/2 h-full">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/overview_video.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>
      </div>
    </div>
  )
}

export default Features