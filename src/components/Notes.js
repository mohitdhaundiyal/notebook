import React, { useContext, useEffect } from 'react'
import { useHistory } from 'react-router';
import NoteContext from './context/notes/NoteContext'
import NoteItem from './NoteItem';
import Masonry from 'react-masonry-css'

export default function Notes() {
    const context = useContext(NoteContext)
    const { notes, getNotes } = context;
    const history = useHistory();
    useEffect(() => {
        if (localStorage.getItem('token')) {
            getNotes()
        } else {
            history.push('/login')
        }
    }, [])

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 2
    };

    return (
        <div className="my-3">
            <h4>Your Notes</h4>
            <hr />

            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
                {notes.map((note) => {
                    return (
                        <NoteItem note={note} key={note._id} />
                    )
                })}
            </Masonry>
        </div>
    )
}
