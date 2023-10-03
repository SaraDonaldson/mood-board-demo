import React from 'react';
import "./imageModal.css";
import AddImageElement from '../AddImageElement';
import AddImageGrid from './AddImageGrid';

export default function Popup({
  setTrigger,
  trigger,
  selectedImage,
  children
})
{

  function addImageToBoard(){
    setTrigger(false);
  }

  return (trigger) ? (
    <div className='Overlay' onClick={()=> setTrigger(false)}>
    <div className='popup'>
      <div className='popup-inner'onClick={(e)=> {e.stopPropagation()}}>
        <button className='close-btn'onClick={()=> setTrigger(false)}>x</button>
       <h3>Add an image url or choose an image below</h3>
        <AddImageElement/>
        <AddImageGrid/>
        <button onClick={e=>addImageToBoard()}>add</button>
        
       
      </div>
    </div>
    </div>
  ) : "";
}
