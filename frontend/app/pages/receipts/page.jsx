import Image from 'next/image'
import ImagePaths from '@/public/assets/imagePaths.js'
import Nav from '@app/components/BottomNav.jsx'

const page = () => {
  return (
    <section className='mx-6 py-6'>
      <div className='flex justify-between border-b-[1px] border-solid border-b-[#EFF0F2] py-6 w-full'>
        <h1 className='title_text'>Receipts</h1>
        <div className='relative'>
          <Image
          src={ImagePaths.bag}
          width={24}
          height={24}
          />
          {/* Cart Count */}
          <div className='tiny_text bg-[#6C7175] rounded-full border-[1px] border-solid border-[#fff] flex items-center justify-center p-[1px] w-5 h-5 absolute top-[0px] right-[-5.5px]' style={{color:'#fff'}}>0</div>
        </div>
        
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