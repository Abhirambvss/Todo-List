import React from "react";
import Header from "./header";
import Footer from "./footer";
import Note from "./note";
import noteItems from "../noteItems";

function newNotes(newNote){
    return(<Note
        key={newNote.key}
        title ={newNote.title}
        content={newNote.content}
        />
    );
}

function App(){
    return(
        <div>
           <Header />
           {noteItems.map(newNotes)}
           <Footer />
        </div>
    );
}

export default App;