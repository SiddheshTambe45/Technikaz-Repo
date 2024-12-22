// 'use client' // This marks this component as a Client Component

// import React, { useState, useEffect } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'

// type BlogCard = {
//   title: string
//   description: string
//   slug: string
//   imageUrl: string
// }

// type LeftSectionProps = {
//   initialBlogs: BlogCard[] // You can pass initial blogs from the server-side or mock them
// }

// // Define the mock data type with popular and recent keys
// const mockData: Record<'popular' | 'recent', BlogCard[]> = {
//   popular: [
//     {
//       title: 'Popular Blog 1',
//       description: 'Description for Popular Blog 1',
//       slug: 'popular-blog-1',
//       imageUrl: '/assets/images/image15.png',
//     },
//     {
//       title: 'Popular Blog 2',
//       description: 'Description for Popular Blog 2',
//       slug: 'popular-blog-2',
//       imageUrl: '/assets/images/image15.png',
//     },
//   ],
//   recent: [
//     {
//       title: 'Recent Blog 1',
//       description: 'Description for Recent Blog 1',
//       slug: 'recent-blog-1',
//       imageUrl: '/assets/images/image15.png',
//     },
//     {
//       title: 'Recent Blog 2',
//       description: 'Description for Recent Blog 2',
//       slug: 'recent-blog-2',
//       imageUrl: '/assets/images/image15.png',
//     },
//   ],
// }

// const fetchBlogs = async (type: 'popular' | 'recent'): Promise<BlogCard[]> => {
//   return mockData[type] // Now TypeScript knows that `type` can only be 'popular' or 'recent'
// }

// const LeftSection = ({ initialBlogs }: LeftSectionProps) => {
//   const [selectedType, setSelectedType] = useState<'popular' | 'recent'>('popular') // Default to 'popular'
//   const [blogs, setBlogs] = useState<BlogCard[]>(initialBlogs) // Initial blogs passed as prop

//   useEffect(() => {
//     const getBlogs = async () => {
//       const fetchedBlogs = await fetchBlogs(selectedType) // Fetch blogs based on selected type
//       setBlogs(fetchedBlogs) // Set fetched blogs in state
//     }

//     getBlogs() // Call the fetch function
//   }, [selectedType]) // Re-fetch when `selectedType` changes

//   return (
//     <>
//       <div className="border border-y-2 border-x-0 border-black flex flex-row gap-8 my-4 py-2">
//         <button
//           type="button"
//           className="h6 generic-viridian font-bold"
//           onClick={() => setSelectedType('popular')} // Set to 'popular' when clicked
//         >
//           Popular
//         </button>
//         <button
//           type="button"
//           className="h6 generic-viridian font-bold"
//           onClick={() => setSelectedType('recent')} // Set to 'recent' when clicked
//         >
//           Recent
//         </button>
//       </div>

//       {/* Display blogs */}
//       {blogs.map((blog) => (
//         <Link
//           key={blog.slug}
//           className="flex-row items-start grid grid-cols-3 my-3 w-full py-2 border border-b-2 border-x-0 border-t-0 border-black"
//           href={`/blogs/${blog.slug}`} // Dynamic link based on blog slug
//         >
//           <div className="relative w-full aspect-[16/9] col-span-1">
//             <Image src={blog.imageUrl} alt={blog.title} fill className="object-cover" />
//           </div>
//           <div className="flex justify-content-center items-center w-full col-span-2">
//             <p className="mt-2 ml-4 text-left text-lg font-semibold">{blog.title}</p>
//           </div>
//         </Link>
//       ))}
//     </>
//   )
// }

// export default LeftSection

// *******---------**********

// 'use client' // This marks this component as a Client Component

// import React, { useState, useEffect } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'

// // Enum for the type of blog list (Popular or Recent)
// export enum BlogType {
//   Popular = 'popular',
//   Recent = 'recent',
// }

// // Define the BlogCard type
// type BlogCard = {
//   title: string
//   description: string
//   slug: string
//   imageUrl: string
// }

