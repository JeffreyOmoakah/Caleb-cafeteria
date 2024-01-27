import Image from 'next/image'
import ImagePaths from '@/public/assets/imagePaths.js'

const success = () => {
  return (
    <section className='mx-6 py-8 flex flex-col items-start justify-between relative h-[100vh]'>
      <div className='flex_col_start w-full mt-[120px]'>
        <Image
        src={ImagePaths.success}
        width={327}
        height={205}
        className='w-full'
        />
        <h2 className='big_text mt-10'>Password reset successful!</h2>
        <p className='small_text' style={{fontSize:'16px'}}>You've successfully rest your password</p>
        
      </div>

      <button className='primary_btn'>Continue to homepage</button>
    </section>
  )
}

export default success;