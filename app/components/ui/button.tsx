import { type ButtonHTMLAttributes, forwardRef } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary"
  size?: "default" | "lg"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, children, variant = "primary", size = "default", ...props }, ref) => {
    const baseStyles = "font-bold rounded-lg transition-colors duration-200 ease-in-out"
    const variantStyles = {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      secondary: "bg-orange-500 text-blue-600 hover:bg-gray-100 border border-blue-600",
    }
    const sizeStyles = {
      default: "px-4 py-2 text-sm",
      lg: "px-6 py-3 text-base",
    }

    const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className || ""}`

    return (
      <button className={buttonClasses} ref={ref} {...props}>
        {children}
      </button>
    )
  },
)

Button.displayName = "Button"

export { Button }

