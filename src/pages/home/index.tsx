import HeaderApp from '../../Components/HeaderApp'
import Footer from '../../Components/Footer'
import styles from './app.module.scss'
import Image from 'next/image'
import { GetStaticProps } from 'next'
import { useEffect } from 'react'


export default function Home({ banners }) {

  useEffect(() => {
    document.getElementById('banners')
      .addEventListener("wheel", (event) => {
        if (event.deltaY > 0) {
          event.target.scrollBy(500, 0)
        } else {
          event.target.scrollBy(-500, 0)
        }
      })
  })
  return (
    <div className={styles.container}>
      <HeaderApp />
      <section className={styles.bannersWrapper}>
        <div className={styles.banners} id="banners">
          {banners.map((banner, index) => (
            <div className={styles.banner} key={index}>
              <Image width={1920} height={500} src={banner.banner} />
            </div>
          ))}
        </div>
      </section>
      <Footer background="black" />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:8080/app/')
  const { banners } = await res.json()

  return {
    props: { banners },
    revalidate: 60 * 60 * 24,
  }
}
