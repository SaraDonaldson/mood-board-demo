import React from 'react'

function ImageMenu() {


  return (
    <div className='image-menu'>
        <h2>Edit Image</h2>

        <h3>Position</h3>
        <div >
        <button className='position-btn'>Back - </button>
        <button className='position-btn'>Forward + </button>
        </div>
        <button className='crop-btn'>crop</button>

    </div>
  )
}

export default ImageMenu