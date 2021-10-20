import React from 'react'

export default function NoteItem(props) {
    const note = props.note;
    return (
        <div className="card mb-3">
            <div className="card-header">
                {note.title}
            </div>
            <div className="card-body">
                <p className="card-text">{note.description}</p>
                <a href="/home" className="btn btn-dark btn-sm me-2"><i className="bi bi-pencil-square"></i></a>
                <a href="/home" className="btn btn-danger btn-sm me-2"><i className="bi bi-trash"></i></a>
            </div>
        </div>
    )
}
