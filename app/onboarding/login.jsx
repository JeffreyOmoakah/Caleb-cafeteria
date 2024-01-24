import '@/app/globals.css'
import Form from '@/app/components/Form.jsx'


const signup = () => {
  return (
    <section class='w-full px-6 py-8 flex_col_start'>
      <h2 class='big_text'>Welcome Back</h2>
      <p>We're glad to see you again!</p>
      <Form />
      <button class='sign_up_btn pt-4'>Login</button>
      <div class='flex items-center justify-center gap-2'>
        <div class='w-9 h-[1px] rounded-[8px] bg-[#6C7175]'></div>
        <p>Or login with</p>
        <div class='w-9 h-[1px] rounded-[8px] bg-[#6C7175]'></div>
      </div>
      <div class='flex items-center justify-center gap-5'>
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
      <p class='small_text items-self-end'>Already have an account? <span class='font-[600] text-underline text-[#292929]'>Login</span></p>
    </section>
  )
}

export default signup;