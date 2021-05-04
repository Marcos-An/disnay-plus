import styles from './home.module.scss'
import Header from '../Components/Header'
import Button from '../Components/Button'
import Footer from '../Components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { GetStaticProps } from 'next'
import { HomeCard } from '../Components/Cards'

export default function Home({ originals, noLimites }) {

  return (
    <div className={styles.container}>
      <Header>
        <div className={styles.headerButtons}>
          <button type="button" id="signUp" className={styles.buttonSignUp}>
            ASSINE AGORA
          </button>
          <Link href="http://localhost:3000/home">
            <button type="button" className={styles.buttonSignIn}>
              ENTRAR
            </button>
          </Link>
        </div>
      </Header>
      <section className={styles.sectionPricesWrapper}>
        <div className={styles.sectionPrices}>
          <img src="/logo.svg" alt="logo" className={styles.logo} />
          <h1>
            As melhores histórias
            <br />
            em um só lugar.
          </h1>

          <div className={styles.priceWrapper}>
            <div className={styles.mensalPrice}>
              <h2>R$ 27,90<span>/mes*</span></h2>
              <Button>ASSINE AGORA</Button>
            </div>
            <div className={styles.anualPrice}>
              <div className={styles.mensalPrice}>
                <h2>De R$ 334 por <br /> R$ 279,90<span>/ano*</span></h2>
                <Button>ASSINE AGORA</Button>
              </div>
            </div>
          </div>
          <p>*Preço mensal: R$ 27,90. Preço anual: R$ 279,90 à vista. Encargos e impostos podem ser aplicáveis.</p>
          <div className={styles.franchiseWrapper}>
            <img src="/home/disney-franchise-logos.png" alt="logo" className={styles.franchise} />
            <Link href="#price">
              <img src="/down-arrow.svg" alt="arrow-down" className={styles.arrowDown} />
            </Link>
          </div>
        </div>
        <a id="price" />
      </section>

      <section className={styles.sectionMockup}>
        <div className={styles.textMockup}>
          <h1>Assista do seu jeito</h1>
          <p>Aproveite a tela grande da TV ou assista no tablet, laptop, celular e outros aparelhos. Nossa seleção de títulos em 4K não para de crescer. Além disso, para a felicidade de todos, é possível assistir em até 4 telas ao mesmo tempo.</p>
        </div>
        <div className={styles.muckupImage}>
          <Image
            src="/home/Mokup.png"
            alt="mockup"
            width={1800}
            height={1500}
          />
        </div>
      </section>

      <section className={styles.sectionOriginals}>
        <div className={styles.textOriginals}>
          <h1>Originais Disney+ exclusivos</h1>
          <p>Só no Disney+ você vê os melhores filmes, séries, curtas e outros conteúdos inéditos.</p>
        </div>
        <div className={styles.originals}>
          {
            originals.map(({ image, alt }) => (
              <HomeCard image={image} alt={alt} key={alt} />
            ))
          }
        </div>
      </section>

      <section className={styles.sectionSignUp}>
        <Button>ASSINE AGORA</Button>
      </section>

      <section className={styles.sectionDownload}>
        <div className={styles.backgroundImages}>
          <div>
            <h1>
              Baixe filmes e séries
            </h1>
            <p>
              Baixe e assista quando e onde quiser. Assim, seus favoritos estão sempre com você, até mesmo sem internet.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.sectionOriginals}>
        <div className={styles.textOriginals}>
          <h1>Diversão sem limites</h1>
          <p>Descubra as melhores histórias da Disney, Pixar, Marvel, Star Wars e National Geographic em um só lugar. De sucessos de bilheteria até clássicos e novidades originais, temos opções para todos os gostos.</p>
        </div>
        <div className={styles.originals}>
          {
            noLimites.map(({ image, alt }) => (
              <HomeCard image={image} alt={alt} key={alt} />
            ))
          }
        </div>
      </section>

      <section className={styles.sectionDevices}>
        <h1>Disponível nos seus dispositivos favoritos </h1>
        <div className={styles.devices}>
          <div className={styles.device}>
            <Image
              src="/home/device-group-tv.png"
              alt="TV"
              width={300}
              height={150}
            />
            <h3>TV</h3>
            <p>Amazon Fire TV</p>
            <p>Android TV</p>
            <p>Apple TV</p>
            <p>Chromecast</p>
            <p>TVs LG</p>
            <p>Roku</p>
            <p>Samsung</p>
          </div>
          <div className={styles.device}>
            <Image
              src="/home/device-group-computer.png"
              alt="TV"
              width={300}
              height={150}
            />
            <h3>Computador</h3>
            <p>Chrome OS</p>
            <p>MacOS</p>
            <p>PC Windows</p>
          </div>
          <div className={styles.device}>
            <Image
              src="/home/device-group-mobile-tablet.png"
              alt="TV"
              width={300}
              height={150}
            />
            <h3>Celulares e tablets</h3>
            <p>Tablets Amazon Fire</p>
            <p>Celulares e tablets Android</p>
            <p>iPhone e iPad</p>
          </div>
          <div className={styles.device}>
            <Image
              src="/home/device-group-game-consoles.png"
              alt="TV"
              width={300}
              height={150}
            />
            <h3>Videogames</h3>
            <p>PS4</p>
            <p>PS5</p>
            <p>Xbox One</p>
            <p>Xbox Series X</p>
            <p>Xbox Series S</p>
          </div>
        </div>
      </section>
      <Footer background="transparent" />
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch('http://localhost:8080/home/')
  const { originals, noLimites } = await res.json()


  return {
    props: { originals, noLimites },
    revalidate: 60 * 60,
  }
}
