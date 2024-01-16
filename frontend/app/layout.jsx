import '@/app/globals.css'

export const metadata = {
    title: "Caleb Cafeteria App",
    description: "Web application of Caleb University's cafeteria",
}

const layout = ({children}) => {
  return (
    <html lang='en'>
        <body>
            <main>
                {children}
            </main>
        </body>
    </html>
  )
}

export default layout