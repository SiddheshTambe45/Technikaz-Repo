// Page.tsx (Server-side rendering)
import React from 'react'
import { redirect } from 'next/navigation'
import Bloglist from './bloglist'
import CategoryHeroSection from './CategoryHeroSection'
import SubTypeHeading from './subTypeHeading.tsx'
import Link from 'next/link'

const staticSubTypes: Record<string, { subtype: string }[]> = {
  tech: [{ subtype: 'techdeals' }, { subtype: 'news' }],
  mobile: [{ subtype: 'smartphone' }, { subtype: 'accessory' }],
  stock: [{ subtype: 'stock' }],
  entertainment: [{ subtype: 'movie' }, { subtype: 'series' }, { subtype: 'comic' }],
  games: [{ subtype: 'PS5' }, { subtype: 'Xbox' }, { subtype: 'Nintendo' }, { subtype: 'PC' }],
}

const Page = async ({
  params,
  searchParams,
}: {
  params: { type: string }
  searchParams: { subtype?: string }
}) => {
  const type = params.type || ''
  const selectedSubType = searchParams.subtype || null

  if (!type) {
    redirect('/')
  }

  // Use the staticSubTypes object directly instead of fetching
  const subtypes = staticSubTypes[type.toLowerCase()] || []

  return (
    <div className="p-6 flex flex-col justify-start h-auto max-w-7xl mx-auto px-2 md:px-1 lg:px-0">
      <TypeHeading params={{ type }} />

      {/* Pass subtypes as prop to the SubTypeHeading component */}
      <SubTypeHeading subtypes={subtypes} />

      <CategoryHeroSection params={{ type, selectedSubType: selectedSubType || '' }} />

      {/* Display selected subtype if available */}

      <section>
        <div className="border-gray-400 border w-full h-[150px] mt-12">
          <h2>Advertisement here</h2>
        </div>
      </section>

      <section>
        <Bloglist params={{ type, selectedSubType: selectedSubType || '' }} />
      </section>
    </div>
  )
}

const TypeHeading = ({ params }: { params: { type: string } }) => {
  const type: string = params.type

  // Validate `type` parameter and redirect if invalid
  if (!type || type.trim() === '') {
    redirect('/')
  }

  return (
    <div className="typediv w-full h-[100px] custom-bg flex justify-center items-center m-0 p-0">
      <Link href={`#${type}`}>
        <h1 className="heading-font h2 font-bold">
          {type.charAt(0).toUpperCase() + type.slice(1)} {/* Corrected this line */}
        </h1>
      </Link>
    </div>
  )
}

export default Page
