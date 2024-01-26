import Image from 'next/image'
import ImagePaths from '@/public/assets/imagePaths.js'

const success = () => {
  return (
    <section className='mx-6 py-8 flex flex-col items-start justify-between relative h-[100vh]'>
      <div className='flex_col_start w-full'>
      <Image
      src={ImagePaths.success}
      width={327}
      height={205}
      className='w-full'
      />
        
      </div>

      <button className='primary_btn'>Continue to homepage</button>
    </section>
  )
}

export default success;