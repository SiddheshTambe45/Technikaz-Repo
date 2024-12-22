// 'use client' // This marks this component as a Client Component

// import React, { useState, useEffect } from 'react'
// import Image from 'next/image'
// import Link from 'next/link'

// type UpcomingCategory = 'Games' | 'Phone' | 'Movies' | 'More'

// type UpcomingItem = {
//   title: string
//   description: string
//   imageUrl: string
//   slug: string
//   category: UpcomingCategory
// }

// type RightSideComponentProps = {
//   initialCategory: UpcomingCategory
// }

// const fetchUpcomingItems = async (category: UpcomingCategory): Promise<UpcomingItem[]> => {
//   // Replace this with actual API calls for each category
//   const mockData: Record<UpcomingCategory, UpcomingItem[]> = {
//     Games: [
//       {
//         title: 'Game 1',
//         description: 'Description for Game 1',
//         imageUrl: '/assets/images/image15.png',
//         slug: 'game-1',
//         category: 'Games',
//       },
//       {
//         title: 'Game 2',
//         description: 'Description for Game 2',
//         imageUrl: '/assets/images/image15.png',
//         slug: 'game-2',
//         category: 'Games',
//       },
//     ],
//     Phone: [
//       {
//         title: 'Phone 1',
//         description: 'Description for Phone 1',
//         imageUrl: '/assets/images/image15.png',
//         slug: 'phone-1',
//         category: 'Phone',
//       },
//       {
//         title: 'Phone 2',
//         description: 'Description for Phone 2',
//         imageUrl: '/assets/images/image15.png',
//         slug: 'phone-2',
//         category: 'Phone',
//       },
//     ],
//     Movies: [
//       {
//         title: 'Movie 1',
//         description: 'Description for Movie 1',
//         imageUrl: '/assets/images/image15.png',
//         slug: 'movie-1',
//         category: 'Movies',
//       },
//       {
//         title: 'Movie 2',
//         description: 'Description for Movie 2',
//         imageUrl: '/assets/images/image15.png',
//         slug: 'movie-2',
//         category: 'Movies',
//       },
//     ],
//     More: [
//       {
//         title: 'Item 1',
//         description: 'Description for Item 1',
//         imageUrl: '/assets/images/image15.png',
//         slug: 'item-1',
//         category: 'More',
//       },
//       {
//         title: 'Item 2',
//         description: 'Description for Item 2',
//         imageUrl: '/assets/images/image15.png',
//         slug: 'item-2',
//         category: 'More',
//       },
//     ],
//   }

//   return mockData[category]
// }

// const RightSideComponent = ({ initialCategory }: RightSideComponentProps) => {
//   const [selectedCategory, setSelectedCategory] = useState<UpcomingCategory>(initialCategory)
//   const [upcomingItems, setUpcomingItems] = useState<UpcomingItem[]>([])

//   // Fetch upcoming items based on the selected category
//   useEffect(() => {
//     const getUpcomingItems = async () => {
//       const items = await fetchUpcomingItems(selectedCategory)
//       setUpcomingItems(items)
//     }

//     getUpcomingItems()
//   }, [selectedCategory])

//   return (
//     <section className="lg:col-span-1 px-3">
//       <div className="border-gray-400 border w-full h-[230px] my-4"></div>

//       <div>
//         <div>
//           <div className="p-0 m-0 border-b-4 b-generic-viridian">
//             <button className="bg-generic-viridian text-white px-6 py-2">Upcomings</button>
//           </div>
//           <div className="flex flex-row justify-around items-center my-4">
//             {['Games', 'Phone', 'Movies', 'More'].map((category) => (
//               <button
//                 type="button"
//                 key={category}
//                 className="generic-viridian font-bold"
//                 onClick={() => setSelectedCategory(category as UpcomingCategory)} // Update category on click
//               >
//                 <span
//                   className={`${category === selectedCategory ? 'border-b-4 b-generic-viridian' : ''}`}
//                 >
//                   {category}
//                 </span>
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Display upcoming items based on selected category */}
//         <div className="border-2 b-generic-viridian p-2">
//           {upcomingItems.map((item, index) => (
//             <div
//               key={index}
//               className="flex-row items-start grid grid-cols-3 my-3 w-full py-2 border border-b-2 border-x-0 border-t-0 border-black"
//             >
//               <div className="relative w-full aspect-[16/9] col-span-1">
//                 <Image src={item.imageUrl} alt={item.title} fill className="object-cover" />
//               </div>
//               <div className="flex justify-content-center items-center w-full col-span-2">
//                 <p className="mt-2 ml-4 text-left text-lg font-semibold">{item.title}</p>
//                 <p className="ml-4 text-left text-sm">{item.description}</p>
//                 {/* Link to the item page using the slug */}
//                 <Link
//                   href={`/${item.category.toLowerCase()}/${item.slug}`}
//                   className="text-blue-500 underline"
//                 >
//                   Read More
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       <div className="border-gray-400 border w-full h-[230px] my-4"></div>
//     </section>
//   )
// }

