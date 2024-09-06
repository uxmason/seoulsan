import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import { useEffect, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [counter, setCount] = useState(0);
  useEffect(() => {
    setInterval(() => {
      setCount(counter + 1);
    }, 10000);
  })
  useEffect(() => {
    
  }, [counter])
  function enterFullscreen() {
    document.documentElement.requestFullscreen()
  }
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className='S-00' onClick={enterFullscreen}>
          <div className={`C-00 isCoffee ${(counter%4 == 0) ? `isOpened`: null} ${(counter%4 == 1) ? `isFolded`: null}`}>
            <div className='C-07'></div>
            <div className='C-01'>
              <div className='C-03 styleSheet'></div>
              <div className='C-06 styleSheet'></div>
            </div>
            <div className='C-08'>
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
          </div>
          <div className={`C-00 isAde ${(counter%4 == 1) ? `isOpened`: null} ${(counter%4 == 2) ? `isFolded`: null}`}>
            <div className='C-07'></div>
            <div className='C-01'>
              <div className='C-03 styleSheet'></div>
              <div className='C-06 styleSheet'></div>
            </div>
            <div className='C-08'>
              <div className='C-02'>
                <div className='C-04'>
                  <div className='C-05 isLong'>
                    <p className='T-00'>레몬에이드</p>
                    <p className='T-01'>Lemon ade</p>
                  </div>
                  <p className='T-03'>6.5</p>
                </div>
                <div className='C-04'>
                  <div className='C-05 isLong'>
                    <p className='T-00'>자몽에이드</p>
                    <p className='T-01'>Grapefruit ade</p>
                  </div>
                  <p className='T-03'>6.5</p>
                </div>
                <div className='C-04'>
                  <div className='C-05 isLong'>
                    <p className='T-00'>오렌지에이드</p>
                    <p className='T-01'>Orange ade</p>
                  </div>
                  <p className='T-03'>6.5</p>
                </div>
                <div className='C-04'>
                  <div className='C-05 isLong'>
                    <p className='T-00'>플레인 요거트 스무디</p>
                    <p className='T-01'>Plain yogurt smoothie</p>
                  </div>
                  <p className='T-03'>6.5</p>
                </div>
                <div className='C-04'>
                  <div className='C-05 isLong'>
                    <p className='T-00'>블루베리 요거트 스무디</p>
                    <p className='T-01'>Blueberry yogurt smoothie</p>
                  </div>
                  <p className='T-03'>7.5</p>
                </div>
                <div className='C-04'>
                  <div className='C-05 isLong'>
                    <p className='T-00'>망고 요거트 스무디</p>
                    <p className='T-01'>Mango yogurt smoothie</p>
                  </div>
                  <p className='T-03'>7.5</p>
                </div>
                <div className='C-04'>
                  <div className='C-05 isLong'>
                    <p className='T-00'>딸기 요거트 스무디</p>
                    <p className='T-01'>Strawberry yogurt smoothie</p>
                  </div>
                  <p className='T-03'>7.5</p>
                </div>
              </div>
              <div className='C-02'>
                <div className='C-04'>
                  <div className='C-05 isLong'>
                    <p className='T-00'><span className='isBox'>상하목장</span>밀크 아이스크림</p>
                    <p className='T-01'>[Sangha Farm] Milk ice cream</p>
                  </div>
                  <p className='T-03'>4.0</p>
                </div>
                <div className='C-04'>
                  <div className='C-05 isLong'>
                    <p className='T-00'><span className='isBox'>상하목장</span>밀크 초코 아이스크림</p>
                    <p className='T-01'>[Sangha Farm] Milk ice cream with Chocolate</p>
                  </div>
                  <p className='T-03'>5.0</p>
                </div>
                <div className='C-04'>
                  <div className='C-05 isLong'>
                    <p className='T-00'><span className='isEthiopia'></span>전통 팥빙수</p>
                    <p className='T-01'>Korean red bean bingsu</p>
                  </div>
                  <p className='T-03'>8.0</p>
                </div>
                <div className='C-04'>
                  <div className='C-05 isLong'>
                    <p className='T-00'><span className='isBrazil'></span>흑임자 팥빙수</p>
                    <p className='T-01'>Red beans and black sesame bingsu</p>
                  </div>
                  <p className='T-03'>9.0</p>
                </div>
                <div className='C-04'>
                  <div className='C-05 isLong'>
                    <p className='T-00'><span className='isBrazil'></span>콜라 / 사이다</p>
                    <p className='T-01'>Coke / Cider</p>
                  </div>
                  <p className='T-03'>3.0</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`C-00 isBeverage ${(counter%4 == 2) ? `isOpened`: null} ${(counter%4 == 3) ? `isFolded`: null}`}>
            <div className='C-07'></div>
            <div className='C-07'></div>
            <div className='C-07'></div>
            <div className='C-01'>
              <div className='C-03 styleSheet'></div>
              <div className='C-06 styleSheet'></div>
            </div>
            <div className='C-08'>
              <div className='C-02'>
                <div className='C-04'>
                  <div className='C-05 isLong'>
                    <p className='T-00'>장미 에이드</p>
                    <p className='T-01'>Rose ade</p>
                  </div>
                  <p className='T-03'>8.5</p>
                </div>
                <div className='C-04'>
                  <div className='C-05 isLong'>
                    <p className='T-00'>벗꽃 에이드</p>
                    <p className='T-01'>Cherry blossom ade</p>
                  </div>
                  <p className='T-03'>8.5</p>
                </div>
                <div className='C-04'>
                  <div className='C-05 isLong'>
                    <p className='T-00'>아카시아 에이드</p>
                    <p className='T-01'>Acacia ade</p>
                  </div>
                  <p className='T-03'>8.5</p>
                </div>
                <div className='C-04'>
                  <div className='C-05 isLong'>
                    <p className='T-00'>국화 에이드</p>
                    <p className='T-01'>Chrysanthemum ade</p>
                  </div>
                  <p className='T-03'>8.5</p>
                </div>
              </div>
              <div className='C-02'>
                <div className='C-04'>
                  <div className='C-05 isLong'>
                    <p className='T-00'><span className='isBox'>제로슈가</span>얼그레이 밀크티</p>
                    <p className='T-01'>[Zero sugar] Earl grey milk tea</p>
                  </div>
                  <p className='T-03'>7.5</p>
                </div>
                <div className='C-04'>
                  <div className='C-05 isLong'>
                    <p className='T-00'><span className='isBox'>제로슈가</span>아쌈 밀크티</p>
                    <p className='T-01'>[Zero sugar] Assam milk tea</p>
                  </div>
                  <p className='T-03'>7.5</p>
                </div>
                <div className='C-04'>
                  <div className='C-05 isLong'>
                    <p className='T-00'><span className='isBox'>제로슈가</span>말차 밀크티</p>
                    <p className='T-01'>[Zero sugar] Matcha milk tea</p>
                  </div>
                  <p className='T-03'>7.5</p>
                </div>
                <div className='C-04'>
                  <div className='C-05 isLong'>
                    <p className='T-00'><span className='isBox'>제로슈가</span>진저웜 밀크티</p>
                    <p className='T-01'>[Zero sugar] Ginger milk tea</p>
                  </div>
                  <p className='T-03'>7.5</p>
                </div>
                <div className='C-04'>
                  <div className='C-05 isLong'>
                    <p className='T-00'><span className='isBox'>제로슈가</span>쌍화 밀크티</p>
                    <p className='T-01'>[Zero sugar] Herb tonic milk tea</p>
                  </div>
                  <p className='T-03'>7.5</p>
                </div>
              </div>
            </div>
          </div>
          <div className={`C-00 isHerb ${(counter%4 == 3) ? `isOpened`: null} ${(counter%4 == 0) ? `isFolded`: null}`}>
            <div className='C-07'></div>
            <div className='C-01'>
              <div className='C-03 styleSheet'></div>
              <div className='C-06 styleSheet'></div>
            </div>
            <div className='C-08'>
              <div className='C-02'>
                <div className='C-04'>
                  <div className='C-05 isLong'>
                    <p className='T-00'>페퍼민트 차</p>
                    <p className='T-01'>Pappermint herb tea</p>
                  </div>
                  <p className='T-03'>5.0</p>
                </div>
                <div className='C-04'>
                  <div className='C-05 isLong'>
                    <p className='T-00'>와일드 체리 블렌딩 허브차</p>
                    <p className='T-01'>Wild cherry herb tea</p>
                  </div>
                  <p className='T-03'>5.0</p>
                </div>
                <div className='C-04'>
                  <div className='C-05 isLong'>
                    <p className='T-00'>레몬 앤 진저 블렌딩 허브차</p>
                    <p className='T-01'>Lemon & ginger herb tea</p>
                  </div>
                  <p className='T-03'>5.0</p>
                </div>
                <div className='C-04'>
                  <div className='C-05 isLong'>
                    <p className='T-00'>핑크 자몽 블라썸 블렌딩 허브차</p>
                    <p className='T-01'>Pink grapefruit blossom herb tea </p>
                  </div>
                  <p className='T-03'>5.0</p>
                </div>
                <div className='C-04'>
                  <div className='C-05 isLong'>
                    <p className='T-00'>얼그레이 플라워 허브차</p>
                    <p className='T-01'>Earl grey flower herb tea </p>
                  </div>
                  <p className='T-03'>5.0</p>
                </div>
              </div>
              <div className='C-02'>
                <div className='C-04'>
                  <div className='C-05 isLong'>
                    <p className='T-00'>아이스티</p>
                    <p className='T-01'>Ice tea</p>
                  </div>
                  <p className='T-03'>5.0</p>
                </div>
                <div className='C-04'>
                  <div className='C-05 isLong'>
                    <p className='T-00'>아.샷.추.</p>
                    <p className='T-01'>Ice tea & espresso</p>
                  </div>
                  <p className='T-03'>6.0</p>
                </div>
                <div className='C-04'>
                  <div className='C-05 isLong'>
                    <p className='T-00'>뽀로로 음료수 (사과 / 밀크 / 딸기)</p>
                    <p className='T-01'>Pororo Beverage (apple / milk / strawberry)</p>
                  </div>
                  <p className='T-03'>3.0</p>
                </div>
                <div className='C-04'>
                  <div className='C-05 isLong'>
                    <p className='T-00'>티니핑 음료수 (애플망고 / 샤인머스켓)</p>
                    <p className='T-01'>Teenieping Beverage (apple mango / shine muscat)</p>
                  </div>
                  <p className='T-03'>3.0</p>
                </div>
                <div className='C-04'>
                  <div className='C-05 isLong'>
                    <p className='T-00'>시금치 피자</p>
                    <p className='T-01'>Spinach pizza</p>
                  </div>
                  <p className='T-03'>14.5</p>
                </div>
                <div className='C-04'>
                  <div className='C-05 isLong'>
                    <p className='T-00'>모짜렐라 피자</p>
                    <p className='T-01'>Mozzarella pizza</p>
                  </div>
                  <p className='T-03'>15.0</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  )
}
