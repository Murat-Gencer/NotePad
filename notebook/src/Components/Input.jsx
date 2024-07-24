import React, { useState } from "react";

function Input(props){
    const [textareaValue, setTextareaValue] = useState('');

  const handleChange = (event) => {
    setTextareaValue(event.target.value);
  };

  const handleClick = () => {
    props.addNote(textareaValue);
    setTextareaValue("");
};

    return (
    <div className="input">
        <textarea
        value={textareaValue}
        onChange={handleChange}
        rows="4"
        cols="50"
      />
       <button className="add-button" onClick={handleClick}>Add</button>
    </div>
    );
}

export default Input;