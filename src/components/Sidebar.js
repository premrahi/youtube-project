import React from 'react'

const Sidebar = () => {
  return (
    <div className='m-2 p-2 shadow-md w-56'>
        <h1 className='font-semibold text-lg  '>Subscription {'>'}</h1>
        <ul>
            <li>Sports</li>
            <li>Music</li>
            <li>Movies</li>
            <li>Gaming</li>
        </ul>
       
        <h1 className='font-semibold text-lg  mt-5  '>Trending {'>'}</h1>
        <ul>
            <li>Sports</li>
            <li>Music</li>
            <li>Movies</li>
            <li>Gaming</li>
        </ul>
        <h1 className='font-semibold text-lg  mt-5  '>You {'>'}</h1>
        <ul>
            <li>History</li>
            <li>Playlist</li>
            <li>Watch later</li>
            <li>Liked videos</li>
            <li>Your videos</li>
            <li>Show more</li>
        </ul>
    </div>
  )
}

export default Sidebar