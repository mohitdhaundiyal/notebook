import React from 'react'

export default function NoteItem(props) {
    const note = props.note;
    return (
        <div className="card mx-1 my-2 shadow-sm" style={{ borderRadius: '1rem' }}>
            <div className="card-body">
                <h5 className="card-title d-flex justify-content-between">
                    {note.title}
                    <div>
                        <i className="bi bi-x-lg text-danger ms-1"></i>
                    </div>
                </h5>
                <p className="card-text">{note.description}</p>
            </div>
        </div>
    )
}
