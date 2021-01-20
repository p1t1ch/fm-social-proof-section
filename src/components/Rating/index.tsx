import React from 'react'

interface RatingProps extends React.HTMLProps<HTMLLIElement> {
  value: number
  source: string
}

function Rating({ value, source, className = '', ...props }: RatingProps) {
  return (
    <li className={`${className}`} {...props}>
      <div>
        {Array(value)
          .fill(null)
          .map((_, i) => (
            <span key={i}>S</span>
          ))}
      </div>
      <div>
        Rated {value} Stars in {source}
      </div>
    </li>
  )
}

export default Rating
