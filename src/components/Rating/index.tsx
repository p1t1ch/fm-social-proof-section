import React from 'react'

interface RatingProps extends React.HTMLProps<HTMLDivElement> {
  value: number
  source: string
}

function Rating({ value, source, className = '', ...props }: RatingProps) {
  return (
    <article
      className={`max-w-112 w-full py-5 px-8 rounded-lg text-sm font-bold bg-neutral-light ${className}`}
      {...props}
    >
      <span className="mr-8">
        {Array(value)
          .fill(null)
          .map((_, i) => (
            <span key={i}>S</span>
          ))}
      </span>
      <span>
        Rated {value} Stars in {source}
      </span>
    </article>
  )
}

export default Rating
