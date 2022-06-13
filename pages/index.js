import Head from 'next/head'
import Blog from './components/blogs/Blog'
import Sidebar from './components/siderbar/Sidebar'
import Slider from './components/slider/ImageSlider'


export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <Sidebar />
      <Slider />
      <Blog />

    </>
  )
}
