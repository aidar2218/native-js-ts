export type UserType = {
    name: string
    hair: number
    address: {
        title: string
    }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserWithLaptopType & {
    books: string[]
}

export type UserWithCompaniesType = UserWithBooksType & {
    companies: Array<{id: number, title: string}>
}

export const makeHairstyle = (u: UserType, power: number) => {
    return {...u, hair: u.hair / power};
}

export const moveUser = (u: UserWithLaptopType, cityTitle: string) => {
    return {...u,
        address: {
            ...u.address,
            title: cityTitle}
    };
}

export const upgradeLaptop = (user: UserWithLaptopType, laptopTitle: string) => {
    return {
        ...user,
        laptop: {
            ...user.laptop,
            title: laptopTitle
        }
    }
}

export const addNewBooksToUser = (user: UserWithBooksType, books: string[]) => {
    return {
        ...user,
        books: [...user.books, ...books]
    }
}

export const updateBook = (user: UserWithBooksType, expected: string, returned: string) => {
    return {
        ...user,
        books: user.books.map(book => book === expected ? returned : book),
    }
}

export const removeBook = (user: UserWithBooksType, book: string) => ({
    ...user,
    books: user.books.filter(b => b !== book)
})

export const addCompany = (user: UserWithCompaniesType, companyTitle: string) => ({
    ...user,
    companies: [...user.companies, {id: Math.round(Math.random() * 2345), title: companyTitle}]
})

export const updateCompanyTitle = (user: UserWithCompaniesType,
                                   companyID: number,
                                   newTitle: string) => ({
    ...user,
    companies: user.companies.map(comp => comp.id === companyID
        ? {...comp, title: newTitle}
        : comp)
})