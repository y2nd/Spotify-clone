import type { NextPage } from 'next'
import Sidebar from '../components/Sidebar'
import Center from '../components/Center'
import Image from 'next/image'
import { getSession } from 'next-auth/react'
import Player from '../components/Player'

const Home: NextPage = () => {
  return (
    <div className="bg-black h-screen overflow-hidden">
      
      <main className="flex">
        <Sidebar />
        <Center />
      </main>
      <div className="sticky bottom-0">
        <Player></Player>
      </div>
    </div>
  )
}

export default Home
export async function getServerSideProps(context: any) {
  const session = await getSession(context);

  return {
    props: {
      session
    }
  }
}