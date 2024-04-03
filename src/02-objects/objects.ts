
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

type StudentType = {
    id: number
    name: string
    age: number
    isActive: boolean
    address: AddressType
    technologies: TechnologyType[]
}


const student: StudentType = {
    id: 1,
    name: "Aidar",
    age: 24,
    isActive: true,
    address: {
        city: {
            title: "Tokmok",
            country: "Kyrgyzstan"
        },
        street: "1-mcr"
    },
    technologies: [
        {id: 1, title: "html"},
        {id: 2, title: "css"},
        {id: 3, title: "js"},
    ]
}
