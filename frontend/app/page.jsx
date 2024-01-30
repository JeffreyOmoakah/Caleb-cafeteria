import Image from 'next/image'
import Nav from '@app/components/BottomNav'
import ImagePaths from '@public/assets/imagePaths';
import Link from 'next/link'
import BagIcon from '@app/components/BagIcon'

const Home = () => {
  return (
    <section className='h-auto'>
        <div className='flex justify-between items-center bg-[#D9D9D9] pt-10 pb-6 px-5'>
            <div className='flex flex-col justify-between gap-1'>
                <h2 className='title_text'>Hi, Alvin</h2>
                <p className='small_text'>lorem ipsum</p>
            </div>
            <BagIcon/>
        </div>

        <div className='flex flex-col items-start gap-4 mt-9 mx-5'>
          <Link href='/pages/oldcafe' className='w-full'>
            <Image 
            src={ImagePaths.oldCaf}
            width={100}
            height={150}
            className='w-full cursor-pointer'
            />
          </Link>
          <Link href='/pages/newcafe' className='w-full'>
            <Image 
            src={ImagePaths.newCaf}
            width={200}
            height={150}
            className='w-full cursor-pointer'
            />
          </Link>
        </div>

        <Nav />
    </section>
  )
}

export default Home;