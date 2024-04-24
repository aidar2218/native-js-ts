import {CityType, GovernmentBuildingType} from "../02-objects/objects2";

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {
    city.houses = city.houses.filter(house => house.address.street.title !== street);
}

export const getBuildingsWithStaffCountGreaterThen = (govBuildings: GovernmentBuildingType[], staffCount: number) => {
    return govBuildings.filter(b => b.staffCount > staffCount);
}