import React from 'react'
import Seo from '@/components/Seo'
import Rating from '@/components/Rating'
import Review from '@/components/Review'
import Ratings from '@/components/Ratings'
import Reviews from '@/components/Reviews'
import imageColton from '@/images/image-colton.jpg'
import imageIrene from '@/images/image-irene.jpg'
import imageAnne from '@/images/image-anne.jpg'
// import { ReactComponent as BgPatternTopDesktop } from '@/icons/bg-pattern-top-desktop.svg'
// import { ReactComponent as BgPatternBottomDesktop } from '@/icons/bg-pattern-bottom-desktop.svg'

function IndexPage() {
  return (
    <div className="grid grid-area-container min-h-screen">
      <Seo title="Frontend Mentor: Social proof section" />
      {/* <BgPatternTopDesktop className="grid-area place-self-start" /> */}
      {/* <BgPatternBottomDesktop className="grid-area place-self-end" /> */}
      <main className="grid-area max-w-xl w-full mx-auto py-20 px-6 xl:px-0">
        <section className="grid gap-10 md:gap-4 md:grid-cols-2 mb-12 md:mb-18">
          <div className="md:max-w-lg w-full text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              10,000+ of our users love our products.
            </h1>
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
            <Review avatar={imageColton} author="Colton Smith">
              We needed the same printed design as the one we had ordered a week prior. Not only did they find the
              original order, but we also received it in time. Excellent!
            </Review>
            <Review avatar={imageIrene} author="Irene Roberts">
              Customer service is always excellent and very quick turn around. Completely delighted with the simplicity
              of the purchase and the speed of delivery.
            </Review>
            <Review avatar={imageAnne} author="Anne Wallace">
              Put an order with this company and can only praise them for the very high standard. Will definitely use
              them again and recommend them to everyone!
            </Review>
          </Reviews>
        </section>
      </main>
    </div>
  )
}

export default IndexPage
