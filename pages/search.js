import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import { format } from "date-fns";
import InfoCard from '../components/InfoCard';
import MapSection from '../components/MapSection'

function search({searchResults}) {
  const router = useRouter();
  let {location, startDate, endDate, noOfGuests} = router.query;

  let range = '';
  if(startDate && endDate){
    const formattedStartDate = format(new Date(startDate), "dd MMMM yyyy");
    const formattedEndDate = format(new Date(endDate), "dd MMMM yyyy");
    range = `${formattedStartDate} to ${formattedEndDate}`;
  }


  return (
    <div>
        <Header placeholder={`${location} | ${range} | ${noOfGuests}`} />

        <div className='lg:grid lg:grid-cols-3'>
          <main className='col-span-3 lg:col-start-1 lg:col-span-2'>
              <section className='flex-grow pt-14 px-6'>
                  {/* Top description */}
                  <p className='text-xs font-bold'>300+ Stays - {range} - for {noOfGuests} {noOfGuests==1? "guest" : "guests"}</p>
                  <h1 className='text-3xl font-semibold mt-2 mb-6'>Stays in {location}</h1>
                  <div className='hidden lg:inline-flex space-x-3 mb-5 text-gray-800
                  whitespace-nowrap'>
                      <p className='button'>Cancellation Flexibility</p>
                      <p className='button'>Type of Place</p>
                      <p className='button'>Price</p>
                      <p className='button'>Rooms and Beds</p>
                      <p className='button'>More filters</p>
                  </div>

                  {/* listings */}
                  <div className='flex flex-col'>
                  {searchResults.map(({img, location, title, description, star, price,
                  total }) => (
                      <InfoCard 
                      key = {img}
                      img = {img}
                      location = {location}
                      title = {title}
                      description = {description}
                      star = {star}
                      price = {price}
                      total = {total}
                      />
                  ))}
                  </div>

              </section>
          </main>

          <section className='sm:hidden xs:hidden md:hidden lg:inline lg:col-start-3 lg:col-span-1'>
            <MapSection searchResults={searchResults} />
          </section>
        </div>

        <Footer />
    </div>
  );
}

export default search;

export async function getServerSideProps(){
  const searchResults = await fetch('https://links.papareact.com/isz').
  then((res) => res.json());

  return {
    props: {
        searchResults
    }
  }
}