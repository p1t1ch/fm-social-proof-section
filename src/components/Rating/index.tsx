import React from 'react'
import { ReactComponent as StarIcon } from '@/icons/icon-star.svg'

interface RatingProps extends React.HTMLProps<HTMLDivElement> {
  value: number
  source: string
}

function Rating({ value, source, className = '', ...props }: RatingProps) {
  return (
    <article
      className={`flex max-w-lg w-full py-5 px-8 rounded-lg text-sm font-bold bg-neutral-light ${className}`}
      {...props}
    >
      <div className="grid grid-flow-col gap-1 mr-8">
        {Array(value)
          .fill(null)
          .map((_, i) => (
            <StarIcon key={i} />
          ))}
      </div>
      <div>
        Rated {value} Stars in {source}
      </div>
    </article>
  )
}

export default Rating
