import React,{useState} from "react";
import AddIcon from "@material-ui/icons/Add";
import Button from '@material-ui/core/Button';

function CreateNote(props) {

   const [note,setNote] = useState({
       title:"",
       content:""
   });
    function handleChange(event){
        const {name,value} = event.target;

    setNote(prevNote => {
        return{
            ...prevNote,
            [name]: value
        };
    });
}
            function submitNote(event){
            props.onAdd(note);
            setNote({
                title: "",
                content: ""
            });
            event.preventDefault();
                        }
       

    return(
        <div>
            <form>
                <input 
                name="title"  
                onChange={handleChange} 
                value={note.title} 
                placeholder="Title"
                 />
                <textarea 
                name="content"
                onChange ={handleChange}
               placeholder="Add a note...."
               value = {note.content}
               rows="3"/>
                 
                <Button type="submit" onClick={submitNote} variant="contained" color="primary">
                    <AddIcon />
                </Button> 
                
                
            </form>
        </div>

    );
}


export default CreateNote;