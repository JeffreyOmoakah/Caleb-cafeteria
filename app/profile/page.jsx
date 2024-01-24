import imagePaths from '@public/assets/imagePaths'
import Image from 'next/image'
import Nav from '@app/components/BottomNav.jsx'

const page = () => {
  return (
    <section className='flex-col-start mx-6 mt-4 mb-12'>
      <h1 className='big_text w-fit'>Profile</h1>
      <div className='flex items-center justify-start gap-3 mt-12'>
        <Image 
        src={imagePaths.profile}
        width={60}
        height={60}
        />
        <div className='flex-col-start gap-1'>
          <h2 className='sub_title_text'>Alvin John</h2>
          <p className='small_text'>View profile</p>
        </div>
      </div>
      <div className='flex-col-start mt-10'>
        <div className='rounded-[8px] border-[1px] border-solid border-[#EFF0F2] p-4 flex items-center justify-start gap-3'>
          <Image 
          src={imagePaths.notis}
          width={24}
          height={24}
          />
          <p className='small_text'>Notifications</p>
        </div>
        <div className='rounded-[8px] border-[1px] border-solid border-[#EFF0F2] p-4 flex items-center justify-start mt-4 gap-3'>
          <Image 
          src={imagePaths.help}
          width={24}
          height={24}
          />
          <p className='small_text'>Help</p>
        </div>
        <div className='rounded-[8px] border-[1px] border-solid border-[#EFF0F2] p-4 flex items-center justify-start mt-4 gap-3'>
          <Image 
          src={imagePaths.account}
          width={24}
          height={24}
          />
          <p className='small_text'>Account</p>
        </div>
        <div className='rounded-[8px] border-[1px] border-solid border-[#EFF0F2] p-4 flex items-center justify-start mt-4 gap-3'>
          <Image 
          src={imagePaths.review}
          width={24}
          height={24}
          />
          <p className='small_text'>Tell a friend</p>
        </div>
      </div>

      <div className='w-full flex items-center justify-center'>
        <button className='log_out_btn mt-[40px]'>Log Out</button>
      </div>
      
      <Nav/>
    </section>
  )
}

export default page;