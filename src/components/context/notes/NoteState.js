import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {
    const [notes, setNotes] = useState([])

    // get notes of auth user
    const getNotes = async () => {
        const response = await fetch("http://localhost:5000/api/notes/getNotes", {
            method: "GET",
            headers: {
                'Content-type': 'application/json',
                'auth-token': localStorage.getItem('token')
            }
        });
        const json = await response.json()
        setNotes(json)
    }

    // add note
    const addNote = async (title, description, tag) => {
        const response = await fetch("http://localhost:5000/api/notes/addNote", {
            method: "POST",
            headers: {
                'Content-type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title: title, description: description, tag: tag })
        })

        const json = await response.json()
        setNotes(notes.concat(json))
        console.log(json)
    }

    //update notes
    const updateNote = async (id, title, description, tag) => {
        const response = await fetch(`http://localhost:5000/api/notes/updateNote/${id}`, {
            method: "PUT",
            headers: {
                'Content-type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
            body: JSON.stringify({ title: title, description: description, tag: tag })
        })
        const json = await response.json()
        // console.log(json)
        let newNotes = JSON.parse(JSON.stringify(notes))
        for (let index = 0; index < notes.length; index++) {
            const element = newNotes[index];
            if (element._id === id) {
                newNotes[index].title = title;
                newNotes[index].description = description;
                newNotes[index].tag = tag;
                break;
            }
        }
        setNotes(newNotes);
    }

    // delete notes
    const deleteNote = async (id) => {
        const response = await fetch(`http://localhost:5000/api/notes/deleteNote/${id}`, {
            method: "DELETE",
            headers: {
                'Content-type': 'application/json',
                'auth-token': localStorage.getItem('token')
            },
        })
        const json = await response.json()
        console.log(json)
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes)
    }

    return (
        <NoteContext.Provider value={{ notes, setNotes, getNotes, addNote, deleteNote, updateNote }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;