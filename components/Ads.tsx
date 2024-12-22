import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Ads = () => {
  const leftImageTitle =
    'leftImageTitle leftImageTitle leftImageTitle leftImageTitle leftImageTitle'
  return (
    <>
      {/* <div className="border-black border w-full h-[300px] my-4"></div> */}

      {[0, 1, 2, 3, 4, 5].map((e) => (
        <Link
          key={e}
          className="flex-row items-start grid grid-cols-3 my-3 w-full py-2 border border-black border-b-2 border-x-0 border-t-0"
          href="/tech-deals/122"
        >
          <div className="relative w-full aspect-[16/9] col-span-1 h-full">
            <Image
              src="/assets/images/image15.png"
              alt="left image"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex justify-content-center items-center w-full col-span-2">
            <p className="mt-2 ml-4 text-left text-lg font-semibold">
              {leftImageTitle.length < 30
                ? leftImageTitle
                : leftImageTitle.substring(0, 70).concat('...')}
            </p>
          </div>
        </Link>
      ))}
      {/* <div className="border-black border w-full h-[300px] my-4"></div> */}
    </>
  )
}

export default Ads
