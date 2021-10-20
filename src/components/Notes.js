import React, { useContext } from 'react'
import NoteContext from './context/notes/NoteContext'
import NoteItem from './NoteItem';

export default function Notes() {
    const context = useContext(NoteContext)
    const { notes, setNotes } = context;
    return (
        <div>
            <h4>Your Notes</h4>
            <hr />
            {notes.map((note) => {
                return (
                    <NoteItem note={note} key={note._id} />
                )
            })}
        </div>
    )
}
