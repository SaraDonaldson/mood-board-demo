import {React, useState} from 'react';
import MoodBoardNamer from './Components/MoodBoardNamer';
import BoardArea from './Components/BoardArea';
import AddElements from './Components/AddElements';

function CreateMoodBoard() {
    let [elements, setElements] = useState([]);
    let [change, setChange] = useState(true);
    let [selectedImage, setSelectedImage] = useState();
    let [selectedText, setSelectedText] = useState();
    let [mbId, setMbId] = useState();
    let [updateText,  setUpdateText] = useState(false);
    let [textStyles, setTextStyles]= useState()
    let [moodboardName, setMoodboardName]= useState()

    function handleSelectedImage(imageUrl){
        setSelectedImage(imageUrl);
      }
      function handleSelectedText(textToEdObj){
        setSelectedText(textToEdObj);
      }

  return (
    <div>
        <MoodBoardNamer/>
        <BoardArea
         handleSelectedImage={handleSelectedImage}
         handleSelectedText={handleSelectedText}
         change={change}
        />
        <AddElements/>
        
       
        


    </div>
  )
}

export default CreateMoodBoard