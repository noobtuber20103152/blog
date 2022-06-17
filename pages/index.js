import Head from 'next/head'
import Blog from './components/blogs/Blog'
import Sidebar from './components/siderbar/Sidebar'
import Slider from './components/slider/ImageSlider'


export default function Home() {
  return (
    <>
      <Head>
        <title>Home</title>
        <link href="https://vercel.com/design/icons" rel="canonical" />
      </Head>
      <Sidebar />
      <Slider />
      <Blog />

    </>
  )
}
