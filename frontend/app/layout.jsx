import '@/app/globals.css'
import Nav from '@app/components/BottomNav'

export const metadata = {
    title: "Caleb Cafeteria App",
    description: "Web application of Caleb University's cafeteria",
}

const layout = ({children}) => {
  return (
    <html lang='en' className='h-auto'>
        <body>
            <main>
                {children}
            </main>
        </body>
    </html>
  )
}

export default layout;