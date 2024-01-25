import Image from 'next/image'
import Link from 'next/link'
import '@/app/globals.css'


const page = () => {
  return (
    <section class="w-full px-6 pt-[50px] flex flex-col items-start justify-start">
      <Image
      src=''
      alt='Onboarding Image'
      width={327}
      height={249}/> 
      <div class='flex flex-col items-start justify-start gap-1 mt-[108px]'>
        <h2 class='font-Inter font-500 text-[24px] text-center leading-[29px]'>Welcome to Lorem Ipsum</h2>
        <p class='font-Inter font-400 text-[16px] leading-[23px] w-[300px]'>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
      </div>
      <button class='sign_up_btn mt-12'>Sign Up</button>
      <p class='small_text mt-10'>Already have an account? <span class='font-[600] text-underline text-[#292929]'>Login</span></p>
    </section>
  )
}

export default page;