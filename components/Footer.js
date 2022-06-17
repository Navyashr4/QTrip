import React from 'react'

function Footer() {
  return (
    <div className='font-semibold grid grid-cols-1 md:grid-cols-4 md:justify-items-center
    gap-y-10 px-32 py-14 text-center bg-gray-100 text-gray-600'>
        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>ABOUT</h5>
            <p>How AirBnB works</p>
            <p>Newsroom</p>
            <p>Investors</p>
            <p>Airbnb Plus</p>
            <p>Airbnb Luxe</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>COMMUNITY</h5>
            <p>Accessibility</p>
            <p>This is not a real site</p>
            <p>It's a pretty awesome clone</p>
            <p>Referrals accepted</p>
            <p>Papafam</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>HOST</h5>
            <p>Clone project</p>
            <p>Clone</p>
            <p>Clone</p>
            <p>Clone</p>
            <p>Clone</p>
        </div>

        <div className='space-y-4 text-xs text-gray-800'>
            <h5 className='font-bold'>SUPPORT</h5>
            <p>Help Centre</p>
            <p>Trust and Safety</p>
            <p>Say Hi Youtube</p>
            <p>Easter Eggs</p>
            <p>For the Win</p>
        </div>

        <div></div>
        <div></div>
    </div>
  )
}

export default Footer