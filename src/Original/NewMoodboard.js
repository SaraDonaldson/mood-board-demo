import React, { useState,useEffect } from "react";
import AddElement from "../Components/AddElement/FormAddElement.js";
import { randomIntFromInterval } from "../Utils/utils";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./NewMoodboard.css";
import SelectedBoard from "../Components/EditBoard/SelectedBoard.jsx"
import postElement from "../Utils/PostElement.js";
import fetchNameMB from "../Utils/FetchNameMB.js";

const NewMoodboard = ({
  props,  
  currentBoardId,
  newBoardName,
  
  }) => {
  let [elements, setElements] = useState([]);
  let [change, setChange] = useState(true);
  let [selectedImage, setSelectedImage] = useState();
  let [selectedText, setSelectedText] = useState();
  let [mbId, setMbId] = useState();
  let [updateText,  setUpdateText] = useState(false);
  let [textStyles, setTextStyles]= useState()
  let [moodboardName, setMoodboardName]= useState()
 

  function fireChange(){
    setChange(!change)
  }
  const {id} = useParams()
  useEffect(() => {
    setMbId(id)
    GetMoodboardName(id)
    console.log("the url ID:", id)
  }, [])

  const handleAddElements = (value, type, top, left) => {
    let newElement =({ id, type, value, top, left });
    console.log("add element - elements:" , elements)
    console.log("add element - new:", newElement)
    console.log("mbId", mbId)
    postElement(mbId, value, type, top, left)
    setChange(!change);
  };
  
  async function GetMoodboardName(mbId){
      let rawName = await fetchNameMB(id)
      let separateName = rawName[0].name.split(",");
      setMoodboardName(separateName[0])
  }

  const randomizePosition = () => {
    const changedElements = elements.map((element) => {
      element.top = randomIntFromInterval(0, 75);
      element.left = randomIntFromInterval(0, 75);
      return element;
    });
    setElements(changedElements);
  };

  

  function textPreviewStylecb(styles, key){
    setUpdateText(true);
    let obj={}
    if(styles.color){
      obj.color=styles.color
      elements[key].color=styles.color
    }
    if(styles.fontFamily){
      obj.fontFamily=styles.fontFamily
      elements[key].fontFamily=styles.fontFamily
    }
    // console.log("NewMoodboard callback define. Obj:", obj, "styles: ", styles);
    // setTextPreviewStyle(obj);
  }


  // const handleSubmit = () => {
  //   props.addMoodboardCb(boardName, elements);
  //   setElements([]);
  //   setBoardName("");
  // };

  // const handleChangeBoardName = (event) => {
  //   setBoardName(event.target.value);
  // };

  function handleSelectedImage(imageUrl){
    setSelectedImage(imageUrl);
  }
  function handleSelectedText(textToEdObj){
    setSelectedText(textToEdObj);
  }


  

  return (
    <div>
      <nav className="navbar">
        <Link className="navButton" to="/">
          Home
        </Link>
      </nav>

      <div className="container text-center">
        <h3 className="moodboard-name">{moodboardName}</h3>
        <div className="row">
          <div className="col-9">
            {/* <SelectedMoodboard 
            board1={elements} 
            handleSelectedImage={handleSelectedImage}
            handleSelectedText={handleSelectedText}
            currentBoardId= {currentBoardId}
            // textPreviewStyle ={textPreviewStyle}
            /> */}
              <SelectedBoard
            handleSelectedImage={handleSelectedImage}
            handleSelectedText={handleSelectedText}
            
            mbId={mbId}
            change={change}
            // board1={elements} 
            />
          </div>
          <div className="col-3">
            <AddElement 
            addElements={handleAddElements}
            selectedImage={selectedImage}
            selectedText={selectedText}
            textPreviewStylecb={textPreviewStylecb}
            currentBoardId= {currentBoardId}
            id={id}
            moodboardName={moodboardName}
            fireChange={fireChange}
             />
            {/* <div>
              <button
                className="changeButton"
                type="button"
                onClick={randomizePosition}
              >
               🧸
              </button>
            </div> */}
            {/* <label className="formlabel3">
              <input
                className="inputStyle"
                placeholder="Moodboard name"
                type="text"
                value={boardName}
                onChange={handleChangeBoardName}
              ></input>
            </label>
            <button className="saveButton" type="button" onClick={handleSubmit}>
              Save
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMoodboard;
