import {createGreetingMessages, ManType} from "./map";


let people: ManType[];

beforeEach(() => {
    people = [
        {name: "Aidar Ibraev", age: 24},
        {name: "Azim Samsaliev", age: 23},
        {name: "Agbar Anvarbekov", age: 24}
    ];
});

test("should get array of greeting messages", () => {

    const messages = createGreetingMessages(people);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello Aidar, welcome to INCUBATOR");
    expect(messages[1]).toBe("Hello Azim, welcome to INCUBATOR");
    expect(messages[2]).toBe("Hello Agbar, welcome to INCUBATOR");
});