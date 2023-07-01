import {React, useState} from 'react'

function AddImageElement() {
    let [urlInput, setUrlInput] = useState('');

    function handleSaveElement(){
    //    Add to local storage and/or usestate array
    }

    function handleInput(event){
        setUrlInput(event.target.value)
    }

  return (
    <div className='add-image-element'>
        <form
         onSubmit={handleSaveElement}>
            <label>
                <input
                aria-label='enter an image url'
                placeholder='image url'
                value = {urlInput}
                type="text"
                onChange={(e) => handleInput(e)}
                >
                </input>
            </label>
            <button type='submit'>add</button>
        </form>







    </div>
  )
}

export default AddImageElement