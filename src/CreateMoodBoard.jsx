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
    let [selectedText, setSelectedText] = useState();
    let [mbId, setMbId] = useState();
    let [updateText,  setUpdateText] = useState(false);
    let [textStyles, setTextStyles]= useState()
    let [textIsSelected, setTextIsSelected]= useState(false);
    let [selectedImage, setSelectedImage] = useState({})
    let [elementIsSelected, setElementIsSelected] = useState(false);
    let [selectedElementType, setSelectedElementType] = useState(false);
    

    useEffect(() => {
      setElements(PracticeElements)
      console.log(elements)
    }, [])
    
    function handleSelectedImage(id, index){
      console.log("selected image id: ", id, " , index: ", index)
        setSelectedImage({id: id, index:index});
      }
      function handleSelectedText(textToEdObj){
        setSelectedText(textToEdObj);
      }

      function updateElements(index, elObject,){
        // save current elements to variable - shallow copy
        // remove the element by index and replace with edited version
        // set elements (newvariable) 
      }

function saveImage(changeType, changeInfo){
       let elementId= selectedImage.id
       let elementIndex = selectedImage.index
       let editBoard = [...elements]  
      console.log("save is fired", changeType, "elementId: ", elementId, "elementIndex: ", elementIndex)
      console.log("editBoard[objIndex]", editBoard[elementIndex] )
        // edit type is delete
        if (changeType=== "delete"){
            editBoard.splice(elementIndex,1)
        }
        if (changeType === "position"){
          if(changeInfo==="back"){
            if (editBoard[elementIndex].zIndex > 0){
              editBoard[elementIndex].zIndex -= 1
            }}
          if(changeInfo === "forward"){
            // if (editBoard[elementIndex].zIndex <= 15){
              let  currentZ =editBoard[elementIndex].zIndex 
                editBoard[elementIndex].zIndex =currentZ+1
                console.log("increasing z-index",  editBoard[elementIndex].zIndex)
            // }
          }  
        }


        setElements(editBoard)
        console.log(selectedImage)
    
  }

  return (
    <div className='moodboard-page'>
        <MoodBoardNamer/>
        <div className='mb-page-grid-container'>
        <BoardArea
         handleSelectedImage={handleSelectedImage}
         handleSelectedText={handleSelectedText}
         change={change}
         boardElementsData= {elements}
        />
        <SidePanel
        handleSaveImage={saveImage}
        />

        </div>
        {/* <ImageMenu/> */}
        
        {/* <AddElements/> */}
        
       
        


    </div>
  )
}

export default CreateMoodBoard