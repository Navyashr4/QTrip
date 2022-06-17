import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header.js'
import Banner from '../components/Banner.js'
import SmallCard from '../components/SmallCard'
import MediumCard from '../components/MediumCard'
import LargeCard from '../components/LargeCard'
import Footer from '../components/Footer'


// const Home: NextPage = () => {
export default function Home({exploreData, cardsData}){
  return (
    <div className="">
      <Head>
        <title>AirBnB-clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className='max-w-7xl mx-auto px-8 sm:px-16'>
        {/* small card section */}
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold pb-5'>Explore Nearby</h2>

          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
            {exploreData?.map(({img, distance, location}) => (
              <SmallCard 
                key={img}
                img={img} 
                location={location} 
                distance={distance} />
              ))}
          </div>
        </section>

        {/* medium card section */}
        <section className='pt-6'>
          <h2 className='text-4xl font-semibold py-8'>Live Anywhere</h2>
          <div className='flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3'>
            {cardsData?.map(({img, title}) => (
              <MediumCard key={img} img={img} title={title}/>
            ))}
          </div>
        </section>

        {/* large card section */}
        <section>
          <LargeCard 
            img='https://links.papareact.com/4cj'
            title='The Greatest Outdoors'
            description='Wishlists curated by Airbnb'
            buttonText='Get Inspired'
            />
        </section>
      </main>

      <footer className='bg-gray-100'>
        <div className='max-w-7xl mx-auto px-8 sm:px-16'>
          <Footer/>
        </div>
      </footer>

    </div>
  )
}

export async function getStaticProps() {
  const exploreData = await fetch('https://links.papareact.com/pyp').
  then((res) => res.json());

  const cardsData = await fetch('https://links.papareact.com/zp1').
  then((res) => res.json());

  return {
    props: {
      exploreData,
      cardsData
    }
  }
}

// export default Home
