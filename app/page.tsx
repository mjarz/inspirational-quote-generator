import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head'
import { GradientBackgroundCon } from './components/QuoteGenerator/QuoteGeneratorElements'

export default function Home() {
  return (
    <>
    <Head>
      <title>Inspirational Quote</title>
      <meta name="description" content="A fun project to generate quotes"></meta>
      <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    {/*background*/}
    <GradientBackgroundCon>

    </GradientBackgroundCon>
    <main className={styles.main}>
      <div>Hello World!</div>
    </main>
    </>
  )
}
