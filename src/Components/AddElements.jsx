import{ React, useState} from 'react'
import AddImageElement from './AddImageElement';
import AddImageModal from './Modals/AddImageModal'


function AddElements() {
    const [imageModalOpen, setImageModalOpen] = useState(false)


  return (
    <div>
        <button>Text</button>
        <button onClick={()=>  setImageModalOpen(true)}>Image</button>
        <button>Background Colour</button>
        <AddImageModal
        //  fireChange={fireChange}
         trigger= {imageModalOpen}
          setTrigger={setImageModalOpen}/>
        

    </div>
  )
}

export default AddElements