import React from 'react'

interface ReviewsProps extends React.HTMLProps<HTMLUListElement> {
  children: React.ReactNode
}

function Reviews({ children, className = '', ...props }: ReviewsProps) {
  return (
    <ul className={`grid md:grid-cols-3 gap-4 md:gap-8 ${className}`} {...props}>
      {React.Children.map(children, (child, i) => (
        <li className={`${i ? `md:mt-${4 * i}` : ''}`}>{child}</li>
      ))}
    </ul>
  )
}

export default Reviews
