import React from 'react'
import AddNote from './AddNote'
import Notes from './Notes'

export default function Home() {
    return (
        <div className="row">
            <div className="col-lg-7">
                <AddNote />
            </div>
            <div className="col-lg-5">
                <Notes />
            </div>
        </div>
    )
}
