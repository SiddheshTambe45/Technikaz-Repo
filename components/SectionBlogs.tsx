import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type BlogCardStruct = {
  title: string
  description: string
  slug: string
  imageUrl: string
  blogid: string
}

const fetchDeals = async (type: string): Promise<BlogCardStruct[]> => {
  // Mock fetching blog data based on the deal type
  const mobileDeals: BlogCardStruct[] = [
    {
      title: 'Understanding Next.js basics for Mobile Developers',
      description: 'Learn Next.js basics for mobile apps.',
      slug: 'understanding-nextjs-mobile',
      imageUrl: '/assets/images/image15.png',
      blogid: 'aaw',
    },
    {
      title: 'React vs Vue for Mobile Apps',
      description: 'Compare React Native and Vue for mobile applications.',
      slug: 'react-vs-vue-mobile',
      imageUrl: '/assets/images/image15.png',
      blogid: 'aaw',
    },
  ]

  const techDeals: BlogCardStruct[] = [
    {
      title: 'Understanding Next.js for Web Development',
      description: 'Learn Next.js basics for building web apps.',
      slug: 'understanding-nextjs-web',
      imageUrl: '/assets/images/image15.png',
      blogid: 'aaw',
    },
    {
      title: 'React vs Vue for Web Development',
      description: 'Compare React and Vue for building web applications.',
      slug: 'react-vs-vue-web',
      imageUrl: '/assets/images/image15.png',
      blogid: 'aaw',
    },
  ]

  if (type === 'mobile') {
    return mobileDeals
  } else if (type === 'tech') {
    return techDeals
  }

  return []
}

type DealSectionProps = {
  type: 'tech' | 'mobile'
}

const SectionBlogs = async ({ type }: DealSectionProps) => {
  const deals = await fetchDeals(type)

  return (
    <section className={`${type}-Deals mt-10 p-3`}>
      <Link className="h5 generic-viridian" href={`/${type}`}>
        <span className="font-bold">{`${type.charAt(0).toUpperCase() + type.slice(1)} Deals`}</span>{' '}
        | See All
      </Link>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mt-5">
        {deals.slice(0, 4).map((deal) => (
          <Link
            key={deal.slug}
            className="flex flex-col items-start"
            href={`/${type}/${deal.slug}`}
          >
            <div className="relative w-full aspect-[16/9]">
              <Image src={deal.imageUrl} alt={deal.title} fill className="object-cover" />
            </div>
            <p className="mt-2 text-left text-lg font-semibold">{deal.title}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default SectionBlogs
