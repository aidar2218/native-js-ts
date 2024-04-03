import {CityType} from "../02-objects/objects2";
import {addMoneyToBudget, repairHouse} from "./functions2";

let cityForFunctions: CityType;

beforeEach(() => {
    cityForFunctions = {
        title: "New York",
        houses: [
            {
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


test("function addMoneyToBudget should add 1 million to government buildings budget", () => {
    expect(cityForFunctions.governmentBuildings[0].budget).toBe(10000000);

    addMoneyToBudget(cityForFunctions.governmentBuildings[0], 1000000);

    expect(cityForFunctions.governmentBuildings[0].budget).toBe(11000000);
})


test("function repairHouse should change repair of house to true", () => {
    expect(cityForFunctions.houses[0].repaired).toBeFalsy();
    expect(cityForFunctions.houses[2].repaired).toBeFalsy();

    repairHouse(cityForFunctions.houses[0]);
    repairHouse(cityForFunctions.houses[2]);

    expect(cityForFunctions.houses[0].repaired).toBeTruthy();
    expect(cityForFunctions.houses[2].repaired).toBeTruthy();
})