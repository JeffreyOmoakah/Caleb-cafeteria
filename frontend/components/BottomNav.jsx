"use client"
import Image from 'next/image'
import imagePaths from '@public/assets/imagePaths';


const BottomNav = () => {
  return (
    <div className='fixed bottom-0 left-[50%] translate-x-[-50%] flex justify-around items-center gap-[10px] border-t border-solid border-[#E6E6E6] py-3 px-16 w-full'>
        <div className='flex flex-col items-center justify-between gap-1 cursor-pointer'>
                <Image
                src={imagePaths.home}
                width={24}
                height={24}
                />
                <p className='font-500 text-[12px] leading-[17px] text-center'>Home</p>
        </div>
        <div className='flex flex-col items-center justify-between gap-1 cursor-pointer'>
                <Image
                src={imagePaths.receipt}
                width={24}
                height={24}
                />
                <p className='font-500 text-[12px] leading-[17px] text-center'>Receipt</p>
        </div>
        <div className='flex flex-col items-center justify-between gap-1 cursor-pointer'>
                <Image
                src={imagePaths.user}
                width={24}
                height={24}
                />
                <p className='font-500 text-[12px] leading-[17px] text-center'>Profile</p>
        </div>
    </div>
  )
}

export default BottomNav;