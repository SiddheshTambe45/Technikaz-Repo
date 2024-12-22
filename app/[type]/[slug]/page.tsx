import React from 'react'
import { redirect } from 'next/navigation'
import SingleBlogPage from '@/components/SingleBlogPage'
// import Ads from '@/components/Ads'
import Upcomings from '@/components/Upcomings'

const page = async ({ params }: { params: { slug: string } }) => {
  const resolvedParams = await params // Await the params object
  const slug = resolvedParams.slug || '' // Access `type` safely
  if (!slug) {
    redirect('/')
  }

  return (
    <div className="flex flex-col justify-start h-auto max-w-7xl mx-auto px-2 md:px-1 lg:px-0">
      <section className="lg:grid lg:grid-cols-3">
        <section className="lg:col-span-2 px-3">
          {[0, 1, 2, 3].map((e) => (
            <div className="p-0 m-0" key={e}>
              <SingleBlogPage />
            </div>
          ))}
        </section>
        <section className="lg:col-span-1 px-3">
          {/* {[0, 1, 2, 3].map((e) => (
            <div key={e} className="m-0 p-0">
              <Ads />
            </div>
          ))} */}

          <Upcomings initialCategory="Games" />
        </section>
      </section>
    </div>
  )
}

export default page
