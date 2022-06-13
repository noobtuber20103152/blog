import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Blog from './components/blogs/Blog'
import Sidebar from './components/siderbar/Sidebar'
import Slider from './components/slider/ImageSlider'


export default function Home() {
  return (
    <>
    <Head>
      <title>Home</title>
    </Head>
       <Sidebar/>
      <Slider />
      <Blog />

    </>
  )
}
