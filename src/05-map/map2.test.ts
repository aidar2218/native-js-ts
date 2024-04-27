import {CityType} from "../02-objects/objects2";
import {createMessages, getStreetsTitlesOfGovernmentBuildings, getStreetsTitlesOfHouses} from "./map2";


let cityForMap: CityType;

beforeEach(() => {
    cityForMap = {
        title: "New York",
        houses: [
            {
                id: 23,
                builtAt: 2000,
                repaired: false,
                address: {
                    number: 224,
                    street: {
                        title: "Freedom str."
                    }
                }
            },
            {
                id: 2,
                builtAt: 1978,
                repaired: true,
                address: {
                    number: 32,
                    street: {
                        title: "Santa str."
                    }
                }
            },
            {
                id: 3,
                builtAt: 2020,
                repaired: false,
                address: {
                    number: 41,
                    street: {
                        title: "Baker str."
                    }
                }
            },

        ],
        governmentBuildings: [
            {
                type: "HOSPITAL",
                budget: 10000000,
                staffCount: 300,
                address: {
                    number: 18,
                    street: {
                        title: "Baker str."
                    }
                }
            },
            {
                type: "POLICE-STATION",
                budget: 1000000,
                staffCount: 150,
                address: {
                    number: 419,
                    street: {
                        title: "Freedom str."
                    }
                }
            },

        ],
        numberOfInhabitants: 1000000,
    }
});


test("list of streets titles of government buildings", () => {
    let streetsNames = getStreetsTitlesOfGovernmentBuildings(cityForMap.governmentBuildings);

    expect(streetsNames.length).toBe(2);
    expect(streetsNames[0]).toBe("Baker str.");
    expect(streetsNames[1]).toBe("Freedom str.");
});

test('list of streets titles', ()=> {
    let streetsNames = getStreetsTitlesOfHouses(cityForMap.houses);

    expect(streetsNames.length).toBe(3);
    expect(streetsNames[0]).toBe("Freedom str.");
    expect(streetsNames[1]).toBe("Santa str.");
    expect(streetsNames[2]).toBe("Baker str.");
});

test("create greeting messages for streets", ()=> {
    let messages = createMessages(cityForMap.houses);

    expect(messages.length).toBe(3);
    expect(messages[0]).toBe("Hello everyone from Freedom str.");
    expect(messages[1]).toBe("Hello everyone from Santa str.");
    expect(messages[2]).toBe("Hello everyone from Baker str.");
})