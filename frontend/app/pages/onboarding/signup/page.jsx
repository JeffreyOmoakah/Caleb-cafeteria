import '@/app/globals.css'
import Form from '@/app/components/Form.jsx'
import Image from 'next/image'
import Link from 'next/link'

const signup = () => {
  return (
    <section class='mx-6 py-10 flex flex-col justify-between items-start h-[100vh]'>
      <div className='w-full flex_col_start'>
        <h2 class='big_text'>Get Started</h2>
        <p>How would you prefer to sign up?</p>
        <Form />
        <button class='primary_btn mt-4'>Continue with email</button>
        <div class='flex items-center justify-center gap-2 mt-9 w-full'>
          <div class='w-9 h-[1px] rounded-[8px] bg-[#6C7175]'></div>
          <p>Or register with</p>
          <div class='w-9 h-[1px] rounded-[8px] bg-[#6C7175]'></div>
        </div>
        <div className='flex justify-center items-center w-full'>
          <div class='flex items-center justify-center gap-5 mt-8'>
            <button class='flex items-center justify-center gap-2 py-[10px] px-7 rounded-[8px] border-[1px] border-solid border-[#E6E6E6] small_text'>
              <Image src='@/public/assets/fb.svg'
              alt='Facebook Logo'
              width={24}
              height={24}
              />
              Facebook
            </button>
            <button class='flex items-center justify-center gap-2 py-[10px] px-7 rounded-[8px] border-[1px] border-solid border-[#E6E6E6] small_text'>
              <Image src='@/public/assets/google.svg'
              alt='Google Logo'
              width={24}
              height={24}
              />
              Google
            </button>
          </div>
        </div>
      </div>

      <p class='small_text items-self-end'>Already have an account? <Link href='/pages/onboarding/login'><span class='font-[600] underline text-[#292929]'>Login</span></Link></p>
    </section>
  )
}

export default signup;