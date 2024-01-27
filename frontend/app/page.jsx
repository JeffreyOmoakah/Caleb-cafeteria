import Image from 'next/image'
import BottomNav from '@app/components/BottomNav'
import imagePaths from '@public/assets/imagePaths';

const Home = () => {
  return (
    <section className='w-full h-auto'>
        <div className='flex justify-between items-center py-5 px-6'>
            <div className='flex flex-col justify-between gap-1'>
                <h2>HI, Alvin</h2>
                <p>lorem ipsum</p>
            </div>
            <Image
            src={imagePaths.bag}
            alt='Shopping Bag'
            width={24}
            height={24}
            // placeholder='blur'
            // quality={100}
            />
        </div>

        <BottomNav />
    </section>
  )
}

export default Home;