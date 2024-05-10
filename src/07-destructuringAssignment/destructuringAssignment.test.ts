
export type PersonType = {
    name: string
    age: number
    lessons: LessonType[]
    address: AddressType
}

type LessonType = {
    title: string
    name?: string
}

type AddressType = {
    street: StreetType
}

type StreetType = {
    title: string
}

let person: PersonType;

beforeEach(() => {
    person = {
        name: "Aidar",
        age: 24,
        lessons: [{title: "1"}, {title: "2"}, {title: "3", name: "react"}],
        address: {
            street: {
                title: "Freedom str."
            }
        }
    }
})


test("start destructuring", () => {

    const {age, name} = person;
    const {title} = person.address.street;

    expect(age).toBe(24);
    expect(name).toBe("Aidar");

    expect(title).toBe("Freedom str.");

});


test("destructuring of array", () => {
    const lesson1 = person.lessons[0];
    const lesson2 = person.lessons[1];

    const [ls1, ls2] = person.lessons;

    expect(lesson1.title).toBe("1");
    expect(lesson2.title).toBe("2");

    expect(ls1.title).toBe("1");
    expect(ls2.title).toBe("2");


});

test("destructuring of array - second part", () => {

    const [, ls2, ...rest] = person.lessons;


    expect(ls2.title).toBe("2");
    expect(rest.length).toBe(1);
    expect(rest[0].title).toBe("3");

    expect(rest[0]).toStrictEqual({name: "react", title: "3"});
});