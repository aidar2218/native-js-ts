import React from 'react';
import {PersonType} from "./destructuringAssignment.test";

type DestructuringAssignmentPropsType = {
    title: string
    person: PersonType
    food: string[]
    car: {model: string}
}

export const DestructuringAssignment = ({title, person, ...props}: DestructuringAssignmentPropsType) => {



    return (
        <div>
            <h1>{title}</h1>
            <hr/>
            <div>
                {person.name}
            </div>
            <div>
                {props.car.model}
            </div>
        </div>
    );
};

