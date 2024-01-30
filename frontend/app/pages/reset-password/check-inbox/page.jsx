import Image from 'next/image'
import ImagePaths from '@/public/assets/imagePaths.js'
import Link from 'next/link'

const CheckInbox = () => {
  return (
    <section className='mx-6 py-8 flex flex-col items-start justify-between relative h-[100vh]'>
      <div className='flex_col_start w-full'>
        <Link href='/pages/reset-password'>
          <Image
          src={ImagePaths.arrowLeft}
          width={24}
          height={24}
          />
        </Link>
        <div className='flex_col_start gap-1 mt-4'>
          <h2 className='big_text'>Check your inbox</h2>
          <p className='small_text w-[320px]' style={{fontSize: '16px'}}>We’ve sent you a verification email. Open it and tap the “Change password” link to continue</p>
          <button className='bg-transparent outline-none border-none heavy_btn_text'>Resend Email</button>
        </div>
        
      </div>
      <Link href='/pages/reset-password/change-password' className='w-full'>
        <button className='primary_btn'>Continue to Email</button>
      </Link>
    </section>
  )
}

export default CheckInbox;