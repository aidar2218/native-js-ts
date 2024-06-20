type UserType = {
    name: string
    age: number
    address: {
        title: string
    }
}

let user: UserType;
let users: UserType[];


beforeEach(() => {
    user = {
        name: 'John',
        age: 32,
        address: {
            title: "New York"
        }
    }

    users = [
        {
            name: 'John',
            age: 32,
            address: {
                title: "New York"
            }
        },
        {
            name: 'Alex',
            age: 25,
            address: {
                title: "Miami"
            }
        }
    ]
})

function increaseAge(user: UserType) {
    user.age++;
}

test("User's age should be increased", () => {
    increaseAge(user);

    expect(user.age).toBe(33);

    const superman = user;

    superman.age = 1135;

    expect(user.age).toBe(1135);
    expect(superman.age).toBe(1135);
});

test("array (users) reference test", () => {
    let admins = users;

    admins.push({name: "Bake", age: 12, address: {title: "Tashkent"}});

    expect(users[2]).toEqual({name: "Bake", age: 12, address: {title: "Tashkent"}});
    expect(admins[2]).toEqual({name: "Bake", age: 12, address: {title: "Tashkent"}});
});

test("value test", () => {
    let usersCount = 100;
    let adminsCount = usersCount;

    adminsCount++;

    expect(usersCount).toBe(100);
    expect(adminsCount).toBe(101);
});

test("reference type test", () => {
    let wife: UserType = {
        name: "Samara",
        age: 23,
        address: {
            title: "Tokmok"
        }
    }
    let husband: UserType = {
        name: "Aidar",
        age: 24,
        address: wife.address
    }

    husband.address.title = "Barcelona";

    expect(husband.address.title).toBe("Barcelona");
    expect(wife.address.title).toBe("Barcelona");
});

test("reference type array test", () => {
    let wife: UserType = {
        name: "Samara",
        age: 23,
        address: {
            title: "Tokmok"
        }
    }
    let husband: UserType = {
        name: "Aidar",
        age: 24,
        address: wife.address
    }

    const users: UserType[] = [husband, wife, {name: "Aijamal", age: 6, address: husband.address}];

    const admins: UserType[] = [husband];

    admins[0].name = "Aidarinho";

    expect(users[0].name).toBe("Aidarinho");
    expect(husband.name).toBe("Aidarinho");
})