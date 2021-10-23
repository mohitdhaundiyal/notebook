import React, { useState, useContext } from 'react'
import NoteContext from './context/notes/NoteContext'

export default function AddNote() {
    const context = useContext(NoteContext)
    const { addNote } = context;

    const [note, setNote] = useState({ title: "", description: "", tag: "" })

    const onSubmit = (e) => {
        e.preventDefault();
        addNote(note.title, note.description, note.tag);
        setNote({ title: "", description: "", tag: "" })
    }

    const onChange = (e) => {
        setNote({ ...note, [e.target.name]: e.target.value })
    }

    return (
        <div>
            <h5>Add Note</h5>
            <hr />
            <form onSubmit={onSubmit}>
                <div className="mb-3">
                    <input type="text" className="form-control" name="title" value={note.title} onChange={onChange} placeholder="Title" required />
                </div>
                <div className="mb-3">
                    <textarea type="text" className="form-control" rows="3" name="description" value={note.description} onChange={onChange} placeholder="Description" required ></textarea>
                </div>
                {/* <div className="mb-3">
                    <input type="text" className="form-control" name="tag" value={note.tag} onChange={onChange} placeholder="Tag" />
                </div> */}

                <button className="btn btn-primary">Add</button>
            </form>
        </div>
    )
}
