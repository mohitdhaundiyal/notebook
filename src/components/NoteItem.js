import React, { useContext, useState } from 'react'
import NoteContext from './context/notes/NoteContext'

export default function NoteItem(props) {
    const note = props.note;
    const context = useContext(NoteContext)
    const { deleteNote, updateNote } = context;

    const onDelete = () => {
        deleteNote(note._id)
    }

    const [edit, setEdit] = useState({ id: note._id, title: note.title, description: note.description, tag: note.tag })

    const onChange = (e) => {
        setEdit({ ...edit, [e.target.name]: e.target.value })
    }

    const onUpdate = () => {
        updateNote(edit.id, edit.title, edit.description, edit.tag)
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
                <div className="d-flex justify-content-end">
                    <i class="bi bi-pencil-square" data-bs-toggle="modal" data-bs-target={`#Modal${note._id}`}></i>
                </div>
            </div>
            <div className="modal fade" id={`Modal${note._id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">

                    <div className="modal-body">
                        <div className="modal-content" style={{ borderRadius: '1rem' }}>
                            <div className="modal-header">
                                <h6 className="modal-title">Edit Note</h6>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="mb-3">
                                    <input type="text" className="form-control" name="title" value={edit.title} onChange={onChange} />
                                </div>
                                <div className="mb-3">
                                    <textarea type="text" className="form-control" rows="7" name="description" value={edit.description} onChange={onChange} ></textarea>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-primary btn-sm" onClick={onUpdate} data-bs-dismiss="modal">Update</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
