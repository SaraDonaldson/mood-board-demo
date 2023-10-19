import React from 'react'
import { useState, useEffect } from "react";

function ImageMenu({selectedImage, handleSaveImage}) {
let [imageToEdit, setImageToEdit] = useState(selectedImage);
  
  useEffect(() => {
    setImageToEdit(selectedImage)
  }, [selectedImage])

  return (
    <div className='image-menu'>
        <h2>Edit Image</h2>

        <h3>Position</h3>
        <div >
        <button className='position-btn' onClick={() => {handleSaveImage("Position", "-1")}}>Back - </button>
        <button className='position-btn'onClick={() => {handleSaveImage("Position", "+1")}}>Forward + </button>
        </div>
        <button className='crop-btn'onClick={() => {handleSaveImage("Crop")}}>crop</button>
        <button className='delete-btn' onClick={() => {handleSaveImage("delete")}}>delete</button>
       

    </div>
  )
}

export default ImageMenu