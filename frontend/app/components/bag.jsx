'use client'

import Image from 'next/image'
import ImagePaths from '@/public/assets/imagePaths.js'

const bag = () => {
  return (
    <div className='w-full'>

      <div className='flex flex-col items-center justify-center gap-3 py-7 px-[90px] bg-[#F9F9F9] w-full'>
          <Image
          src={ImagePaths.emptyBag}
          width={48}
          height={48}
          />
          <p className='sub_title_text'>No item in your bag</p>
      </div>
  
      {/* If bag has items */}
      <div className='bg-[#EFF0F2] rounded-[16px] p-4 flex flex-col items-start justify-start gap-2 w-full'>
        <div className='flex items-center gap-2'>
          <Image
          src={ImagePaths.semo}
          width={75}
          height={56}
          />
          <div className='flex_col_start'>
            <h2 className='sub_title_text'>Semo</h2>
            <p className='tiny_text'>&#8358;100</p>
          </div>

        </div>
        <div className='flex items-center justify-between w-full'>
          <button className='tiny_text'>Remove</button>
          
          <div className='flex items-center gap-[17.5px]'>
            <Image 
            src={ImagePaths.minus}
            width={24}
            height={24}
            className='cursor-pointer'
            />
            <h2 className='sub_title_text'>0</h2>
            <Image 
            src={ImagePaths.add}
            width={24}
            height={24}
            className='cursor-pointer'
            />
          </div>
        </div>
      </div>
    </div>

  )
}

export default bag;