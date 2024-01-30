import Image from 'next/image'
import ImagePaths from '@/public/assets/imagePaths.js'
import Link from 'next/link'

const page = () => {
  return (
    <section className='mx-6 py-8 flex flex-col items-start justify-between relative h-[100vh]'>
      <div className='flex_col_start w-full'>
        <Link href='/pages/onboarding/login'>
          <Image
          src={ImagePaths.arrowLeft}
          width={24}
          height={24}
          />
        </Link>
        <div className='flex_col_start gap-1 mt-4'>
          <h2 className='big_text'>Reset Password</h2>
          <p className='small_text w-[320px]' style={{fontSize: '16px'}}>Kindly enter the email address linked to your account</p>
        </div>
        <div className='flex_col_start mt-20 w-full'>
        <label className='small_text' for='email'>Email</label>
        <input className='py-[13px] px-4 small_text rounded-[8px] border-[1px] border-solid border-[#5F5E5E] w-full' type='email' id='email' name='email' style={{fontWeight:'600'}}/>
        </div>
      </div>
      <Link href='/pages/reset-password/check-inbox' className='w-full'>
        <button className='primary_btn'>Submit</button>
      </Link>
    </section>
  )
}

export default page;