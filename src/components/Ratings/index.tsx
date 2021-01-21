import React from 'react'

interface RatingsProps extends React.HTMLProps<HTMLUListElement> {
  children: React.ReactNode
}

function Ratings({ children, className = '', ...props }: RatingsProps) {
  return (
    <ul className={`grid gap-4 ${className}`} {...props}>
      {React.Children.map(children, (child, i) => (
        <li className={`${i === 1 ? 'md:ml-12' : i === 2 ? 'md:ml-24' : ''}`}>{child}</li>
      ))}
    </ul>
  )
}

export default Ratings
