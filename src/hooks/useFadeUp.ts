import { useEffect, useState } from 'react'
import { useIntersectionObserver } from './useIntersectionObserver'

interface UseFadeUpOptions {
  delay?: number
  duration?: number
  threshold?: number
  triggerOnce?: boolean
}

export const useFadeUp = (options: UseFadeUpOptions = {}) => {
  const [isAnimated, setIsAnimated] = useState(false)
  const { elementRef, isVisible } = useIntersectionObserver({
    threshold: options.threshold || 0.1,
    triggerOnce: options.triggerOnce !== false
  })

  const {
    delay = 0,
    duration = 600
  } = options

  useEffect(() => {
    if (isVisible && !isAnimated) {
      const timer = setTimeout(() => {
        setIsAnimated(true)
      }, delay)

      return () => clearTimeout(timer)
    }
  }, [isVisible, delay, isAnimated])

  const animationClasses = `transition-all ease-out ${
    isAnimated 
      ? 'opacity-100 translate-y-0' 
      : 'opacity-0 translate-y-8'
  }`

  const style = {
    transitionDuration: `${duration}ms`
  }

  return {
    elementRef,
    animationClasses,
    style,
    isAnimated
  }
}