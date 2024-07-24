import React from "react";

function Notes(props){

    return(
        <div>
            {props.notes.map((value,index)=>{return (<p key={index}>{value}</p>);})}
        </div>

    );
}

export default Notes;