import React from 'react'

interface ReviewProps extends React.HTMLProps<HTMLDivElement> {
  author: string
  avatar: string
  children: React.ReactNode
}

function Review({ author, avatar, children, className = '', ...props }: ReviewProps) {
  return (
    <article
      className={`grid gap-6 grid-cols-review max-w-md w-full py-10 px-8 text-sm text-neutral bg-primary rounded-lg ${className}`}
      {...props}
    >
      <img src={avatar} alt={`${author} avatar`} width={40} height={40} className="rounded-full" />
      <div>
        <h2 className="font-bold mb-1">{author}</h2>
        <em className="text-primary-light">Verified Buyer</em>
      </div>
      <blockquote className="col-span-full font-medium tracking-blockquote">“&nbsp;{children}&nbsp;”</blockquote>
    </article>
  )
}

export default Review
