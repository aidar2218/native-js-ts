import {StudentType} from "../02-objects/objects";
import {addNewSkill, changeStudentsCity, makeStudentActive} from "./functions";

let student: StudentType;

beforeEach(() => {
    student = {
        id: 1,
        name: "Aidar",
        age: 24,
        isActive: false,
        address: {
            city: {
                title: "Tokmok",
                country: "Kyrgyzstan"
            },
            street: "1-mcr"
        },
        technologies: [
            {id: 1, title: "html"},
            {id: 2, title: "css"},
            {id: 3, title: "js"},
        ]
    }
});

test("function addNewSkill should add new skill to student", () => {
    expect(student.technologies.length).toBe(3);

    addNewSkill(student, "react");

    expect(student.technologies.length).toBe(4);
    expect(student.technologies[3].id).toBeDefined();
    expect(student.technologies[3].title).toBe("react");

});

test("student should be active", () => {
    expect(student.isActive).toBe(false);

    makeStudentActive(student);

    expect(student.isActive).toBe(true);
});

test("student should live in the correct city", () => {
    expect(student.address.city.title).toBe("Tokmok");

    changeStudentsCity(student, "New York");

    expect(student.address.city.title).toBe("New York");
});