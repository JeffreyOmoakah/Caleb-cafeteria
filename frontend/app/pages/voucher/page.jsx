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
      <div className='flex_col_start p-4 mt-[6px] gap-6 rounded-[12px] bg-[#EFF0F2] w-full'>
        <h1 className='title_text w-full'>Order #AB123</h1>
        <div className='flex_col_start gap-1'>
          <p className='tiny_text'>You sent:</p>
          <h5 className='small_text' style={{fontWeight:'500'}}>&#8358;1,000</h5>
        </div>
        <div className='flex_col_start gap-1'>
          <p className='tiny_text'>Recipient:</p>
          <h5 className='small_text' style={{fontWeight:'500'}}>Caleb Caf 1</h5>
        </div>
        <div className='flex_col_start gap-1'>
          <p className='tiny_text'>Date:</p>
          <h5 className='small_text' style={{fontWeight:'500'}}>03-11-2023 9:40am</h5>
        </div>
        <div className='flex_col_start gap-1'>
          <p className='tiny_text'>Transaction Status:</p>
          <div className='flex items-center gap-2 rounded-[32px] bg-[#fff] px-2 py-1'>
            <div className='w-2 h-2 rounded-full bg-[#1D2B36] outline-none'></div>
            <h5 className='small_text' style={{fontWeight:'500'}}>Successful</h5>
          </div>
        </div>
      </div>
      <div className='flex_col_start flex flex-col gap-2 mt-[180px] w-full'>
        <button className='sec_btn medium_text'>Something wrong? Report transaction</button>
        <button className='primary_btn medium_text'>Share Receipt</button>
      </div>
    </section>
  )
}

export default page;