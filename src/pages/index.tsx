import React from 'react'
import Seo from '@/components/Seo'
import Rating from '@/components/Rating'
import Review from '@/components/Review'
import Ratings from '@/components/Ratings'
import Reviews from '@/components/Reviews'

function IndexPage() {
  return (
    <main className="py-20 px-6">
      <Seo title="Frontend Mentor: Social proof section" />
      <section>
        <div>
          <h1 className="text-5xl font-bold tracking-tight mb-2">10,000+ of our users love our products.</h1>
          <p className="font-medium tracking-tight">
            We only provide great products combined with excellent customer service. See what our satisfied customers
            are saying about our services.
          </p>
        </div>
        <Ratings>
          <Rating value={5} source="Reviews" />
          <Rating value={5} source="Report Guru" />
          <Rating value={5} source="BestTech" />
        </Ratings>
      </section>
      <section>
        <Reviews>
          <Review author="Colton Smith">
            We needed the same printed design as the one we had ordered a week prior. Not only did they find the
            original order, but we also received it in time. Excellent!
          </Review>
          <Review author="Irene Roberts">
            Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of
            the purchase and the speed of delivery.
          </Review>
          <Review author="Anne Wallace">
            Put an order with this company and can only praise them for the very high standard. Will definitely use them
            again and recommend them to everyone!
          </Review>
        </Reviews>
      </section>
    </main>
  )
}

export default IndexPage
