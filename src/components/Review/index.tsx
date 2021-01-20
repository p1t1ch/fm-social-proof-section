import React from 'react'

interface ReviewProps extends React.HTMLProps<HTMLLIElement> {
  author: string
  children: React.ReactNode
}

function Review({ author, children, className = '', ...props }: ReviewProps) {
  return (
    <li className={`${className}`} {...props}>
      <article>
        <div>Logo</div>
        <div>{author}</div>
        <div>Verified Buyer</div>
        <blockquote>“ {children} ”</blockquote>
      </article>
    </li>
  )
}

export default Review
