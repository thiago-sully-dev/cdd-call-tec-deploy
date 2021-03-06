import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import { FaWhatsapp } from 'react-icons/fa';

import { Menu } from '../components/menu';
import BannerHome from '../assets/banner-home.jpg';
import BannerMobile from '../assets/banner-mobile.jpg';
import { Plans } from '../components/plans';
import Form from '../components/formDiv';
import { Footer } from '../components/footer';
import { Map } from '../components/map';
import { Company } from '../components/company';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CDD CALL | Sercomtel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Menu />
      <main className={styles.main}>
        <div className={styles.bannerHome}>
          <Image src={BannerHome} width={1920} height={580} />
        </div>
        <div className={styles.bannerMobileHome}>
          <Image src={BannerMobile} width={920} height={600} />
        </div>
        <h1 id="plans">Busca por velocidade e estabilidade? <span>Contrate o plano Sercomtel Fibra 400 Mega</span>.</h1>
        <Plans />
        <Form />
        <Company />
        <Map />
      </main>
      <Footer />
      {/* <div className={styles.wppPlugin}>
        <Link href="https://api.whatsapp.com/send?phone=554333429000">
          <a>
            <FaWhatsapp />
          </a>
        </Link>
      </div> */}
    </div>
  )
}
