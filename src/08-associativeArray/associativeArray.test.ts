type FriendsType = {
    [key: string]: {id: number, name: string};
}

let myFriends: FriendsType;

beforeEach(() => {
    myFriends = {
        "44": {id: 44, name: "Aidar"},
        "85675": {id: 85675, name: "Baizak"},
        "13": {id: 13, name: "Azim"},
        "898": {id: 898, name: "Agbar"},
    }
});

test("should update corresponding friend from myFriends", () => {
    myFriends["898"].name = "Anvarbekov Agbar";

    expect(myFriends["898"]).toEqual({id: 898, name: "Anvarbekov Agbar"});
});


test("should delete corresponding friend from myFriends", () => {
    delete myFriends["898"];

    expect(myFriends["898"]).toBeUndefined();
});