// // Define the LeftSectionProps to accept only blogType
// type LeftSectionProps = {
//   blogType: BlogType // The type of blogs (popular or recent)
// }

// // Refactor fetchBlogs function to return the appropriate blogs based on type
// const fetchBlogs = async (type: BlogType): Promise<BlogCard[]> => {
//   const mockData: Record<BlogType, BlogCard[]> = {
//     [BlogType.Popular]: [
//       {
//         title: 'Popular Blog 1',
//         description: 'Description for Popular Blog 1',
//         slug: 'popular-blog-1',
//         imageUrl: '/assets/images/image15.png',
//       },
//       {
//         title: 'Popular Blog 2',
//         description: 'Description for Popular Blog 2',
//         slug: 'popular-blog-2',
//         imageUrl: '/assets/images/image15.png',
//       },
//     ],
//     [BlogType.Recent]: [
//       {
//         title: 'Recent Blog 1',
//         description: 'Description for Recent Blog 1',
//         slug: 'recent-blog-1',
//         imageUrl: '/assets/images/image15.png',
//       },
//       {
//         title: 'Recent Blog 2',
//         description: 'Description for Recent Blog 2',
//         slug: 'recent-blog-2',
//         imageUrl: '/assets/images/image15.png',
//       },
//     ],
//   }

//   return mockData[type] // Return the blogs based on the type
// }

// const LeftSection = ({ blogType }: LeftSectionProps) => {
//   const [selectedType, setSelectedType] = useState<BlogType>(blogType) // Default to passed blogType (popular or recent)
//   const [blogs, setBlogs] = useState<BlogCard[]>([]) // Initialize with an empty array

//   useEffect(() => {
//     const getBlogs = async () => {
//       const fetchedBlogs = await fetchBlogs(selectedType) // Fetch blogs based on selected type
//       setBlogs(fetchedBlogs) // Set fetched blogs in state
//     }

//     getBlogs() // Call the fetch function
//   }, [selectedType]) // Re-fetch when `selectedType` changes

//   return (
//     <>
//       <div className="border border-y-2 border-x-0 border-black flex flex-row gap-8 my-4 py-2">
//         <button
//           type="button"
//           className="h6 generic-viridian font-bold"
//           onClick={() => setSelectedType(BlogType.Popular)} // Set to 'popular' when clicked
//         >
//           Popular
//         </button>
//         <button
//           type="button"
//           className="h6 generic-viridian font-bold"
//           onClick={() => setSelectedType(BlogType.Recent)} // Set to 'recent' when clicked
//         >
//           Recent
//         </button>
//       </div>

//       {/* Display blogs */}
//       {blogs.map((blog) => (
//         <Link
//           key={blog.slug}
//           className="flex-row items-start grid grid-cols-3 my-3 w-full py-2 border border-b-2 border-x-0 border-t-0 border-black"
//           href={`/blogs/${blog.slug}`} // Dynamic link based on blog slug
//         >
//           <div className="relative w-full aspect-[16/9] col-span-1">
//             <Image src={blog.imageUrl} alt={blog.title} fill className="object-cover" />
//           </div>
//           <div className="flex justify-content-center items-center w-full col-span-2">
//             <p className="mt-2 ml-4 text-left text-lg font-semibold">{blog.title}</p>
//           </div>
//         </Link>
//       ))}
//     </>
//   )
// }

// export default LeftSection

'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// Enum for the type of blog list (Popular or Recent)
export enum BlogType {
  Popular = 'popular',
  Recent = 'recent',
}

// Define the BlogCard type
type BlogCard = {
  title: string
  description: string
  slug: string
  imageUrl: string
  category: string
}

// Define the LeftSectionProps to accept only blogType
type LeftSectionProps = {
  blogType: BlogType // The type of blogs (popular or recent)
}

