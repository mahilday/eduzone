import Head from 'next/head'
import Image from 'next/image'
import { DesktopHeader, MobileHeader } from '../components/Header'
import { Main } from '../components/Main'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div>
      <Head>
        <title>EduZone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>
      {/* <MobileHeader /> */}
      <DesktopHeader />
      <Main />
    </div>
  )
}
