import React from 'react'
import ImageMenu from './ImageMenu'
import AddElements from './AddElements'
import './sidePanel.css';

function SidePanel(
  {handleSaveImage,
  
  }) {
  return (
    <div className='side-panel'>
        <div className='panel-section-one'>
            {/* <AddElements/> */}

        </div>
        <div className='panel-section-two'>
            <ImageMenu
            handleSaveImage ={handleSaveImage}
            />

        </div>
       



    </div>
  )
}

export default SidePanel