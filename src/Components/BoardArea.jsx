import React, { useState, useEffect } from "react";
import "./board.css";
import { Rnd } from "react-rnd";
import practiceElements from "../PracticeElements.js";

function BoardArea({ 
    backgroundStyle, 
    handleSelectedImage, 
    handleSelectedText, 
    textPreviewStyle,
   change}) {

    let  [background, setBackground] =useState();
    const [currentBoard, setCurrentBoard]=useState([]);
    let [changes, setChanges] = useState(change);
    const [textIsSelected, setTextIsSelected]= useState(false);
    const mystyle = backgroundStyle;


    useEffect(() => {
     setCurrentBoard(practiceElements);
     console.log(practiceElements)
    }, [])
    
    function handleSelectText(textToEd, elementId){
        handleSelectedText({text:textToEd, key:elementId});
        setTextIsSelected(elementId);
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
              width: 200,
              height: 200,
              minWidth:100,
              minHeight:100,
              maxWidth:500,
              maxHeight:500,
             
            }}
            key={element.id}
          >
              <div 
              className="mb-image" 
              onClick={() => {handleSelectedImage(`${element.id}`)}}
              style={{
                minWidth:'100%',
                minHeight:'100%',
    

            }}
             >

            <img 
            draggable= {false}
            // className={isSelected ? "selected-image" : ""} 
            alt= ""
            style={{
                zIndex: 1,
                minWidth:'100%',
                minHeight:'100%',
                objectFit: "100%",  
                
                     
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