import {React, useState} from 'react';
import MoodBoardNamer from './Components/MoodBoardNamer';
import BoardArea from './Components/BoardArea';
import AddElements from './Components/AddElements';
import ImageMenu from './Components/ImageMenu';
import SidePanel from './Components/SidePanel';
import { useEffect } from 'react';
import PracticeElements from './PracticeElements';

function CreateMoodBoard() {
    let [elements, setElements] = useState([]);
    let [change, setChange] = useState(true);
    let [selectedImage, setSelectedImage] = useState();
    let [selectedText, setSelectedText] = useState();
    let [mbId, setMbId] = useState();
    let [updateText,  setUpdateText] = useState(false);
    let [textStyles, setTextStyles]= useState()
    let [moodboardName, setMoodboardName]= useState()

    useEffect(() => {
      setElements(PracticeElements)
      console.log(elements)
    }, [])
    
    function handleSelectedImage(imageUrl){
        setSelectedImage(imageUrl);
      }
      function handleSelectedText(textToEdObj){
        setSelectedText(textToEdObj);
      }

      function updateElements(index, elObject,){
        // save current elements to variable - shallow copy
        // remove the element by index and replace with edited version
        // set elements (newvariable) 
      }

  return (
    <div className='moodboard-page'>
        <MoodBoardNamer/>
        <div className='mb-page-grid-container'>
        <BoardArea
         handleSelectedImage={handleSelectedImage}
         handleSelectedText={handleSelectedText}
         change={change}
        />
        <SidePanel/>

        </div>
        {/* <ImageMenu/> */}
        
        {/* <AddElements/> */}
        
       
        


    </div>
  )
}

export default CreateMoodBoard