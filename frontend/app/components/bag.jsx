'use client'

import Image from 'next/image'
import ImagePaths from '@/public/assets/imagePaths.js'

const bag = () => {
  return (
    <div className='flex flex-col items-center justify-center gap-3 py-7 px-[90px] bg-[#F9F9F9] w-full'>
        <Image
        src={ImagePaths.emptyBag}
        width={48}
        height={48}
        />
        <p className='sub_title_text'>No item in your bag</p>
      </div>
      
  )
}

export default bag