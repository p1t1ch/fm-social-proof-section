import React from 'react'

interface RatingsProps extends React.HTMLProps<HTMLUListElement> {
  children: React.ReactNode
}

function Ratings({ children, className = '', ...props }: RatingsProps) {
  return (
    <ul className={`grid gap-4 ${className}`} {...props}>
      {React.Children.map(children, (child, i) => (
        <li className={`${i ? `ml-${12 * i}` : ''}`}>{child}</li>
      ))}
    </ul>
  )
}

export default Ratings
