import Image from 'next/image'
import BottomNav from '@app/components/BottomNav'
import imagePaths from '@public/assets/imagePaths'

const OldCaf = () => {
  return (
    <section>
        <div className='flex justify-between items-center w-full'>
            <Image
            src={imagePaths.arrowLeft}
            width={24}
            height={24}
            />
            <h1 className='font-500 text-[24px] leading-[29px]'>Old Cafe</h1>
            <div className='relative flex'>
                <Image
                src={imagePaths.bag}
                width={24}
                height={24}
                />
            </div>
            <div className='absolute top-[2px] right-[4px] rounded-full bg-gray-600 border-[1px] border-solid border-white'>
                <p className='text-white font-400 text-[12px] leading-[17px] text-center'>0</p>
            </div>
        </div>
        
        <BottomNav />
    </section>
  )
}

export default OldCaf;