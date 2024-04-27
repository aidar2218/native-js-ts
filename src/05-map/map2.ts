import {GovernmentBuildingType, HouseType} from "../02-objects/objects2";

export const getStreetsTitlesOfGovernmentBuildings = (buildings: GovernmentBuildingType[]) => {
    return buildings.map(b => b.address.street.title);
}

export const getStreetsTitlesOfHouses = (houses: HouseType[]) => {
    return houses.map(b => b.address.street.title);
}

export const createMessages = (houses: HouseType[]) => {
    return houses.map(h => `Hello everyone from ${h.address.street.title}`);
}