import Image from 'next/image'
import ImagePaths from '@/public/assets/imagePaths.js'
import Nav from '@app/components/BottomNav.jsx'
import BagIcon from '@app/components/BagIcon'

const page = () => {
  return (
    <section className='mx-6 py-6'>
      <div className='flex justify-between border-b-[1px] border-solid border-b-[#EFF0F2] py-6 w-full'>
        <h1 className='title_text'>Receipts</h1>
        <BagIcon />
      </div>

      <div className='bg-[#EFF0F2] rounded-[16px] p-4 flex flex-col items-start justify-start gap-2 mt-4 cursor-pointer w-full'>
        <div className='flex items-center gap-2'>
          <Image
          src={ImagePaths.semo}
          width={75}
          height={56}
          />
          <div className='flex_col_start'>
            <h2 className='sub_title_text'>Lorem ipsum</h2>
            <p className='tiny_text'>Lorem ipsum</p>
          </div>

        </div>
        <div className='flex items-center justify-between w-full'>
          <button className='tiny_text'>Lorem ipsum dolor amet</button>
          
        </div>
      </div>
      <Nav />
    </section>
  )
}

export default page