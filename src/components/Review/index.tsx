import React from 'react'

interface ReviewProps extends React.HTMLProps<HTMLDivElement> {
  author: string
  children: React.ReactNode
}

function Review({ author, children, className = '', ...props }: ReviewProps) {
  return (
    <article
      className={`max-w-88 w-full py-10 px-8 text-sm text-neutral bg-primary rounded-lg ${className}`}
      {...props}
    >
      <div className="mr-6">Logo</div>
      <div className="font-bold mb-1">{author}</div>
      <div className="text-primary-light mb-7">Verified Buyer</div>
      <blockquote className="font-medium">“&nbsp;{children}&nbsp;”</blockquote>
    </article>
  )
}

export default Review
