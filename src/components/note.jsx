import React from "react";
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props){

    function handleClick(event){
        props.onDelete(props.id);
    }
    return(
        <div className="note">
         <h1>{props.title}</h1>
        <p>{props.content}</p>
        <Button  onClick={handleClick} variant="contained" color="primary">
        <DeleteIcon />
</Button>
  
        </div>
        
    );
}

export default Note;
