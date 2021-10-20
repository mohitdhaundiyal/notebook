import React from 'react'

export default function AddNote() {
    return (
        <div>
            <h4>Add Note</h4>
            <hr />
            <form action="" method="post">
                <div className="mb-3">
                    <input type="text" className="form-control" name="title" placeholder="Title" />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" name="description" placeholder="Description" />
                </div>
                <button className="btn btn-primary">Add</button>
            </form>
        </div>
    )
}
