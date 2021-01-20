import React from 'react'

interface ReviewsProps extends React.HTMLProps<HTMLUListElement> {
  children: React.ReactNode
}

function Reviews({ children, ...props }: ReviewsProps) {
  return (
    <ul {...props}>
      {React.Children.map(children, child => (
        <li>{child}</li>
      ))}
    </ul>
  )
}

export default Reviews
