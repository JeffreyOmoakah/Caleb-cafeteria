import imagePaths from '@public/assets/imagePaths'
import Image from 'next/image'

const page = () => {
  return (
    <section className='flex_col_start mx-6'>
      <div className='flex items-center justify-start gap-[66px] py-6'>
        <Image 
        src={imagePaths.arrowLeft}
        width={24}
        height={24}
        />
        <h2 className='subtitle_text'>Transaction Receipt</h2>
      </div>
      <div className='flex_col_start p-4 mt-[6px] rounded-[12px] bg-[#EFF0F2'>
        <h1 className='title_text w-full'>Order #AB123</h1>
        <div className='flex_col_start gap-1'>
          <p className='tin'>You sent:</p>
          <h5>&#8358;1,000</h5>
        </div>
      </div>
    </section>
  )
}

export default page