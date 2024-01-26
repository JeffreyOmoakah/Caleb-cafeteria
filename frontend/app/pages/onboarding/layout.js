export const metadata = {
  title: 'Onboarding Page',
  description: 'The sequence of onboarding pages',
}

export default function RootLayout({ children }) {
 return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
