import React from 'react';

export default function SelectedInmate(props) {
    return (
        <div>
            <h4>{props.selected.name}</h4>
            <span onClick={() => props.handleShowInmate({})}>X</span>
            <div>{props.selected.release}</div>
            <div>{props.selected.state}</div>
            <button onClick={() => props.handleDeleteInmate()}>Delete</button>
            <button onClick={() => props.toggleShowUpdate()}>Update</button>
        </div>
    )
}