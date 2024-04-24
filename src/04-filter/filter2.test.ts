import {CityType} from "../02-objects/objects2";
import {demolishHousesOnTheStreet, getBuildingsWithStaffCountGreaterThen} from "./filter2";

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [
            {
                id: 1,
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
})

// 01. Дополните тип HouseType (добавьте порядковый id от 1 и по возрастанию)
// 02. Создайте в том же файле ещё одну функцию, чтобы тесты прошли
test('House should be destroyed', () => {
    demolishHousesOnTheStreet(city, "Freedom str.");

    expect(city.houses.length).toBe(2);
    expect(city.houses[0].id).toBe(2);
    expect(city.houses[1].id).toBe(3);

})

// 03. Массив строений, где работают больше 500 людей
test('buildings with correct staff count', () => {
    let buildings = getBuildingsWithStaffCountGreaterThen(city.governmentBuildings, 200)

    expect(buildings.length).toBe(1);
    expect(buildings[0].type).toBe("HOSPITAL");
})