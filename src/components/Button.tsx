interface ButtonProps {
  children: React.ReactNode
  width?: string
  onClick?: () => void
  className?: string
}

const Button = ({ children, width = '', onClick, className = '' }: ButtonProps) => {
  return (
    <button
      className={`
        relative bg-gradient-green-yellow text-black font-bold px-8 py-3 rounded-lg text-base 
        transition-all duration-300 shadow-lg
        before:absolute before:inset-0 before:bg-gradient-green-yellow before:rounded-lg before:blur-md before:opacity-0 before:-z-10
        hover:before:opacity-75
        before:transition-opacity before:duration-300
        ${width} ${className}
      `}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button