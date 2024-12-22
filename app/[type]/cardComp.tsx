import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type BlogCardStruct = {
  title: string
  description: string
  slug: string
  imageUrl: string // Add image URL property for dynamic image loading
}

type BlogCardProps = {
  blogs: BlogCardStruct[]
}

export default function BlogCard({ blogs }: BlogCardProps) {
  if (!blogs || blogs.length === 0) {
    return <p className="text-gray-600">No blogs available.</p>
  }

  return (
    <>
      {/*  <div className="blog-cards-container"> */}
      {blogs.map((blog, index) => (
        <Link href={`/blogs/${blog.slug}`} className="items-center  hover:bg-gray-100" key={index}>
          <div
            key={blog.slug}
            className="blogcard flex-row items-start grid grid-cols-3 my-3 w-full py-2 border border-b-2 border-x-0 border-t-0 border-black"
          >
            {/* Using next/image for better image handling */}
            <div className="relative w-full aspect-[16/9] col-span-1 h-full">
              <Image
                className="object-cover "
                src={blog.imageUrl} // Dynamic image URL
                alt={blog.title}  
                fill
                // width={200} // Set width for static or dynamic image handling
                // height={300} // Set height for static or dynamic image handling
              />
            </div>
            <div className="flex justify-content-center items-center w-full col-span-2">
              <p className="mt-2 ml-4 text-left text-lg font-semibold">{blog.title}</p>
            </div>
          </div>
        </Link>
      ))}
      {/* </div> */}
    </>
  )
}
