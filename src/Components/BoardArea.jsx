import React, { useState, useEffect } from "react";
import "./board.css";
import { Rnd } from "react-rnd";

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



    function handleSelectText(textToEd, elementId){
        handleSelectedText({text:textToEd, key:elementId});
        setTextIsSelected(elementId);
      }
    
      function getElementType(element){
        console.log("element", element);
        let tempEl = {...element}
        let elType = tempEl.type.replace("[",'').replace("]",'').split(",");
        let elT = elType[0].replace("{",'').replace("}",'').split(":");
        console.log("elT", elT);
        console.log("elT[1]", elT[1]);
        return elT[1];
      }
    


  return (
    <div 
    className='displayArea'  
    // style={mystyle}
    style={{backgroundColor: background}}
    >
     

     {currentBoard.map((element,index) => {
     let elementType = getElementType(element);  
     if (elementType === "label"||element.type === "label"){
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
            {element.value}  </p>  
          </Rnd>
          );


         } else {
          return (
            <Rnd
            lockAspectRatio={true}
            default={{
              x: 0,
              y: 0,
              width: 200,
              height: 200,
              // minWidth:100,
              // minHeight:100,
              // maxWidth:700,
              // maxHeight:700,
             
            }}
            key={element.id}
          >
              <div 
              className="mb-image" 
              // onClick={() => {handleSelect(`${element.value}`)}}
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
                // top: `${element.top}%`,
                // left: element.left+'%',
                zIndex: 1,
                minWidth:'100%',
                minHeight:'100%',
                objectFit: "100%",  
                
                     
              }}
              src={element.value}/>
              
              </div>
              </Rnd>
          ); 
        }
      })}
   
    </div>
  )
}

export default BoardArea