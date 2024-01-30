import Image from 'next/image'
import ImagePaths from '@public/assets/imagePaths'
import Link from 'next/link'
const BagIcon = () => {
  return (
    <div className='relative right-[5.5px]'>
      <Link href='/pages/bag' className='h-6 w-6'>
        <Image
        src={ImagePaths.bag}
        width={24}
        height={24}
        />
      </Link>
        {/* Cart Count */}
        <div className='tiny_text bg-[#6C7175] rounded-full border-[1px] border-solid border-[#fff] flex items-center justify-center p-[1px] w-5 h-5 absolute top-[0px] right-[-5.5px]' style={{color:'#fff'}}>0</div>
      </div>
  )
}

export default BagIcon;