const WhatsAppButton = () => {
    const phoneNumber = "1234567890" // Reemplaza con el número real
    const message = "¡Hola! Me interesa conocer más sobre RevealVizor."

    const handleWhatsAppClick = () => {
        const encodedMessage = encodeURIComponent(message)
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`
        window.open(whatsappUrl, '_blank')
    }

    return (
        <div className="fixed bottom-6 right-6 lg:bottom-10 lg:right-20 z-50">
            {/* Ping Animation Background */}
            <div className="absolute inset-0 rounded-full animate-ping" style={{ backgroundColor: '#1DB779' }}></div>

            {/* Main Button */}
            <button
                onClick={handleWhatsAppClick}
                className="relative w-16 h-16 lg:w-24 lg:h-24 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
                style={{ backgroundColor: '#1DB779' }}
                aria-label="Contactar por WhatsApp"
            >
                <img
                    src="/whatsapp.png"
                    alt="WhatsApp"
                    className="w-10 h-10 lg:w-14 lg:h-14"
                />
            </button>
        </div>
    )
}

export default WhatsAppButton