import {GovernmentBuildingType, HouseType} from "../02-objects/objects2";

export const addMoneyToBudget = (govBuilding: GovernmentBuildingType, money: number) => {
    govBuilding.budget += money;
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true;
}