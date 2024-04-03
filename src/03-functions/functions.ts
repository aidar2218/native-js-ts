import {StudentType} from "../02-objects/objects";

export const addNewSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    });
};

export const makeStudentActive = (st: StudentType) => {
    st.isActive = true;
}

export const changeStudentsCity = (st: StudentType, cityTitle: string) => {
    st.address.city.title = cityTitle;
}