import React from 'react'

interface RatingsProps extends React.HTMLProps<HTMLUListElement> {
  children: React.ReactNode
}

function Ratings({ children, ...props }: RatingsProps) {
  return (
    <ul {...props}>
      {React.Children.map(children, child => (
        <li>{child}</li>
      ))}
    </ul>
  )
}

export default Ratings
