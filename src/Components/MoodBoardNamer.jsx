import {React, useState} from 'react';

function MoodBoardNamer() {
    let [moodBoardName, setMoodBoardName] = useState();
    let [editName, setEditName] = useState(false);
    let [nameInput, setNameInput] = useState('');

    function handleEditName(){
        setMoodBoardName(nameInput);
        setEditName(false);
    }

    function handleInput(event){
        setNameInput(event.target.value)
    }

  return (
    <div>
          <div>
            
            { !moodBoardName && !editName && (
            <div><h1>New Mood Board</h1>
             <button onClick={()=> setEditName(true)}>edit name</button>
             </div> 
             )} 
              { moodBoardName && !editName &&(
                 <div>
         <h1>{moodBoardName}</h1>
         <button onClick={()=> setEditName(true)}>edit name</button>
         </div> 
         )} 
        
         {editName && (
     <form
     onSubmit={handleEditName}
     >
         <label>
             <input
             value = {nameInput}
             type="text"
             onChange={(e) => handleInput(e)}
             ></input>
         </label>
         <button type='submit'>done</button>
     </form>
     )}


 </div>




    </div>
  )
}

export default MoodBoardNamer