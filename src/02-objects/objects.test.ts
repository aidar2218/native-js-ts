import {CityType} from "./objects2";


let city: CityType;

beforeEach(() => {
    city = {
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


test("city should contains 3 houses", () => {
    expect(city.houses.length).toBe(3);

    expect(city.houses[0].builtAt).toBe(2000);
    expect(city.houses[0].repaired).toBe(false);
    expect(city.houses[0].address.number).toBe(224);
    expect(city.houses[0].address.street.title).toBe("Freedom str.");

    expect(city.houses[1].builtAt).toBe(1978);
    expect(city.houses[1].repaired).toBe(true);
    expect(city.houses[1].address.number).toBe(32);
    expect(city.houses[1].address.street.title).toBe("Santa str.");

    expect(city.houses[2].builtAt).toBe(2020);
    expect(city.houses[2].repaired).toBe(false);
    expect(city.houses[2].address.number).toBe(41);
    expect(city.houses[2].address.street.title).toBe("Baker str.");
});


test("city should contains hospital and police station", () => {
    expect(city.governmentBuildings.length).toBe(2);

    expect(city.governmentBuildings[0].type).toBe("HOSPITAL");
    expect(city.governmentBuildings[0].budget).toBe(10000000);
    expect(city.governmentBuildings[0].staffCount).toBe(300);
    expect(city.governmentBuildings[0].address.number).toBe(18);
    expect(city.governmentBuildings[0].address.street.title).toBe("Baker str.");

    expect(city.governmentBuildings[1].type).toBe("POLICE-STATION");
    expect(city.governmentBuildings[1].budget).toBe(1000000);
    expect(city.governmentBuildings[1].staffCount).toBe(150);
    expect(city.governmentBuildings[1].address.number).toBe(419);
    expect(city.governmentBuildings[1].address.street.title).toBe("Freedom str.");
})