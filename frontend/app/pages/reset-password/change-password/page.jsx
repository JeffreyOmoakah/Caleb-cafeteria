import Image from 'next/image'
import ImagePaths from '@/public/assets/imagePaths.js'
import Link from 'next/link'

const ChangePassword = () => {
  return (
    <section className='mx-6 py-8 flex flex-col items-start justify-between relative h-[100vh]'>
      <div className='flex_col_start w-full'>
        <Link href='/pages/reset-password/check-inbox'>
          <Image
          src={ImagePaths.arrowLeft}
          width={24}
          height={24}
          />
        </Link>
        <div className='flex_col_start gap-1 mt-4'>
          <h2 className='big_text'>Change my Password</h2>
          <p className='small_text w-[320px]' style={{fontSize: '16px'}}>Your password should be at least 8 characters long and different from the old one.</p>
        </div>
        <div className='flex_col_start mt-20 gap-10 w-full'>
          <div className='flex_col_start w-full'>

            <label className='small_text' for='password'>New Password</label>
            <input className='py-[13px] px-4 small_text rounded-[8px] border-[1px] border-solid border-[#5F5E5E] w-full' type='password' id='password' name='password' style={{fontWeight:'600'}}/>
          </div>
          <div className='flex_col_start w-full'>
            <label className='small_text' for='confirm-password'>Confirm Password</label>
            <input className='py-[13px] px-4 small_text rounded-[8px] border-[1px] border-solid border-[#5F5E5E] w-full' type='password' id='confirm-password' name='confirm-password' style={{fontWeight:'600'}}/>

          </div>
        </div>
      </div>
      <Link href='/pages/reset-password/success' className='w-full'>
        <button className='primary_btn'>Save</button>
      </Link>
    </section>
  )
}

export default ChangePassword;