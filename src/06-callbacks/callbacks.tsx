import React, {ChangeEvent, MouseEvent} from 'react';


export const User = () => {

    const deleteUser = (e: MouseEvent<HTMLButtonElement>) => {
        alert(e.currentTarget.name);
    }

    const nameChanged = () => {
        console.log("Name changed");
    }
    
    const ageChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log(`Age changed to ${event.currentTarget.value}`);
    }

    const onBlurHandler = () => {
        console.log("Focus lost");
    }

    return (
        <div>
            <textarea onChange={nameChanged} onBlur={onBlurHandler}>Aidar</textarea>
            <input type="number" onChange={ageChanged}/>
            <button name={"delete"} onClick={deleteUser}>Delete</button>
        </div>
    )
}