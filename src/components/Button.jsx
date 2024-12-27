import React from 'react'

export default function Button({
    children,
    textColor = 'text-white',
    type = 'button',
    textSize = 'text-lg',
    padX = 'px-4',
    padY = 'py-3',
    className = '',
    ...props
}) {
    return (
        <button
            className={`${padX}  py-3  text-background text-small font-roboto bg-gradient-to-b from-btn-gradient-start from-45% to-btn-gradient-end  rounded-full shadow-none transition-shadow duration-300 hover:shadow-md hover:shadow-gray-400`}>
            {children}
        </button>
    )
}