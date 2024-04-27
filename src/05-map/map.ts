export type ManType = {
    name: string
    age: number
};

export const createGreetingMessages = (people: ManType[]) => {
    return people.map(p => `Hello ${p.name.split(" ")[0]}, welcome to INCUBATOR`);
};