import Image from 'next/image'
import imagePaths from '@public/assets/imagePaths';

const Home = () => {
  return (
    <section className='w-full h-auto'>
        <div className='flex justify-between items-center'>
            <div className='flex flex-col justify-between gap-1'>
                <h2>H1, Alvin</h2>
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
    </section>
  )
}

export default Home;