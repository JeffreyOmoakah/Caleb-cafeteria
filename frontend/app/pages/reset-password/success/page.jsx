import Image from 'next/image'
import ImagePaths from '@/public/assets/imagePaths.js'
import Link from 'next/link'
const success = () => {
  return (
    <section className='mx-6 py-8 flex flex-col items-start justify-between relative h-[100vh]'>
      <div className='flex flex-col items-center w-full mt-[120px]'>
        <Image
        src={ImagePaths.success}
        width={327}
        height={205}
        className='w-full'
        />

        <h2 className='big_text mt-10'>Password reset successful!</h2>
        <p className='small_text' style={{fontSize:'16px'}}>You've successfully rest your password</p>
        
      </div>
      <Link href='/' className='w-full'>
        <button className='primary_btn'>Continue to homepage</button>
      </Link>
    </section>
  )
}

export default success;