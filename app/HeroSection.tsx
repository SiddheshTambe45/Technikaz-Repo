import Link from 'next/link'
import Image from 'next/image'
// import axiosInstance from '@/lib/HelperFns/axiosInstance'

type BlogCardStruct = {
  title: string
  description: string
  slug: string
  imageUrl: string
  category: string
}

const fetchBlogs = async (): Promise<BlogCardStruct[]> => {
  // Mock fetching blog data (replace with actual API call in production)
  const allBlogs: BlogCardStruct[] = [
    {
      title: 'Understanding Next.js sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd d',
      description: 'Learn Next.js basics d ',
      slug: 'understanding-nextjsd understanding-nextjsd understanding-nextjsd understanding-nextjsd understanding-nextjsd understanding-nextjsd overflow-hidden overflow-hidden overflow-hidden overflow-hidden overflow-hidden overflow-hidden overflow-hidden overflow-hidden overflow-hidden overflow-hiddenoverflow-hiddenoverflow-hiddenoverflow-hidden overflow-hidden overflow-hidden overflow-hidden overflow-hidden overflow-hidden overflow-hidden overflow-hidden',
      imageUrl: '/assets/images/image15.png',
      category: 'games',
    },
    {
      title: 'Understanding Next.js sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ',
      description: 'Learn Next.js basics',
      slug: 'understanding-nextjs',
      imageUrl: '/assets/images/image15.png',
      category: 'games',
    },
    {
      title: 'React vs Vue sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ',
      description: 'Compare React and Vue.js',
      slug: 'react-vs-vue2',
      imageUrl: '/assets/images/image15.png',
      category: 'games',
    },
    {
      title: 'Advanced TypeScript sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ',
      description: 'Deep dive into TypeScript',
      slug: 'advanced-typescript2',
      imageUrl: '/assets/images/image15.png',
      category: 'games',
    },
    {
      title: 'React vs Vue sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ',
      description: 'Compare React and Vue.js',
      slug: 'react-vs-vue',
      imageUrl: '/assets/images/image15.png',
      category: 'games',
    },
    {
      title: 'Advanced TypeScript sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ',
      description: 'Deep dive into TypeScript',
      slug: 'advanced-typescript',
      imageUrl: '/assets/images/image15.png',
      category: 'games',
    },
    // { title: 'Advanced TypeScript sdfdfdfdmfd df df dfd fd fd fd fd fdf df df d fd fd fd fd ', description: 'Deep dive into TypeScript', slug: 'advanced-typescriptv', imageUrl: "/assets/images/image15.png" },
  ]

  // Filter blogs based on the `type` parameter if provided
  // if (type) {
  //     return allBlogs.filter((blog) => blog.title.toLowerCase().includes(type.toLowerCase()));
  // }

  return allBlogs
}

const HomepageHeroSection = async () => {
  // const type = params.type
  const blogs = await fetchBlogs()

  const firstTwoBlogs = blogs.slice(0, 2)
  const remainingBlogs = blogs.slice(2)

  return (
    <div className="hero-section featured-blogs w-full p-3">
      {/* First two cards */}
      <div className="featured-blogs-upper grid grid-cols-1 lg:grid-cols-3 gap-4 h-auto">
        {/* First card with 16:9 aspect ratio */}
        <Link
          href={`/${firstTwoBlogs[0].category}/${firstTwoBlogs[0]?.slug}`}
          className="p-0 m-0 col-span-2 flex flex-col items-start"
          style={{ flex: '0 0 70%' }}
        >
          <div className="relative h-[400px] w-full">
            <div className="relative w-full h-full aspect-[16/9]">
              <Image
                src="/assets/images/image15.png"
                alt={firstTwoBlogs[0]?.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </div>
          </div>
          <p className="mt-2 text-left text-lg font-semibold leading-tight">
            {firstTwoBlogs[0]?.slug}
          </p>
          {/* <p className="text-gray-600">{firstTwoBlogs[0]?.description}</p> */}
        </Link>

        {/* Second card with 1:1 aspect ratio */}
        <div className="col-span-1 flex flex-col items-start">
          <Link
            className="relative w-full h-[400px]"
            href={`/${firstTwoBlogs[1].category}/${firstTwoBlogs[1]?.slug}`}
          >
            <Image
              src="/assets/images/image16.png"
              alt={firstTwoBlogs[1]?.title}
              fill
              className="object-cover object-right"
            />
          </Link>
          <p className="mt-2 text-left text-lg font-semibold">{firstTwoBlogs[1]?.slug}</p>
        </div>
      </div>

      {/* Remaining blogs */}
      <div className="featured-blogs-lower grid grid-cols-1 lg:grid-cols-4 gap-4 mt-10">
        {remainingBlogs.map((blog) => (
          <Link
            key={blog.slug}
            href={`/${blog.category}/${blog.slug}`}
            className="flex flex-col items-start p-0 m-0"
          >
            <div className="relative w-full aspect-[16/9]">
              <Image
                src={blog.imageUrl}
                alt={blog.title}
                layout="fill"
                objectFit="cover"
                className="object-cover"
              />
            </div>
            {/* <div className="p-4"> */}
            <p className="mt-2 text-left text-lg font-semibold">{blog.slug}</p>
            {/* <p className="text-gray-600">{blog.description}</p> */}
            {/* </div> */}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default HomepageHeroSection
