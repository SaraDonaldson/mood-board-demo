import {React, useState} from 'react';

function MoodBoardNamer() {
    let [moodBoardName, setMoodBoardName] = useState();
    let [editName, setEditName] = useState(false);
    let [nameInput, setNameInput] = useState('');
    let [nameMe, setNameMe] = useState(true);
    let [nameIsEdited, setNameIsEdited]  = useState(false);

    function handleEditName(){
        setMoodBoardName(nameInput);
        setEditName(false);
    }

    function handleInput(event){
        setNameInput(event.target.value)
    }

  return (
    <div className='moodboard-namer'>
          <div>
            
            { !moodBoardName && !editName && nameMe && (
            <div className='edit-name' onClick={()=> setEditName(true)}><h1>Name me</h1>
        
             </div> 
             )} 
              { moodBoardName && !editName &&(
                 <div>
         <h1>{moodBoardName}</h1>
         <button  className= "edit-name-btn" onClick={()=> setEditName(true)}>edit name</button>
         </div> 
         )} 
        
         {editName && (
     <form
     onSubmit={handleEditName}
     >
         <label>
             <input
             className="while-editing-name"
             value = {nameInput}
             type="text"
             onChange={(e) => handleInput(e)}
             ></input>
         </label>
         <button className= "edit-name-btn" type='submit'>done</button>
     </form>
     )}


 </div>




    </div>
  )
}

export default MoodBoardNamer