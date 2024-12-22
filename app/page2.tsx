// import Image from 'next/image'
// import React from 'react'

// const page = () => {
//   return (
//     <div className="flex items-center justify-center h-screen max-w-7xl mx-auto">
//       <section className="featured-blogs">
//         <section className="featured-blogs-upper grid lg:grid-3">
//           <div className="h-[500px] lg:col-span-2">
//             <div className="aspect-[16/9]">
//               <Image src="/assets/images/image15.png" alt="first image" fill />
//             </div>
//             <p>Hi this is the title</p>
//           </div>

//           <div className="h-[500px] lg:col-span-2">
//             <div className="">
//               <Image
//                 src="/assets/images/image15.png"
//                 alt="first image"
//                 height={500}
//                 width={cal - size(auto)}
//               />
//             </div>
//             <p>Hi this is the title</p>
//           </div>
//         </section>
//       </section>
//     </div>
//   )
// }

// export default page

// import Image from 'next/image'
// import React from 'react'

// const Page = () => {
//   const title =
//     'My Visit To The Nintendo Museum Made My Life Flash Before My Eyes We spent two days at the shrine to all things Nintendo and reconnected'

//   return (
//     <div className="flex justify-center h-screen max-w-7xl mx-auto">
//       <section className="featured-blogs w-full">
//         <div className="grid grid-cols-3 gap-4">
//           {/* Left Div */}
//           <div className="relative col-span-2 aspect-[16/9]">
//             <Image
//               src="/assets/images/image15.png"
//               alt="left image"
//               fill
//               className="object-cover"
//             />
//           </div>

//           {/* Right Div */}
//           <div className="relative col-span-1 overflow-hidden">
//             <Image
//               src="/assets/images/image16.png"
//               alt="right image"
//               fill
//               className="object-cover object-right"
//             />
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// export default Page

import Ads from '@/components/Ads'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import HomepageHeroSection from './HeroSection'
import Bloglist from './[type]/bloglist'
import SectionBlogs from '@/components/SectionBlogs'
const Page = () => {
  const leftImageTitle = 'Nintendo Museum – A Journey Through Time Nintendo Muse'
  const test =
    'Nintendo Museum – A Journey Through Time Nintendo Muse A Journey Through Time Nintendo Muse'
  const rightImageTitle = 'Exploring the Legacy of Nintendo'

  {
    //h-screen -> h-auto  for future reference
  }

  return (
    <div className="flex flex-col justify-start h-auto max-w-7xl mx-auto px-2 md:px-1 lg:px-0">
      <HomepageHeroSection />

      {
        // ads
      }

      <SectionBlogs type="tech" />

      <SectionBlogs type="mobile" />

      <Bloglist params={{}} />
      {
        //ads
      }
    </div>
  )
}

export default Page
