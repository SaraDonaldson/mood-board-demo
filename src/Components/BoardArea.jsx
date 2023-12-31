import React, { useState, useEffect } from "react";
import "./board.css";
import { Rnd } from "react-rnd";
// import practiceElements from "../PracticeElements.js";

function BoardArea({ 
    backgroundStyle, 
    handleSelectedImage, 
    handleSelectedText, 
    textPreviewStyle,
    boardElementsData,
   change}) {

    let  [background, setBackground] =useState();
    const [currentBoard, setCurrentBoard]=useState([]);
    let [changes, setChanges] = useState(change);
    let [textIsSelected, setTextIsSelected]= useState(false);
    let [imageIsSelected, setImageIsSelected]= useState(false);
 
    const mystyle = backgroundStyle;


    useEffect(() => {
     setCurrentBoard(boardElementsData);
     console.log(boardElementsData)
    }, [boardElementsData])
    
    function handleSelectText(textToEd, elementId){
        handleSelectedText({text:textToEd, key:elementId});
        setTextIsSelected(elementId);
      }
      function handleSelectImage(elementId, index){
        handleSelectedImage({key:elementId, index: index});
        setImageIsSelected(false)
        setImageIsSelected(elementId);
      }
   
    


  return (
    <div 
    className='displayArea'  
    // style={mystyle}
    style={{backgroundColor: background}}
    >
     

     {currentBoard.map((element,index) => {
     if (element.elType === "text"){
          return (

            <Rnd
            default={{
              x: 0,
              y: 0,
              // width: 320,
              // height: 200,
            }}
            key={element.id}
            onClick={() => {handleSelectText(`${element.value}`, element.id)}}
            >
   
            <p
              draggable= {false}
              style= {{
                position: "absolute",
                top: element.top+ '%',
                left: element.left + '%',
                zIndex: 5,
                
                color: element.text_color? element.text_color : "black",
                fontFamily: element.font_family? element.font_family : "initial",

              }}
              className={textIsSelected === index ? "selected-text" : ""} 
            >
            {element.detail}  </p>  
          </Rnd>
          );


         } else {
          return (
            <Rnd
            lockAspectRatio={false}
            default={{
              x: 0,
              y: 0,
              width: 150,
              height: 150,
              minWidth:150,
              minHeight:150,
              maxWidth:500,
              maxHeight:500,
              zIndex:`${element.zIndex}`,
            
             
            }}
            key={element.id}
          >
              <div 
              className="mb-image" 
              onClick={() => {handleSelectedImage(`${element.id}`, `${index}`)}}
              style={{
                minWidth:'100%',
                minHeight:'100%',
                objectFit: "cover", 
                
            }}
             >

            <img 
            draggable= {false}
            className={imageIsSelected ? "selected-image" : ""} 
            alt= ""
            style={{
                zIndex:`${element.zIndex}`,
                minWidth:'100%',
                minHeight:'100%',
               
                
                     
              }}
              src={element.detail}/>
              
              </div>
              </Rnd>
          ); 
        }
      })}
   
    </div>
  )
}

export default BoardArea