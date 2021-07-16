import React,{useState} from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import CreateNote from "./createNote";



function newNotes(newNote){
    return(<Note
        key={newNote.key}
        title ={newNote.title}
        content={newNote.content}
        />
    );
}

function App(){

    const [notes, setNotes] = useState([]);

    function addNote(newNote){
        setNotes(prevNotes =>{
           return [...prevNotes, newNote];
        });
    }

    function deleteNote(id) {
        setNotes(prevNotes => {
          return prevNotes.filter((noteItem, index) => {
            return index !== id;
          });
        });
      }

    return(
        <div>
           <Header />
           <CreateNote 
               onAdd={addNote}
           />
           {notes.map((newnoteItem, index) =>{
               return (
                   <Note 
                   key={index}
            id={index}
            title ={newnoteItem.title}
                content={newnoteItem.content} 
                onDelete={deleteNote}
                />
               );
           })}
        
           <Footer />
           
        </div>
    );
}

export default App;
