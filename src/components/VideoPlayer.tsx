import { useState, useEffect } from 'react'

const VideoPlayer = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const triggerPoint = window.innerHeight * 0.5
      
      if (scrollY > triggerPoint) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className={`transition-all duration-1000 ease-in-out ${
      isScrolled 
        ? 'fixed top-0 right-0 w-1/2 h-screen z-10' 
        : 'w-full h-screen'
    }`}>
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
  )
}

export default VideoPlayer