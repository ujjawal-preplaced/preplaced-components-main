import { useState } from 'react'
import { LoaderWithThreeDots } from '../loader/loaderwiththreedots'

export type ButtonProps = {
  children?: React.ReactNode
  className?: string
  text?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  disabled?: boolean
} & React.ButtonHTMLAttributes<HTMLButtonElement>

export const Button: React.FC<ButtonProps> = ({
  onClick,
  className = 'bg-blue-500 text-white',
  ...props
}: ButtonProps) => {
  const [isLoading, setIsLoading] = useState(false)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsLoading(true)
    if (onClick) {
      onClick(event)
    }
    setTimeout(() => {
      setIsLoading(false)
    }, 100)
  }

  return (
    <button className={`px-4 py-2 rounded font-normal ${className}`} {...props} onClick={handleClick}>
      {isLoading ? <LoaderWithThreeDots className="w-full h-full" /> : props.text}
    </button>
  )
}