// export default RightSideComponent

'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'

// Define categories as an enum or string literal union
export type UpcomingCategory = 'Games' | 'Phone' | 'Movies' | 'More'

type UpcomingItem = {
  title: string
  description: string
  imageUrl: string
  slug: string
  category: UpcomingCategory
}

type RightSideComponentProps = {
  initialCategory: UpcomingCategory | string // This can be a string or an enum value
}

const fetchUpcomingItems = async (category: UpcomingCategory): Promise<UpcomingItem[]> => {
  // Replace this with actual API calls for each category
  const mockData: Record<UpcomingCategory, UpcomingItem[]> = {
    Games: [
      {
        title: 'Game 1',
        description: 'Description for Game 1',
        imageUrl: '/assets/images/image15.png',
        slug: 'game-1',
        category: 'Games',
      },
      {
        title: 'Game 2',
        description: 'Description for Game 2',
        imageUrl: '/assets/images/image15.png',
        slug: 'game-2',
        category: 'Games',
      },
    ],
    Phone: [
      {
        title: 'Phone 1',
        description: 'Description for Phone 1',
        imageUrl: '/assets/images/image15.png',
        slug: 'phone-1',
        category: 'Phone',
      },
      {
        title: 'Phone 2',
        description: 'Description for Phone 2',
        imageUrl: '/assets/images/image15.png',
        slug: 'phone-2',
        category: 'Phone',
      },
    ],
    Movies: [
      {
        title: 'Movie 1',
        description: 'Description for Movie 1',
        imageUrl: '/assets/images/image15.png',
        slug: 'movie-1',
        category: 'Movies',
      },
      {
        title: 'Movie 2',
        description: 'Description for Movie 2',
        imageUrl: '/assets/images/image15.png',
        slug: 'movie-2',
        category: 'Movies',
      },
    ],
    More: [
      {
        title: 'Item 1',
        description: 'Description for Item 1',
        imageUrl: '/assets/images/image15.png',
        slug: 'item-1',
        category: 'More',
      },
      {
        title: 'Item 2',
        description: 'Description for Item 2',
        imageUrl: '/assets/images/image15.png',
        slug: 'item-2',
        category: 'More',
      },
    ],
  }

  return mockData[category] || [] // Return the mock data for the category, or an empty array
}

const Upcomings = ({ initialCategory }: RightSideComponentProps) => {
  const [selectedCategory, setSelectedCategory] = useState<UpcomingCategory>(
    initialCategory as UpcomingCategory,
  ) // Initialize with initialCategory
  const [upcomingItems, setUpcomingItems] = useState<UpcomingItem[]>([])

  // Fetch upcoming items based on the selected category
  useEffect(() => {
    const getUpcomingItems = async () => {
      const items = await fetchUpcomingItems(selectedCategory)
      setUpcomingItems(items)
    }

    getUpcomingItems()
  }, [selectedCategory])

  return (
    <section className="lg:col-span-1 px-3">
      <div className="border-gray-400 border w-full h-[230px] my-4"></div>

      <div>
        <div>
          <div className="p-0 m-0 border-b-4 b-generic-viridian">
            <button className="bg-generic-viridian text-white px-6 py-2">Upcomings</button>
          </div>
          <div className="flex flex-row justify-around items-center my-4">
            {['Games', 'Phone', 'Movies', 'More'].map((category) => (
              <button
                type="button"
                key={category}
                className="generic-viridian font-bold"
                onClick={() => setSelectedCategory(category as UpcomingCategory)} // Update category on click
              >
                <span
                  className={`${category === selectedCategory ? 'border-b-4 b-generic-viridian' : ''}`}
                >
                  {category}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Display upcoming items based on selected category */}
        <div className="border-2 b-generic-viridian p-2">
          {upcomingItems.map((item, index) => (
            <Link
              key={index}
              className="flex-row items-start grid grid-cols-3 my-3 w-full py-2 border border-black border-b-2 border-x-0 border-t-0"
              href={`/${item.category.toLowerCase()}/${item.slug}`}
            >
              <div className="relative w-full aspect-[16/9] col-span-1">
                <Image src={item.imageUrl} alt={item.title} fill className="object-cover" />
              </div>
              <div className="flex flex-col justify-content-center items-center w-full col-span-2">
                <p className="mt-2 ml-4 text-left text-lg font-semibold">{item.title}</p>
                <p className="ml-4 text-left text-sm">
                  {item.description.length < 30
                    ? item.description
                    : item.description.substring(0, 70).concat('...')}
                </p>
                {/* Link to the item page using the slug */}
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="border-gray-400 border w-full h-[230px] my-4"></div>
    </section>
  )
}

export default Upcomings
