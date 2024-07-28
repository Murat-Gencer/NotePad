import React, { useState } from "react";

function Notes(props) {

    const handleRemove = (index) => {
        props.setNotes(props.notes.filter((_, i) => i !== index));
    };

    return (
        <div>
            {props.notes.map((value, index) => (
                <button
                    key={index}
                    onClick={() => handleRemove(index)}
                >
                    {value}
                </button>
            ))}
        </div>
    );
}

export default Notes;