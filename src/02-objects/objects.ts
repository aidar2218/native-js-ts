
type CityAddrType = {
    title: string
    country: string
}

type AddressType = {
    city: CityAddrType
    street: string
}

type TechnologyType = {
    id: number
    title: string
}

export type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: TechnologyType[]
}
