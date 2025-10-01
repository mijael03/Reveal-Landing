interface ButtonProps {
  children: React.ReactNode
  width?: string
  onClick?: () => void
  className?: string
}

const Button = ({ children, width = '', onClick, className = '' }: ButtonProps) => {
  return (
    <button
      className={`bg-gradient-green-yellow text-black font-bold px-8 py-3 rounded-lg text-base hover:opacity-90 transition-opacity shadow-lg ${width} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button