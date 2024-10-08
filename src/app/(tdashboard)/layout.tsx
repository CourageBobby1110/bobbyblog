import { Montserrat, Poppins } from "next/font/google"
import "./globals.css";
import Sidenav from "./components/sidenav";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";




export const metadata = {
  title: 'dashboard',
  description: 'Ravens Academy Dashboard',
}

const poppins = Montserrat({
  weight: '400',
  subsets: ['latin'],
})

export default async  function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const {getUser} = getKindeServerSession()
  const user = await getUser()
  return (
    <html lang="en" className={poppins.className}>
      <body>
      <Sidenav x={user?.id.toString()} detail={undefined}/>
        {children}
        </body>
    </html>
  )
}
