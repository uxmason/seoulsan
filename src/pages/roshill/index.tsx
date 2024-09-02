import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className='S-00'>
          <div className='C-00 isCoffee'>
            <div className='C-01'>
              <div className='C-03 styleSheet'></div>
            </div>
            <div className='C-02'>
              <div className='C-04'>
                <div className='C-05'>
                  <p className='T-00'>에스프레소</p>
                  <p className='T-01'>Espresso</p>
                </div>
                <p className='T-02'>HOT / ICE</p>
                <p className='T-03'>4.5</p>
              </div>
              <div className='C-04'>
                <div className='C-05'>
                  <p className='T-00'>아메리카노</p>
                  <p className='T-01'>Americano</p>
                </div>
                <p className='T-02'>HOT / ICE</p>
                <p className='T-03'>5.5</p>
              </div>
              <div className='C-04'>
                <div className='C-05'>
                  <p className='T-00'>카페라테</p>
                  <p className='T-01'>Cafe Latte</p>
                </div>
                <p className='T-02'>HOT / ICE</p>
                <p className='T-03'>6.5</p>
              </div>
              <div className='C-04'>
                <div className='C-05'>
                  <p className='T-00'>바닐라라떼</p>
                  <p className='T-01'>Vanilla Latte</p>
                </div>
                <p className='T-02'>HOT / ICE</p>
                <p className='T-03'>7.5</p>
              </div>
              <div className='C-04'>
                <div className='C-05'>
                  <p className='T-00'>아보카토</p>
                  <p className='T-01'>Affogato</p>
                </div>
                <p className='T-02'>ICE</p>
                <p className='T-03'>7.0</p>
              </div>
              <div className='C-04'>
                <div className='C-05'>
                  <p className='T-00'>녹차라떼</p>
                  <p className='T-01'>Green-tea Latte</p>
                </div>
                <p className='T-02'>HOT / ICE</p>
                <p className='T-03'>6.5</p>
              </div>
              <div className='C-04'>
                <div className='C-05'>
                  <p className='T-00'>초코라떼</p>
                  <p className='T-01'>Chocolate Latte</p>
                </div>
                <p className='T-02'>HOT / ICE</p>
                <p className='T-03'>6.0</p>
              </div>
              <div className='C-04'>
                <div className='C-05'>
                  <p className='T-00'>생딸기라떼</p>
                  <p className='T-01'>Raw Strawberry Latte</p>
                </div>
                <p className='T-02'>HOT / ICE</p>
                <p className='T-03'>7.5</p>
              </div>
            </div>
            <div className='C-02'>
            <div className='C-04'>
                <div className='C-05 isLong'>
                  <p className='T-00'><span className='isKenya'></span>케냐 AA</p>
                  <p className='T-01'>Kenya AA</p>
                </div>
                <p className='T-03'>9.0</p>
              </div>
              <div className='C-04'>
                <div className='C-05 isLong'>
                  <p className='T-00'><span className='isGuatemala'></span>과테말라</p>
                  <p className='T-01'>Guatemala</p>
                </div>
                <p className='T-03'>9.0</p>
              </div>
              <div className='C-04'>
                <div className='C-05 isLong'>
                  <p className='T-00'><span className='isEthiopia'></span>에티오피아 예가체프 코케허니 G1</p>
                  <p className='T-01'>Ethiopia Yirgacheffe Kokehoney G1</p>
                </div>
                <p className='T-03'>10.0</p>
              </div>
              <div className='C-04'>
                <div className='C-05 isLong'>
                  <p className='T-00'><span className='isBrazil'></span>브라질 게이샤 무산소 발효</p>
                  <p className='T-01'>Brazilian Geisha Anoxic Fermentation</p>
                </div>
                <p className='T-03'>12.0</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