// Refactor fetchBlogs function to return the appropriate blogs based on type
const fetchBlogs = async (type: BlogType): Promise<BlogCard[]> => {
  const mockData: Record<BlogType, BlogCard[]> = {
    [BlogType.Popular]: [
      {
        title: 'Popular Blog 1',
        description: 'Description for Popular Blog 1',
        slug: 'popular-blog-1',
        imageUrl: '/assets/images/image15.png',
        category: 'Games',
      },
      {
        title: 'Popular Blog 2',
        description: 'Description for Popular Blog 2',
        slug: 'popular-blog-2',
        imageUrl: '/assets/images/image15.png',
        category: 'Games',
      },
      {
        title: 'Popular Blog 3',
        description: 'Description for Popular Blog 2',
        slug: 'popular-blog-3',
        imageUrl: '/assets/images/image15.png',
        category: 'Games',
      },
      {
        title: 'Popular Blog 4',
        description: 'Description for Popular Blog 2',
        slug: 'popular-blog-4',
        imageUrl: '/assets/images/image15.png',
        category: 'Games',
      },
    ],
    [BlogType.Recent]: [
      {
        title: 'Recent Blog 1',
        description: 'Description for Recent Blog 1',
        slug: 'recent-blog-1',
        imageUrl: '/assets/images/image15.png',
        category: 'Games',
      },
      {
        title: 'Recent Blog 2',
        description: 'Description for Recent Blog 2',
        slug: 'recent-blog-2',
        imageUrl: '/assets/images/image15.png',
        category: 'Games',
      },
    ],
  }

  // console.log(`Fetching blogs of type: ${type}`) // Log to verify the function is called correctly
  return mockData[type] || [] // Return the blogs based on the type or an empty array if type is invalid
}

const LeftSection = ({ blogType }: LeftSectionProps) => {
  const [selectedType, setSelectedType] = useState<BlogType>(blogType || BlogType.Popular) // Default to passed blogType (popular or recent)
  const [blogs, setBlogs] = useState<BlogCard[]>([]) // Initialize with an empty array

  useEffect(() => {
    // console.log('Selected Type in useEffect:', selectedType) // Log selectedType to confirm it's being set
    const getBlogs = async () => {
      // console.log('Fetching blogs...') // Log when fetch operation starts
      const fetchedBlogs = await fetchBlogs(selectedType) // Fetch blogs based on selected type
      setBlogs(fetchedBlogs) // Set fetched blogs in state
      // console.log(fetchedBlogs) // Log the fetched blogs
    }

    getBlogs()
  }, [selectedType]) // Re-fetch when selectedType changes

  // py-2 for main div

  return (
    <>
      <div className="border border-y-2 border-x-0 border-black flex flex-row gap-8 my-4 ">
        <button
          type="button"
          className={`h6 generic-viridian font-bold py-2  ${selectedType === BlogType.Popular ? ' border-b-4 b-generic-viridian' : ''}`}
          onClick={() => setSelectedType(BlogType.Popular)} // Set to 'popular' when clicked
        >
          Popular
        </button>
        <button
          type="button"
          className={`h6 generic-viridian font-bold py-2 ${selectedType === BlogType.Recent ? ' border-b-4 b-generic-viridian' : ''}`}
          onClick={() => setSelectedType(BlogType.Recent)} // Set to 'recent' when clicked
        >
          Recent
        </button>
      </div>

      {/* Display blogs, check for empty or undefined blogs */}
      {blogs && blogs.length > 0 ? (
        blogs.map((blog) => (
          <Link
            key={blog.slug}
            className="flex-row items-start grid grid-cols-3 my-3 w-full py-2 border border-b-2 border-x-0 border-t-0 border-black"
            href={`/${blog.category}/${blog.slug}`} // Dynamic link based on blog slug
          >
            <div className="relative w-full aspect-[16/9] col-span-1">
              <Image src={blog.imageUrl} alt={blog.title} fill className="object-cover" />
            </div>
            <div className="flex justify-content-center items-center w-full col-span-2">
              <p className="mt-2 ml-4 text-left text-lg font-semibold">{blog.title}</p>
            </div>
          </Link>
        ))
      ) : (
        <p>No blogs available</p> // Show this message if no blogs are available
      )}

      {
        // load more button
      }
    </>
  )
}

export default LeftSection
