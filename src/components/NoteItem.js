import React, { useContext } from 'react'
import NoteContext from './context/notes/NoteContext'

export default function NoteItem(props) {
    const note = props.note;
    const context = useContext(NoteContext)
    const { deleteNote } = context;

    const onDelete = () => {
        deleteNote(note._id)
    }

    return (
        <div className="card mx-1 my-2 shadow-sm" style={{ borderRadius: '1rem' }}>
            <div className="card-body">
                <h5 className="card-title d-flex justify-content-between">
                    <div>{note.title}</div>
                    <div>
                        <i className="bi bi-x text-danger ms-1" onClick={onDelete}></i>
                    </div>
                </h5>
                <p className="card-text">{note.description}</p>
            </div>
        </div>
    )
}
