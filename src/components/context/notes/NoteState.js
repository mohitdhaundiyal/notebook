import { useState } from "react";
import NoteContext from "./NoteContext";

const NoteState = (props) => {

    const notesInitial = [
        {
            "_id": "616ed7423b6e632c89a7a05a",
            "title": "making note 1",
            "description": "this is description for note 1",
            "tag": "note1",
            "user": "616ed4473b6e632c89a7a055",
            "timestamp": "2021-10-19T14:33:38.295Z",
            "__v": 0
        },
        {
            "_id": "616ed74d3b6e632c89a7a05c",
            "title": "making note 2",
            "description": "this is description for note 2",
            "tag": "note2",
            "user": "616ed4473b6e632c89a7a055",
            "timestamp": "2021-10-19T14:33:49.800Z",
            "__v": 0
        },
        {
            "_id": "616ed7573b6e632c89a7a05e",
            "title": "making note 3",
            "description": "this is description for note 3",
            "tag": "note3",
            "user": "616ed4473b6e632c89a7a055",
            "timestamp": "2021-10-19T14:33:59.979Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial)

    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;