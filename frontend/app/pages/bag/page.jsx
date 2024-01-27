import Image from 'next/image'
import ImagePaths from '@public/assets/imagePaths.js'
import Bag from '@app/components/bag.jsx'
import Nav from '@app/components/BottomNav.jsx'

const page = () => {
  return (
    <section className='flex_col_start mx-6'>
      <div className='flex items-center justify-between py-6 w-full'>
        <Image 
        src={ImagePaths.arrowLeft}
        width={24}
        height={24}
        />
        <h2 className='big_text'>Bag</h2>
        <p className='sub_tittle_text'>0 item(s)</p>
      </div>
      <Bag/>
      <Nav />
      </section>
  )
}

export default page