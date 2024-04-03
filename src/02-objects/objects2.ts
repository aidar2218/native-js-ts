export type GovernmentBuildingType = {
    type: "HOSPITAL" | "POLICE-STATION"
    budget: number
    staffCount: number
    address: AddressType
};



type StreetType = {
    title: string
}
type AddressType = {
    number: number
    street: StreetType
}
export type HouseType = {
    builtAt: number
    repaired: boolean
    address: AddressType
};

export type CityType = {
    title: string
    houses: HouseType[]
    governmentBuildings: GovernmentBuildingType[]
    numberOfInhabitants: number
}