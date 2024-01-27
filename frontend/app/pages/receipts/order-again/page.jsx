import Image from 'next/image'
import ImagePaths from '@/public/assets/imagePaths.js'
import Nav from '@app/components/BottomNav.jsx'

const page = () => {
  return (
    <section className='mx-6 py-6 flex_col_start'>
      <div className='flex items-start justify-between w-[60%]'>
        <Image
        src={ImagePaths.arrowLeft}
        width={24}
        height={24}
        />
        <h2 className='sub_title_text'>Old Cafe</h2>
      </div>
      <h1 className='title_text mt-6'>Order #AB123</h1>
      {/* Main content */}
      <div className='bg-[#EFF0F2] flex_col_start rounded-[12px] gap-8 p-4 mt-4 w-full'>
        <div className='flex align-items justify-between w-full py-6 border-b-solid border-b-[#6C7175] border-b-[1px]'>
          <h3 className='medium_text'>1x Jollof Rice</h3>
          <p className='medium_text'>&#8358;500</p>
        </div>
        <div className='flex items-start justify-between w-full'>
          <h3 className='sub_title_text'>Total</h3>
          <p className='sub_title_text'>&#8358;500</p>
        </div>
      </div>
    </section>
  )
}

export default page